import { Controller, Get, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { ApiTags, ApiResponse } from "@nestjs/swagger";

@ApiTags("Health")
@Controller("health")
export class HealthController {
  private readonly logger = new Logger(HealthController.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Health status retrieved successfully.",
  })
  @ApiResponse({
    status: 500,
    description: "Internal server error while checking health status.",
  })
  async check(): Promise<{ 
    status: string; 
    mongoState: number;
    mongoStateDescription?: string;
    timestamp: string;
  }> {
    try {
      // Check if connection exists
      if (!this.connection) {
        this.logger.error("Database connection is not initialized");
        throw new HttpException(
          {
            status: "error",
            message: "Database connection is not initialized",
            timestamp: new Date().toISOString(),
          },
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }

      const dbState = this.connection.readyState;
      
      // MongoDB connection states:
      // 0 = disconnected
      // 1 = connected
      // 2 = connecting
      // 3 = disconnecting
      const stateDescriptions: Record<number, string> = {
        0: "disconnected",
        1: "connected",
        2: "connecting",
        3: "disconnecting",
      };

      const isHealthy = dbState === 1;
      const stateDescription = stateDescriptions[dbState] || "unknown";

      if (!isHealthy) {
        this.logger.warn(`Database connection is unhealthy. State: ${stateDescription} (${dbState})`);
      }

      return {
        status: isHealthy ? "ok" : "error",
        mongoState: dbState,
        mongoStateDescription: stateDescription,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error(`Health check failed: ${error.message}`, error.stack);
      
      // If it's already an HttpException, rethrow it
      if (error instanceof HttpException) {
        throw error;
      }

      // Otherwise, wrap it in a generic error response
      throw new HttpException(
        {
          status: "error",
          message: "Failed to check health status",
          error: error.message,
          timestamp: new Date().toISOString(),
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}

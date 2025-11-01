import { Controller, Get } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { ApiTags, ApiResponse } from "@nestjs/swagger";

@ApiTags("Health")
@Controller("health")
export class HealthController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Health status retrieved successfully.",
  })
  async check(): Promise<{ status: string; mongoState: number }> {
    const dbState = this.connection.readyState;

    return {
      status: dbState === 1 ? "ok" : "error",
      mongoState: dbState,
    };
  }
}

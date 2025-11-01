import { Controller, Get } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";

@Controller("health")
export class HealthController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get()
  async check(): Promise<{ status: string, mongoState: number }> {
    const dbState = this.connection.readyState;

    return {
      status: dbState === 1 ? "ok" : "error",
      mongoState: dbState,
    };
  }
}

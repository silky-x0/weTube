
// This is all BS, i mean its not BS but its not the best way to do it either
// coz NESTJS has its own way of handling errors 

import { NextFunction, Request, Response } from "express";

/**
 * Express-style async handler wrapper
 * Catches errors and sends a 500 response
 */
const AsyncHandler = (fn: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await fn(req, res, next);
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

/**
 * Alternative Express-style async handler
 * Passes errors to the next middleware (better for Express error handling)
 */
const AsyncHandlerAlt = (requestHandler: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch(error => next(error));
    };
};

/**
 * NestJS-compatible async handler wrapper
 * Use this for NestJS controllers and services
 * 
 * @example
 * async createUser(dto: CreateUserDto) {
 *   return AsyncHandlerNest(async () => {
 *     // Your logic here
 *     return await this.userService.create(dto);
 *   });
 * }
 */
const AsyncHandlerNest = async <T>(fn: () => Promise<T>): Promise<T> => {
    try {
        return await fn();
    } catch (error: any) {
        // In NestJS, throwing errors will be caught by exception filters
        throw error;
    }
};

export { AsyncHandler, AsyncHandlerAlt, AsyncHandlerNest };
import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (error: any) { 
        res.status(400).json({
          success: false,
          status: 400,
          message: error.message || "Someting Wrong!", 
        });
      }
    };
  };

  export default catchAsync;
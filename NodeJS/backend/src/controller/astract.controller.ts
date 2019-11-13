import { Request, Router , Response } from "express";

export abstract class AbstractController {
    protected router: Router;

    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    protected abstract setRoutes();
}
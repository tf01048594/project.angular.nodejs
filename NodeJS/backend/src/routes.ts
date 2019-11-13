import {CustomerController} from "./controller/customer.controller";


enum HttpMethod {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PATH = "path",
  UPDATE = "update"
}

export interface Route {
  path: string;
  method: HttpMethod;
  action: Function;
}

export class Routes {
  private customerController: CustomerController;
  constructor() {
    this.customerController = new CustomerController();
  }

  customerRoutes(): Route[] {
    return [
      {
        path: "/api/customer",
        method: HttpMethod.GET,
        action: (req, res) => this.customerController.findAll(req, res)
      }
    ];
  }

}

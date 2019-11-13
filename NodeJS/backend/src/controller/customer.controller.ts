import { CustomerService } from "../services/customer.service";
import { AbstractController } from './astract.controller';
import { Customer } from "../entity/customer";

export class CustomerController extends AbstractController{
    private customerService : CustomerService;
    constructor(){
        super();
        this.customerService = new CustomerService();
    }
    setRoutes() {
        this.router.route("/").get(this.findAll.bind(this));
    }

    async findAll(req, res) {
        // let body = req;
        let query = await this.customerService.findAll();
        console.log("Customer:",query)
        return res.json(query);
    }
}

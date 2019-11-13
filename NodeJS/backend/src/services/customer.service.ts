import { CustomerDao } from "../dao/customer.dao";
import { Customer } from "../entity/customer";
export class CustomerService {
    private customerDao : CustomerDao;
    constructor(){
        this.customerDao = new CustomerDao();
    }
    public async findAll(){
        return await this.customerDao.findAll();
    }
}
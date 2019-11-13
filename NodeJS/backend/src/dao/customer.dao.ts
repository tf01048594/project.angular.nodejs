import { Customer } from "../entity/customer";
import { AbstractDao } from "./asbtract.dao";
export class CustomerDao extends AbstractDao{
    constructor(){
        super();
    };
    public async findAll(){
        let customers = Array<Customer>();
        let sql = "SELECT * FROM customers";
        let customer =await this.connectionPool.query(sql);
        //console.log("CC", customer);
        for (let i in customer) {
            //console.log(customer[i]);
            let newCustomer = new Customer();
            newCustomer.id = customer[i].id;
            newCustomer.name = customer[i].name;
            newCustomer.address = customer[i].address;
            customers.push(newCustomer);
        }
        return customers;
    }        
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService} from '../../services/test.service';
import { Customer } from "../../entity/customer";
export interface Cat {
  name : string
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(
    private router: Router,
    private testService : TestService
  ) {}
   cat : Cat[];
   customers : Customer[];

  ngOnInit() {
    
  }
  btnClick(){
    //this.router.navigateByUrl('/introduce');
    let a = this.testService.getAllCustomer();
    console.log(a);
    a.subscribe(res => {
      console.log("RES",res);
      this.customers = res;
      console.log(this.customers);
    });
    
  }
}

import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map ,tap } from 'rxjs/operators';
import { Customer } from "../entity/customer";
export interface Cat {
  name : string
}
const API = '/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<any>{
    return this.http.get<Customer[]>(`${API}/customers`,httpOptions).pipe(
      map(res => {
        
        if(!res) console.log("Not found");
        else return res;
      })  
    )
  }
}

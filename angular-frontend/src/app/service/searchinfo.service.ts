// import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Info } from '../domain/info.model';

const httpOptions = {
  headers: new HttpHeaders({ "Access-Control-Allow-Origin" : "*", 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
 })
 };

@Injectable({
  providedIn: 'root'
})
export class SearchinfoService {

  // url = http://localhost:3000/result;

 constructor(private http: HttpClient) { }


    
    postResults(search:any){
      return this.http.post("https://13.234.94.132:8092/upstream-service/vsearch/",search,httpOptions);
    }
  
}

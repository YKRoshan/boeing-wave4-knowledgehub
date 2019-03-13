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

 getAll(){
    console.log("In get all");
    return this.http.get("http://localhost:3000/result");
  //  return this.http.get<Info[]>(this.url + '?_sort=ConfidenceScore&_order=desc');
    }
    
    postResults(search:any){
      return this.http.post("https://localhost:8092/upstream-service/vsearch/",search,httpOptions);
    }
  
}

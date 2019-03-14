import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class DomainConceptService{
    private conceptsArray :string[];
    private url :string = "http://localhost:8080/domain";
    constructor(private http:HttpClient){

    } 
    postDomainConceptName(domain:string,concepts:string){
        this.conceptsArray=concepts.split(",");
        console.log("before posting ")
        console.log(domain);
        console.log(concepts)
        this.http.post(this.url,{
          "domain":domain,
          "conceptName":this.conceptsArray
        }).subscribe((data)=>{
          console.log(data);
        })
        console.log("after posting ")
    }
}
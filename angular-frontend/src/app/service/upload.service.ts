import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  
  _url;
  allowedMimeType;

  constructor(private http: HttpClient) { }
 
  pushFileToStorage(file: File) {
    const formdata: FormData = new FormData();
 
    formdata.append('file', file);

    this._url="http://localhost:8080/files/"
    
    console.log("inside ")
 
    return this.http.post(this._url,formdata,{responseType: 'blob' as 'json' })
  
    //   reportProgress: true,
    //   responseType: 'text'
    // });
    // return this.http.request(req);
  }
 
  getFiles():Observable<any> {
    console.log("In service")
    this._url="http://localhost:8080/getallfiles/"
    return this.http.get(this._url);
  }
}

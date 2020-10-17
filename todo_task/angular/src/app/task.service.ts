import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseurl = 'http://127.0.0.1:8000/'
  httpHeaders = new HttpHeaders({'Content-Type': "application/json"});

  constructor(private _http:HttpClient) { }

  createtask(task){
    return this._http.post(this.baseurl,task);
  }
  getAlltask(){
    return this._http.get(this.baseurl);
  }
  Updatetask(task){
    return this._http.put(this.baseurl+task.id+'/',task);
  }
  
  Deletetask(task){
    return this._http.delete(this.baseurl+task.id+'/');
  }

}

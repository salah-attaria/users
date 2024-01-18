import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url="https://dummyjson.com/users/"
  constructor(private http:HttpClient) { }
  users() {
    return this.http.get(this.url);
  }
  userById(id:number){
    return this.http.get(this.url+id)
  }
  
  saveUser(data:any){
    return this.http.post(this.url,data)
  }
  updateUser(id:number,body:any){
    return this.http.put('http://localhost:5000/user/2',id,body);
  }
  deleteUser(id:number){
    return this.http.delete(this.url+id)
  }

  }
  

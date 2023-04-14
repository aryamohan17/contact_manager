import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  viewAllData(){
    return this.http.get('http://localhost:3000/contactDatas')
  }

  viewData(dataId:any){
    return this.http.get(`http://localhost:3000/contactDatas/${dataId}`)
  }

  deleteData(dataId:any){
    return this.http.delete(`http://localhost:3000/contactDatas/${dataId}`)
  }
  addNewData(addNewData:any){
    return this.http.post('http://localhost:3000/contactDatas',addNewData)
  }

  updateData(dataId:any,addNewData:any){
    return  this.http.put('http://localhost:3000/contactDatas/'+dataId,addNewData)
  }

}

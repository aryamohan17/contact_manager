import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-all-data',
  templateUrl: './view-all-data.component.html',
  styleUrls: ['./view-all-data.component.css']
})
export class ViewAllDataComponent implements OnInit {
  dataList:any
  filterProducts:any
  searchKey:any=""

  constructor(private ds:DataService){}

  ngOnInit():void{
    this.ds.viewAllData().subscribe(data=>{
      this.dataList=data
      // console.log(data);
      
    })

    this.ds.search.subscribe((value:any)=>{
      this.searchKey=value
    })
  }

  // filter(catagory:any){
  //   this.filterProducts=this.dataList.filter((item:any)=>{item.catagory==""})
  // }

}

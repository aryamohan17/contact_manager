import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit{
  dataId:any
  allData:any
  constructor(private ds :DataService , private ar:ActivatedRoute){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.dataId=data["id"]
      this.ds.viewData(this.dataId).subscribe((data:any)=>{
        this.allData=data
        // console.log(data);
        
      })
      // console.log(this.dataId);
      
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
  dataId:any
  constructor( private ar:ActivatedRoute,private ds:DataService,private route:Router){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.dataId=data["id"]
    })
    this.ds.deleteData(this.dataId).subscribe((item:any)=>{
      alert("Data deleted")
      this.route.navigateByUrl("")
    })
  }
}

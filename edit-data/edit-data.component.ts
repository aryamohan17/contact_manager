import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  data_id:any
  datas:any
  constructor(private ar:ActivatedRoute,private ds :DataService,private route:Router){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.data_id=data["id"]
    })
    this.ds.viewData(this.data_id).subscribe((data:any)=>{
      this.datas=data
      // console.log(this.datas);
      
    })
  }
  updateData(form:any){
    this.ds.updateData(this.data_id,this.datas).subscribe((result:any)=>{
      alert("updated")
      this.route.navigateByUrl("")
    })
  }
}

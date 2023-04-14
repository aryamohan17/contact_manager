import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  constructor(private fb:FormBuilder , private ds:DataService , private route:Router){}
  addForm=this.fb.group({
    id:[""],
    contactName:[""],
    contactPhn:[""],
    contactEmail:[""],
    image:[""]
  })
  add(){
    let newData={
      id:this.addForm.value.id,
      contactName:this.addForm.value.contactName,
      contactPhn:this.addForm.value.contactPhn,
      contactEmail:this.addForm.value.contactEmail,
      image:this.addForm.value.image

    }
    this.ds.addNewData(newData).subscribe((item:any)=>{
      alert("Add new product")
      this.route.navigateByUrl("")
    })
  }
}

import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private ds:DataService){}
searchTerm:any
search(event:any){
  this.searchTerm = event.target.value
  this.ds.search.next(this.searchTerm)
}
}

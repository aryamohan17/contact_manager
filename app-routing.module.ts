import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllDataComponent } from './view-all-data/view-all-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { HeaderComponent } from './header/header.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';

const routes: Routes = [
  {path:"",component:ViewAllDataComponent},
  {path:"header",component:HeaderComponent},
  {path:"deleteData/:id",component:DeleteDataComponent},

  
  {path:"addData",component:AddDataComponent},
  {path:"editData/:id",component:EditDataComponent},
  {path:"viewData/:id",component:ViewDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

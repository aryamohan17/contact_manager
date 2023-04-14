import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { ViewAllDataComponent } from './view-all-data/view-all-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

import {HttpClientModule} from '@angular/common/http';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HeaderComponent } from './header/header.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDataComponent,
    ViewDataComponent,
    ViewAllDataComponent,
    EditDataComponent,
    DeleteDataComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

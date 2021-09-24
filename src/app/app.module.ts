import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Apollo } from "apollo-angular";

import { HttpLink } from 'apollo-angular/http';
import { ListComponent } from './list/list.component';
import { InMemoryCache } from "@apollo/client/core";
import { UpvoterComponent } from './upvoter/upvoter.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpvoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(apollo:Apollo,httpLink:HttpLink){
    apollo.create({
      link: httpLink.create({uri:'https://graphql-voter-app.herokuapp.com/'}),
      cache: new InMemoryCache()

    })
  }
}

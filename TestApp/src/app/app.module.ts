import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/pageNotFound.component';
import { UserListComponent } from './components/user-list/userList.component';
import { UserDetailComponent } from './components/user-detail/userDetail.component';
import { AppComponent } from './app.component';
import { AclService } from 'ng2-acl';
import { AclDemoResolver } from './demo.resolve';
import { AclRedirection } from './app.redirection';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AclService,
    AclRedirection,
    AclDemoResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

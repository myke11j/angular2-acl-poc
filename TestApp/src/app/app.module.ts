import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AclService } from 'ng2-acl';

// Componets
import { PageNotFoundComponent } from './components/page-not-found/pageNotFound.component';
import { UserProfileComponent } from './components/user-profile/userProfile.component';
import { AdvanceUserProfileComponent } from './components/advance-user-profile/advanceUserProfile.component';
import { ContactUserComponent } from './components/contact-user/contactUser.component';
import { AppComponent } from './app.component';

// Services or factories
import { AclDemoResolver } from './demo.resolve';
import { AclRedirection } from './services/acl.redirection';
import { ACLService } from './services/acl.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    AdvanceUserProfileComponent,
    ContactUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AclService,
    AclRedirection,
    AclDemoResolver,
    ACLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

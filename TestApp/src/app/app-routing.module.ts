import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/pageNotFound.component';
import { UserProfileComponent } from './components/user-profile/userProfile.component';
import { AdvanceUserProfileComponent } from './components/advance-user-profile/advanceUserProfile.component';
import { ContactUserComponent } from './components/contact-user/contactUser.component';
import { AclDemoResolver } from './demo.resolve';

const appRoutes: Routes = [
    { 
      path: 'user-profile',
      component: UserProfileComponent,
      resolve: { route: AclDemoResolver, state: AclDemoResolver },
      data: { permission: 'view_user_profile' }
    },
    { 
      path: 'advance-user-profile',
      component: AdvanceUserProfileComponent,
      resolve: { route: AclDemoResolver, state: AclDemoResolver },
      data: { permission: 'view_advance_user_profile' }
    },
    { 
      path: 'contact-user',
      component: ContactUserComponent,
      resolve: { route: AclDemoResolver, state: AclDemoResolver },
      data: { permission: 'contact_user' }
    },
    { 
      path: '',
      redirectTo: '/user-profile',
      pathMatch: 'full'
    },
    { 
      path: '**',
      component: PageNotFoundComponent
    },
    { 
      path: 'not-authorized',
      component: PageNotFoundComponent
    }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
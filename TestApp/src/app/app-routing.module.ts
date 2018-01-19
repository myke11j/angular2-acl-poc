import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/pageNotFound.component';
import { UserListComponent } from './components/user-list/userList.component';
import { UserDetailComponent } from './components/user-detail/userDetail.component';
import { AclDemoResolver } from './demo.resolve';

const appRoutes: Routes = [
    { 
      path: 'user',
      component: UserDetailComponent,
      resolve: { route: AclDemoResolver, state: AclDemoResolver },
    },
    { 
      path: 'users',
      component: UserListComponent,
      resolve: { route: AclDemoResolver, state: AclDemoResolver },
    },
    { 
      path: '',
      redirectTo: '/users',
      pathMatch: 'full'
      // resolve: { route: AclDemoResolver, state: AclDemoResolver },
    },
    { 
      path: '**',
      component: PageNotFoundComponent,
      // resolve: { route: AclDemoResolver, state: AclDemoResolver },
    },
    { 
      path: 'not-authorized',
      component: PageNotFoundComponent,
      // resolve: { route: AclDemoResolver, state: AclDemoResolver },
    }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
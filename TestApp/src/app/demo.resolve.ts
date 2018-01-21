import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AclService } from 'ng2-acl';

import { AclRedirection } from './services/acl.redirection';
 
@Injectable()
export class AclDemoResolver implements Resolve<any> {
  constructor(
    private aclService: AclService, private router: Router, private aclRedirection: AclRedirection,
  ) { }
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.aclService.can(route.data['permission'])) {
      // Has proper permissions
      return Observable.of(true);
    } else {
      // Does not have permission
      this.aclRedirection.redirectTo('not-authorized');
    }
  }
}
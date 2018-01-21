import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AclService } from 'ng2-acl';

import 'rxjs/add/operator/toPromise';

// import { Acl } from '../dummy-data/acl';

const ACL = {
  'admin': [
    { name: 'view_user_profile' },
    { name: 'view_advance_user_profile' },
    { name: 'contact_user' }
  ],
  'sales': [
      { name: 'view_user_profile' },
      { name: 'view_advance_user_profile' }
  ],
  'support': [
      { name: 'view_user_profile' }
  ]
};

@Injectable()
export class ACLService {
  constructor(private aclService: AclService) { }

  setUpPermissions(): void {
    this.aclService.flushRoles();
    if (this.aclService.resume()) {
      for (const key in ACL) {
        if (ACL.hasOwnProperty(key)) {
          const element = ACL[key];
          element.forEach(permission => {
            this.aclService.addAbility(key, permission.name);
          });
        }
      }
      this.aclService.attachRole('support')
      console.log(this.aclService.getRoles());
    }
  }
}
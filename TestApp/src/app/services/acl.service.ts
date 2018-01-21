import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AclService } from 'ng2-acl';

import 'rxjs/add/operator/toPromise';

const aclData = {
  support: ['view_user_profile'],
  sales: ['view_user_profile', 'view_advance_user_profile'],
  admin: ['view_user_profile', 'view_advance_user_profile', 'contact_user']
};

@Injectable()
export class ACLService {
  constructor(private aclService: AclService) { }

  setUpPermissions(): void {
    this.aclService.flushRoles();
    if (this.aclService.resume()) {
      this.aclService.setAbilities(aclData);
      this.aclService.attachRole('admin')
      console.log(this.aclService.getRoles());
    }
  }
}
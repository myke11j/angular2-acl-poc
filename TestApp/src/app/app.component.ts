import { Component } from '@angular/core';
import { AclService } from 'ng2-acl/dist';

import { ACLService } from './services/acl.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // can;
  // ready;
  constructor (private aclService: ACLService, private acl: AclService) {
    aclService.setUpPermissions();
  }
  ngOnInit() {
    // this.can = this.acl.can;
    // this.ready = this.acl.resume();
  }
}

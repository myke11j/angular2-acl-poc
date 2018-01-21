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
  can;
  constructor (private aclService1: ACLService, private aclService: AclService) {
    aclService1.setUpPermissions();
  }
  ngOnInit() {
    this.can = this.aclService.can.bind(this.aclService);
  }
}

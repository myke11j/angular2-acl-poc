import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable()
export class AclRedirection {
  constructor(
       private router: Router,
  ) {}
 
  redirectTo(type: string) {
    if (type === 'Unauthorized') {
      this.router.navigate(['/']);
    }
  }
  
}
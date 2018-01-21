import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable()
export class AclRedirection {
  constructor(
       private router: Router,
  ) {}
 
  redirectTo(type: string) {
    if (type === 'not-authorized') {
      console.log('Not authorized to check this route');
      this.router.navigate(['/not-authorized']);
    }
  }
  
}
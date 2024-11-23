import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  userRole : string | null = ''
  isSuperAdmin : boolean = false;

  constructor(){
    this.userRole = sessionStorage.getItem('roles')
    this.isSuperAdmin = this.userRole === 'superadmin'
  }


  
}

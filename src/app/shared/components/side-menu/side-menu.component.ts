import { MenuItem } from './../../interface/sideMenu.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = [
    {title: 'Básicos', route: './reactive/basic'},
    {title: 'Dinámicos', route: './reactive/dynamic'},
    {title: 'Swithces', route: './reactive/switches'},
  ]

  authMenu: MenuItem[] =[
    {title: 'Registro', route: './auth'}
  ]
}

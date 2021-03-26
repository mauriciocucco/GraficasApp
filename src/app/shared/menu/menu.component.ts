import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menu: MenuItem[] = [
    { ruta: '/graficas/barra', nombre: 'Barras' },
    { ruta: '/graficas/barra-doble', nombre: 'Barras Dobles' },
    { ruta: '/graficas/dona', nombre: 'Dona' },
    { ruta: '/graficas/dona-http', nombre: 'Dona http' },
  ];
}

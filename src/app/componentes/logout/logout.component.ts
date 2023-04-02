import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercadeServiceService } from 'src/app/servicios/acercade.service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  modoEdit: any;
  persona: any;
  constructor(private ruta: Router, private personaService: AcercadeServiceService) {}

  ngOnInit(): void {
    this.personaService.listarPersonas().subscribe((data) => {
      this.persona = data;
    });
    if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == 'null') {
      this.modoEdit = false;
    }
  }

  cerrarSesion() {
    sessionStorage.setItem('currentUser', 'null');
    this.modoEdit = false;
    alert('LA FUE SESIÓN CERRADA');

    window.sessionStorage.removeItem;

    this.ruta.navigate(['/']);
    window.location.reload();
  }
}

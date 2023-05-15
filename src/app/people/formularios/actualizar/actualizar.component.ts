import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/model/user-data';
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  actualizarForm!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioSercivio: ServiceUserService) { }

  ngOnInit(): void {
    this.actualizarForm = this.fb.group({
      idUsuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  actualizarUsuario() {
    const data = this.actualizarForm.value;
    this.usuarioSercivio.actualizarUsuario(data).subscribe(res => {
      if (res.status === 'CREATED') {
        console.log(res)
        alert("Actualizacion Exitosa");
      }else {
        alert('Hubo un error');
      }
    });
  }





}

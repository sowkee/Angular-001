import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConcesionarioService } from 'src/app/service/concesionario.service';

@Component({
  selector: 'app-actualizar-concesionario',
  templateUrl: './actualizar-concesionario.component.html',
  styleUrls: ['./actualizar-concesionario.component.css']
})
export class ActualizarConcesionarioComponent implements OnInit {



  actualizarForm!: FormGroup;

  constructor(private fb: FormBuilder, private concesionarioSercivio: ConcesionarioService) { }

  ngOnInit(): void {
    this.actualizarForm = this.fb.group({
      idConcesionario: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  actualizarConcesionario() {
    const data = this.actualizarForm.value;
    this.concesionarioSercivio.actualizarConcesionario(data).subscribe(res => {
      if (res.status === 'ACCEPTED') {
        console.log(res)
        alert("Actualizacion Exitosa");
        alert("Recargar la pagina.");
      }else {
        alert('Hubo un error');
      }
    });
  }


}

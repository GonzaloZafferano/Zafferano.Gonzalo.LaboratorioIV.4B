import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Repartidor } from 'src/app/models/Repartidor';
import { AltasService } from 'src/app/services/altas/altas.service';
import { validarCampoCadena, validarCampoFecha, validarCampoNumero, validarCapacidadDeTransporte, validarDNI, validarEdad } from 'src/app/validaciones/validacionesGenerales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent {
  guardando: boolean = false;
  @Input() pais: any;
  form!: FormGroup;

  constructor(private altasService: AltasService) {
    this.validar();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pais']) {
      let pais = changes['pais'] as any;
      if (pais && pais.currentValue)
        this.nacionalidad = pais.currentValue.translations.es;
    }
  }

  public get nombre() {
    return this.form?.get('nombre');
  }
  public set nombre(value: any) {
    this.form?.get('nombre')?.patchValue(value);
  }

  get nacionalidad() {
    return this.form?.get('nacionalidad');
  }
  set nacionalidad(value: any) {
    this.form?.get('nacionalidad')?.patchValue(value);
  }

  get edad() {
    return this.form?.get('edad');
  }
  set edad(value: any) {
    this.form?.get('edad')?.patchValue(value);;
  }

  get dni() {
    return this.form?.get('dni');
  }
  set dni(value: any) {
    this.form?.get('dni')?.patchValue(value);;
  }

  get capacidadTransporte() {
    return this.form?.get('capacidadTransporte');
  }
  set capacidadTransporte(value: any) {
    this.form?.get('capacidadTransporte')?.patchValue(value);;
  }
  set unidadPropia(value: any) {
    this.form?.get('unidadPropia')?.patchValue(value);;
  }

  get unidadPropia() {
    return this.form?.get('unidadPropia');
  }

  guardar() {
    debugger;
    if (!this.form.invalid) {
      this.guardando = true;
      let unidadPropia = (this.unidadPropia?.value != null && this.unidadPropia.value != "" ? this.unidadPropia.value : false) as boolean;

      let repartidor = new Repartidor();
      repartidor.nombre = this.nombre.value;
      repartidor.edad = Number(this.edad.value);
      repartidor.capacidadTransporte = Number(this.capacidadTransporte.value);
      repartidor.dni = Number(this.dni.value);
      repartidor.unidadPropia = unidadPropia;
      repartidor.pais = this.pais;

      this.altasService.cargarItemDB(repartidor)
        .then(x => {
          Swal.fire({
            title: 'Alta exitosa!',
            text: `Se ha guardado el actor '${repartidor.nombre}'`,
            icon: 'success',
            timer: 0,
            confirmButtonText: 'Aceptar'
          });
          this.limpiarFormulario();
          this.guardando = false;
        })
        .catch(err => {
          console.log(err);
          Swal.fire({
            title: 'Ha ocurrido un error!',
            text: `Ha ocurrido un error al intentar guardar: '${err}'`,
            icon: 'error',
            timer: 0,
            confirmButtonText: 'Aceptar'
          });
          this.guardando = false;
        })
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.pais = null;
    this.nacionalidad = '';
    this.edad = 0;
    this.capacidadTransporte = 0;
    this.dni = 0;

  }

  validar(): void {
    this.form = new FormGroup
      (
        {
          nombre: new FormControl('', { validators: [validarCampoCadena()] }),
          nacionalidad: new FormControl('', { validators: [validarCampoCadena()] }),
          edad: new FormControl('',),
          capacidadTransporte: new FormControl('', {}),
          dni: new FormControl('', {}),
          unidadPropia: new FormControl('', {}),
        },
        [
          validarEdad('edad'),
          validarDNI('dni'),
          validarCapacidadDeTransporte('capacidadTransporte')
        ]
      );
  }
}

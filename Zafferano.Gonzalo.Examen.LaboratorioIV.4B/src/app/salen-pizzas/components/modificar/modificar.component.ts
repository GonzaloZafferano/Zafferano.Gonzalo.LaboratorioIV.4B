import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Pizza } from 'src/app/models/Pizza';
import { Repartidor } from 'src/app/models/Repartidor';
import { AltasService } from 'src/app/services/altas/altas.service';
import { PizzasServiceService } from 'src/app/services/pizzas-service.service';
import { validarCampoCadena, validarCampoFecha, validarCampoNumero, validarCapacidadDeTransporte, validarDNI, validarEdad, validarPesoPizza, validarPrecio } from 'src/app/validaciones/validacionesGenerales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  guardando: boolean = false;
  @Input() pizzaCargada: any;
  form!: FormGroup;

  constructor(private pizzas: PizzasServiceService) {
    this.validar();
  }

  ngOnChanges(changes: SimpleChanges) {  
    if (changes['pizzaCargada']) {
      let pizza = changes['pizzaCargada'].currentValue;

      if(pizza){
        this.nombre = pizza.nombre;
        this.peso = pizza.peso;
        this.precio = pizza.precio;
        this.texto = pizza.texto;

      }else{
        this.limpiarFormulario();
      }
    }
  }

  public get nombre() {
    return this.form?.get('nombre');
  }
  public set nombre(value: any) {
    this.form?.get('nombre')?.patchValue(value);
  }

  get texto() {
    return this.form?.get('texto');
  }
  set texto(value: any) {
    this.form?.get('texto')?.patchValue(value);
  }

  get precio() {
    return this.form?.get('precio');
  }
  set precio(value: any) {
    this.form?.get('precio')?.patchValue(value);;
  }

  get peso() {
    return this.form?.get('peso');
  }
  set peso(value: any) {
    this.form?.get('peso')?.patchValue(value);;
  }


  guardar() {
  
    if (this.pizzaCargada && !this.form.invalid) {
      this.guardando = true;

      let pizza = new Pizza();
      pizza.nombre = this.nombre.value;
      pizza.texto = this.texto.value;
      pizza.peso = Number(this.peso.value);
      pizza.precio = Number(this.precio.value);
      pizza.id = this.pizzaCargada.id;
    
      this.pizzas.modificarItemDB(pizza)
        .then(x => {
          Swal.fire({
            title: 'Alta exitosa!',
            text: `Se ha modificado la pizza '${pizza.nombre}'`,
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
    this.texto = '';
    this.peso = 0;
    this.precio = 0;


  }

  validar(): void {
    this.form = new FormGroup
      (
        {
          nombre: new FormControl('', { validators: [validarCampoCadena()] }),
          texto: new FormControl('', { validators: [validarCampoCadena()] }),
          precio: new FormControl('',),
          peso: new FormControl('', {}),
        },
        [
          validarPesoPizza('peso'),
          validarPrecio('precio')
        ]
      );
  }
}

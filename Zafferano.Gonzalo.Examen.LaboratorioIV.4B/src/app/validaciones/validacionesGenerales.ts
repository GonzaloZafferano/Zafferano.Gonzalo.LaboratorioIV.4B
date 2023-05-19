import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";

//METODOS DECLARADOS DE ESTA FORMA SIRVEN PARA APLICARSE SOBRE EL FORMULARIO EN GENERAL, NO INDIVIDUALMENTE.
//ES POR ESO QUE RECIBEN AL 'formGroup' Y NO AL 'control'
export function validarCampoNumero(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        // const campoAValidar = formGroup.get(nombreCampo);
        // const errors: any = [];
        // //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        // if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
        //     errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        // else if (isNaN(campoAValidar?.value))
        //     errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        // else if (campoAValidar?.value <= 0)
        //     errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor mayor a 0.' };

        // //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        // if (Object.keys(errors).length) {
        //     campoAValidar?.setErrors(errors);
        //     return errors;
        // }
        // campoAValidar?.setErrors(null);
        return null;
    }
}

//METODOS DECLARADOS DE ESTA FORMA SIRVEN PARA APLICARSE SOBRE EL CONTROL EN PARTICULAR, 
//NO DE FORMA GENERAL SOBRE EL FORMULARIO.
//ES POR ESO QUE RECIBEN AL 'control' Y NO AL 'formGroup'
export function validarCampoCadena(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];
      
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

export function validarEdad(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const campoAValidar = formGroup.get(nombreCampo);
        const errors: any = [];
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else if (isNaN(campoAValidar?.value))
            errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        else if (campoAValidar?.value < 18 || campoAValidar?.value > 65)
            errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor entre 18 a 65 años.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}


export function validarDNI(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const campoAValidar = formGroup.get(nombreCampo);
        const errors: any = [];
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else if (isNaN(campoAValidar?.value))
            errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        else if (campoAValidar?.value < 10000000 || campoAValidar?.value > 99999999)
            errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor entre 10000000 y 99999999.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

export function validarCapacidadDeTransporte(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const campoAValidar = formGroup.get(nombreCampo);
        const errors: any = [];
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else if (isNaN(campoAValidar?.value))
            errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        else if (campoAValidar?.value < 1 || campoAValidar?.value > 10)
            errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor entre 1 y 10.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}
export function validarCampoFecha(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];

        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido / fecha invalida.' };
        else {
            let fecha = new Date(campoAValidar.value).getTime();
            let fechaMaxima = new Date('2100-12-31').getTime();
            let fechaMinima = new Date('1900-01-01').getTime();
            if (fecha > fechaMaxima || fecha < fechaMinima) {
                errors.fechaInvalida = { hayError: true, mensaje: 'Fecha invalida. Solo se aceptan fechas entre 1900-01-01 y 2100-12-31' };
            }
        }
        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}

export function validarCampoSelect(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];

        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null ||
            campoAValidar?.value == undefined || campoAValidar?.value == -1)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}


export function validarPesoPizza(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const campoAValidar = formGroup.get(nombreCampo);
        const errors: any = [];
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else if (isNaN(campoAValidar?.value))
            errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        else if (campoAValidar?.value < 500 || campoAValidar?.value > 1000)
            errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor entre 500gramos y 1000gramos.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}



export function validarPrecio(nombreCampo: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const campoAValidar = formGroup.get(nombreCampo);
        const errors: any = [];
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        
        if (campoAValidar?.value === '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else if (isNaN(campoAValidar?.value))
            errors.textoInvalido = { hayError: true, mensaje: 'Solo se pueden ingresar caracteres numericos.' };
        else if (campoAValidar?.value < 1000 || campoAValidar?.value > 3000)
            errors.valorInvalido = { hayError: true, mensaje: 'Debe ingresar un valor entre $1000 y $3000.' };

        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}
export function validarCampoArchivo(): ValidatorFn {
    return (control: AbstractControl): [key: string, value: any] | null => {
        const campoAValidar = control;
        const errors: any = [];    
        
        //CARGO LOS DISTINTOS ERRORES QUE PUEDE TENER.
        if (campoAValidar?.value == '' || campoAValidar?.value == null || campoAValidar?.value == undefined)
            errors.campoVacio = { hayError: true, mensaje: 'Campo requerido.' };
        else {
            var nombreArchivo = campoAValidar?.value;
            var indicePunto = nombreArchivo.lastIndexOf(".") + 1;
            var extension = nombreArchivo.substr(indicePunto, nombreArchivo.length).toLowerCase();
            if (extension != "jpg" && extension != "jpeg" && extension != "png")
                errors.archivoInvalido = { hayError: true, mensaje: "Solo se admiten archivos de tipo jpg | jpeg | png." };
        }
        //SI TIENE ERRORES, LOS SETEO AL CONTROL:
        if (Object.keys(errors).length) {
            campoAValidar?.setErrors(errors);
            return errors;
        }
        campoAValidar?.setErrors(null);
        return null;
    }
}


export class Persona {
    id! : number;
    nombreCompleto : string;
    urlFoto : string;
    informacion : string;
    email : string;
    clave : string;

    constructor(nombreCompleto:string, apellido:string, urlFoto:string, informacion:string, email:string, clave:string  ){
        this.nombreCompleto = nombreCompleto;
        this.urlFoto = urlFoto;
        this.informacion = informacion;
        this.email = email;
        this.clave = clave;
    }
}

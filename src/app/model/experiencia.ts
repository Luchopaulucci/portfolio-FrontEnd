export class Experiencia {
    id! : number;
    titulo : string;
    urlCertificado : string;
    urlFotoCertificado : string;
    fecha:string;

    constructor(titulo:string, urlCertificado:string, urlFotoCertificado:string, fecha:string ){
        this.titulo = titulo;
        this.urlCertificado = urlCertificado;
        this.urlFotoCertificado = urlFotoCertificado;
        this.fecha = fecha;
    }
}

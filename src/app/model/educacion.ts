export class Educacion {
    id! : number;
    titulo : string;
    institucion : string;
    desde : string;
    hasta : string;

    constructor(titulo:string, institucion:string, desde:string, hasta:string ){
        this.titulo = titulo;
        this.institucion = institucion;
        this.desde = desde;
        this.hasta = hasta;
    }
}

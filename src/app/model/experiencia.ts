export class Experiencia {
    id! : number;
    titulo : string;
    area : string;
    desde : string;
    hasta : string;

    constructor(titulo:string, area:string, desde:string, hasta:string ){
        this.titulo = titulo;
        this.area = area;
        this.desde = desde;
        this.hasta = hasta;
    }
}

export class Proyectos {
    id?: number;
    titulo : string;
    informacion : string;
    desde : string;
    hasta : string;
    urlProyecto : string;

    constructor(titulo:string, informacion:string, desde:string, hasta:string, urlProyecto:string ){
        this.titulo = titulo;
        this.informacion = informacion;
        this.desde = desde;
        this.hasta = hasta;
        this.urlProyecto = urlProyecto;
    }
}

export class Proyectos {
    id! : number;
    titulo : string;
    informacion : string;
    urlFotoProyecto: string;
    urlProyecto : string;

    constructor(titulo:string, informacion:string, urlFotoProyecto:string, urlProyecto:string ){
        this.titulo = titulo;
        this.informacion = informacion;
        this.urlFotoProyecto = urlFotoProyecto;
        this.urlProyecto = urlProyecto;
    }
}

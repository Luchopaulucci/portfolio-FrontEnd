export class Habilidad {
    id!: number;
    titulo : string;
    urlFotoHabilidad : string;

    constructor(titulo:string, urlFotoHabilidad:string){
        this.titulo = titulo;
        this.urlFotoHabilidad = urlFotoHabilidad;
    }
}

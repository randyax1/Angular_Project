export class Persona{

    constructor(public nombre:string, public prioridad:string, public status:string){}

    toString(): string {
        return this.nombre + " " + this.prioridad + " "+ this.status; 
    }
}
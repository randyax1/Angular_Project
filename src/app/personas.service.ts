import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService{
    
    personas: Persona[] = [];

    constructor(private loggingService: LoggingService,
                private dataService: DataService
        ){}

    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("Agregamos el paquete:" + persona.toString());
        if(this.personas == null){
            this.personas = [];            
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
        

    }

    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        this.loggingService.enviaMensajeAConsola("Paquete encontrado:" + persona.toString());
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        this.loggingService.enviaMensajeAConsola("Paquete a modificar:" + persona.toString() + " con indice:" + index);
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.prioridad = persona.prioridad;
        persona1.status = persona.status;
        this.dataService.modificarPersona(index, persona);

    }

    modificarPersonas(){
        this.loggingService.enviaMensajeAConsola("Modificar todos los paquetes:");
        if(this.personas != null)
            
            this.dataService.guardarPersonas(this.personas);
      
    }

    eliminarPersona(index:number){
        this.loggingService.enviaMensajeAConsola("Eliminar paquete con indice: " + index); 
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index);
        
        this.modificarPersonas();
    }
}
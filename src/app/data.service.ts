import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient,
                private loginService: LoginService        
        ) { }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-28de0-default-rtdb.firebaseio.com/PackageBD.json?auth=' + token);
    }
 
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-28de0-default-rtdb.firebaseio.com/PackageBD.json?auth=' + token, personas)
            .subscribe(
                (response) => {
                    console.log("Resultado de Paquetes: " + response);
                },
                (error) => console.log("Error en guardar Paquetes: " + error)
            );
    }


    modificarPersona(index:number, persona: Persona){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://listado-personas-28de0-default-rtdb.firebaseio.com' + '/PackageBD/' + index + '.json?auth=' + token;
        console.log("url de modificarPersona:" + url);
        this.httpClient.put( url, persona)
            .subscribe(
                (response) => {
                    console.log("Resultado de modificar Paquete: " + response);
                },
                (error) => console.log("Error en modificar Paquete: " + error)
            );
    }

    eliminarPersona(index:number){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://listado-personas-28de0-default-rtdb.firebaseio.com' + '/PackageBD/' + (index) + '.json?auth=' + token;
        console.log("url de eliminarPaquete:" + url);
        this.httpClient.delete( url)
            .subscribe(
                (response) => {
                    console.log("resultado de eliminar Paquete: " + response);
                },
                (error) => console.log("Error en eliminar Paquete: " + error)
            );
    }

}
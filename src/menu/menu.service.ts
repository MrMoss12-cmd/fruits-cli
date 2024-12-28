import { Injectable } from "@nestjs/common";

@Injectable()
export class MenuService {
    private services: string[] = [];

    //agrega un nuevo servicio al menu
    addService(serviceName: string): void {
        this.services.push(serviceName);
    }

    //Lista los servicios disponibles
    getServices(): string[] {
        return this.services;
    }

}

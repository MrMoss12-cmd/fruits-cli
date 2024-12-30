import { Injectable } from "@nestjs/common";

@Injectable()
export class MenuService {
    private services: string[] = [];

    //agrega un servicio al menu 
    addService(serviceName: string): void {
        this.services.push(serviceName);
    }

    //lista los servicios disponibles
    getServices(): string[] {
        return this.services;
    }
}
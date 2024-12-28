import { Injectable, OnModuleInit } from "@nestjs/common";
import { MenuService } from "src/menu/menu.service";

@Injectable()
export class HelloService implements OnModuleInit {
    constructor(private readonly menuService: MenuService) {}

    onModuleInit(): void {
        this.menuService.addService('Saludame'); //Registramos el servicio en el menu
    }

    sayHello(name: string): string {
        return `Hola, ${name}!`;
    }

}
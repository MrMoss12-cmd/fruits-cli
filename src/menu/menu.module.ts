import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';

@Module({
    providers: [MenuService, MenuResolver],
    exports: [MenuService], //Exportamos el servicio para que otros modulos lo puedan usar
})

export class MenuModule {}

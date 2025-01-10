import { Module } from '@nestjs/common';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';

@Module({
    providers: [MenuService, MenuResolver],
    exports: [MenuService], //exportamos el servicio para que otros modulos lo puedan usar
})

export class MenuModule {}


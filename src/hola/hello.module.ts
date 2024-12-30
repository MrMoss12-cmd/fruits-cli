import { Module } from "@nestjs/common";
import { HelloService } from "./hello.service";
import { HelloResolver } from "./hello.resolver";
import { MenuModule } from 'src/menu/menu.module';

@Module({
    imports: [MenuModule],
    providers: [HelloService, HelloResolver],
})
export class HelloModule {}
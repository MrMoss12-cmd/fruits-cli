import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class FruitsResolver {
    private servicios = ['Saludame'];

    @Query(() => [String])
    menu(): string[] {
        return this.servicios;
    }

    agregarServicio(servicio: string) {
        this.servicios.push(servicio);
    }
}

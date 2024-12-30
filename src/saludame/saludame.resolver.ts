import { Args, Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class SaludameResolver {
    @Query(() => String)
    saludame(@Args('nombre') nombre: string): string {
        return `Hola ${nombre}`;
    }
}

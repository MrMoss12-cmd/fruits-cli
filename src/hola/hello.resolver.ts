import { Query, Resolver, Args } from "@nestjs/graphql";
import { HelloService } from "./hello.service";

@Resolver()
export class HelloResolver {
    constructor(private readonly helloService: HelloService) {}

    @Query(() => String)
    sayHello(@Args('name') name: string): string {
        return this.helloService.sayHello(name);
    }
}

import { Query, Resolver } from "@nestjs/graphql";
import { MenuService } from "./menu.service";


@Resolver()
export class MenuResolver {
    constructor(private readonly menuService: MenuService) {}

    @Query(() => [String], {description: 'List all available services in the menu'})
    getMenu(): string[] {
        return this.menuService.getServices();
    }
}
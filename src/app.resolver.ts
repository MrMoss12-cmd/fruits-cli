import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String, { description: 'Base query to check server status'})
  getStatus(): string {
    return 'GraphQL server is running!';
  }
}

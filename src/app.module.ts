import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { SaludameModule } from './saludame/saludame.module';
import { ResolverModule } from './fruits/resolver/resolver.module';
import { FruitsResolver } from './fruits/fruits.resolver';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    SaludameModule,
    ResolverModule,
  ],
  providers: [AppResolver, FruitsResolver],
})
export class AppModule {}

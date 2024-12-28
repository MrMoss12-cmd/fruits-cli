import { Module } from '@nestjs/common';
import { SaludameResolver } from './saludame.resolver';

@Module({
  providers: [SaludameResolver]
})
export class SaludameModule {}

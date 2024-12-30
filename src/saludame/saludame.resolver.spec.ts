import { Test, TestingModule } from '@nestjs/testing';
import { SaludameResolver } from './saludame.resolver';

describe('SaludameResolver', () => {
  let resolver: SaludameResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaludameResolver],
    }).compile();

    resolver = module.get<SaludameResolver>(SaludameResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

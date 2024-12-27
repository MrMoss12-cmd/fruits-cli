import { Test, TestingModule } from '@nestjs/testing';
import { FruitsResolver } from './fruits.resolver';

describe('FruitsResolver', () => {
  let resolver: FruitsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitsResolver],
    }).compile();

    resolver = module.get<FruitsResolver>(FruitsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

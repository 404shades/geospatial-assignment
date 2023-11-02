import { Test, TestingModule } from '@nestjs/testing';
import { PolygonsController } from './polygons.controller';

describe('PolygonsController', () => {
  let controller: PolygonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolygonsController],
    }).compile();

    controller = module.get<PolygonsController>(PolygonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

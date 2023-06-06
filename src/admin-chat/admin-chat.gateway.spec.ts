import { Test, TestingModule } from '@nestjs/testing';
import { AdminChatGateway } from './admin-chat.gateway';

describe('AdminChatGateway', () => {
  let gateway: AdminChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminChatGateway],
    }).compile();

    gateway = module.get<AdminChatGateway>(AdminChatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

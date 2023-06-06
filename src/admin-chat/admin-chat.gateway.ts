import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(8001, { cors: '*' })
export class AdminChatGateway {

  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    // return 'Hello world!';
    console.log(message);
    this.server.emit('message', message);
  }
}

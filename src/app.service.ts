import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getParams(params: string): string {
    return params || '没有输入参数';
  }
}

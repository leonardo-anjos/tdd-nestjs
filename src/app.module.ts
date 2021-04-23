import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [TaskModule, ExchangeModule],
})
export class AppModule {}


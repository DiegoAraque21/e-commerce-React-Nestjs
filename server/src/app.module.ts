import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { TransactionsModule } from './transactions/transactions.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ProductModule, TransactionsModule, HttpModule],
})
export class AppModule {}

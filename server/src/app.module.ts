import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { TransactionsModule } from './transactions/transactions.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    TransactionsModule,
    HttpModule,
  ],
})
export class AppModule {}

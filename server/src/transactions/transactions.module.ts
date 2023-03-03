import { Module } from '@nestjs/common';
import { TransactionController } from './transactions.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionsModule {}

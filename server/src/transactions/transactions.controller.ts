import { Controller, Post, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Total } from './total.interface';

@Controller()
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('transaction-intent')
  postTransaction(@Body() body: Total) {
    return this.transactionService.postTransaction(body);
  }
}

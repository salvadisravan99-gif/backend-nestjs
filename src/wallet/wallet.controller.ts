import { Controller, Get } from '@nestjs/common';

@Controller('wallet')
export class WalletController {
  @Get()
  getWallet() {
    return { balance: 1000 };
  }
}

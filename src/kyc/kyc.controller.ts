import { Controller, Post } from '@nestjs/common';

@Controller('kyc')
export class KycController {
  @Post('upload')
  upload() {
    return { status: 'PENDING' };
  }
}

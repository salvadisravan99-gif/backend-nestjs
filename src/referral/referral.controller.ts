import { Controller, Get } from '@nestjs/common';

@Controller('referral')
export class ReferralController {
  @Get()
  tree() {
    return { left: [], right: [] };
  }
}

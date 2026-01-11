import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get()
  summary() {
    return {
      totalBusiness: 10,
      todayBusiness: 1,
      weeklyBusiness: 5
    };
  }
}

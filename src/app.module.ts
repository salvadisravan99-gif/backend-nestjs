import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { ReferralModule } from './referral/referral.module';
import { KycModule } from './kyc/kyc.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    WalletModule,
    ReferralModule,
    KycModule,
    DashboardModule,
    NewsModule
  ]
})
export class AppModule {}

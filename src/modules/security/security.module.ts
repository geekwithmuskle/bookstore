import { Module } from '@nestjs/common';
import { AuthenticationModule } from './Authentication';

@Module({
  imports: [AuthenticationModule],
})
export class SecurityModule {}

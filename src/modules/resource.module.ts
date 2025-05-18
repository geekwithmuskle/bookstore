import { Module } from '@nestjs/common';
import { DbModule } from './db-module';
import { SecurityModule } from './security';
import { ClientModule } from './bks-module';
import { ThirdPartyModule } from './third-party';

@Module({
  imports: [DbModule, ClientModule, SecurityModule, ThirdPartyModule],
})
export class ResourceModule {}

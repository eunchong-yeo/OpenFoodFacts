import { Module } from '@nestjs/common';
import { UserToProductController } from './user-to-product.controller';
import { UserToProductService } from './user-to-product.service';

@Module({
  controllers: [UserToProductController],
  providers: [UserToProductService]
})
export class UserToProductModule {}

import { ProductRepository } from './product.reppository';
import { AuthModule } from './../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import Product from './product.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([Product]),
    AuthModule
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository]
})
export class ProductModule {}

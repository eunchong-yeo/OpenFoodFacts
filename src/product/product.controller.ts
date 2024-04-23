import { User } from './../auth/user.entity';
import { GetUser } from './../auth/get-user.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Controller, Get, Param, Post, UsePipes, Body } from '@nestjs/common';
import Product from './product.entity';
import { Validate } from 'class-validator';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get('/:id')
    getProductById(@Param('id') id:number): Promise<Product>{
        return this.productService.getProductById(id);
    }
    
    @Post()
    @UsePipes(Validate)
    createProduct(
        @Body() createPruduct: CreateProductDto,
        @GetUser() user: User
    ): Promise<Product>{
        return this.productService.createProduct(createPruduct,user);
    }
    
}

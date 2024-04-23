import { CreateProductDto } from './dto/create-product.dto';
import { User } from './../auth/user.entity';
import { ProductRepository } from './product.reppository';
import { Injectable } from '@nestjs/common';
import Product from './product.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class ProductService {
    constructor(private productRepository: ProductRepository){}

    async getProductById(id: number): Promise <Product> {
        const found = await this.productRepository.findOneBy({id:id});

        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
        return found;
    }
    createProduct(createBoardDto: CreateProductDto, user: User) : Promise <Product>{
        return this.productRepository.createProduct(createBoardDto, user);
    }

}

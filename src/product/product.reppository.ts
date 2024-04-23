import { CreateProductDto } from './dto/create-product.dto';
import { User } from './../auth/user.entity';
import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import Product from './product.entity';
@Injectable()
export class ProductRepository extends Repository<Product>{
    constructor(private dataSource: DataSource){
        super(Product, dataSource.createEntityManager())
    }

    async createProduct(createProductDto: CreateProductDto, user: User) : Promise<Product>{
        const { product_name, brands, categories, image_url, url } = createProductDto;
        let { nutriments } = createProductDto;
        nutriments = JSON.stringify(nutriments);
        const product = this.create({
            product_name,
            brands,
            categories,
            nutriments,
            image_url,
            url
        });
        await this.save(product);
        return product;
    }
}
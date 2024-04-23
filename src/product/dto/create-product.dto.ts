import { IsNotEmpty } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    product_name: string;

    @IsNotEmpty()
    brands: string;

    @IsNotEmpty()
    categories: string;

    @IsNotEmpty()
    nutriments: string;

    @IsNotEmpty()
    image_url: string;

    @IsNotEmpty()
    url: string;

}
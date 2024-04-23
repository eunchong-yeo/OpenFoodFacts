import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export default class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    product_name: string;

    @Column()
    brands: string;

    @Column()
    categories: string;

    @Column()
    nutriments: string;

    @Column()
    image_url: string;

    @Column()
    url: string;

}
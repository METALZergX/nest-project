import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../../Schemas/product.schema';
import { ProductService } from './product.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}

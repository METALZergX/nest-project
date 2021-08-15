import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from '../../models/product.model';
import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { productDto } from './product.dto';

@Injectable()
export class ProductService 
{
    constructor(@InjectModel('Products') private _productModel: Model<ProductModel>)
    {}

    async findProduct(id: string): Promise<ProductModel>
    {
        return this._productModel.findById(id);
    }

    async createProduct(product: productDto): Promise<ProductModel>
    {
        const newProduct = new this._productModel(product);
        return newProduct.save();
    }

    async findAllProducts(): Promise<ProductModel[]>
    {
        return this._productModel.find().exec();
    }

    async findProductByCode(filter: {}): Promise<ProductModel[]>
    {
        return this._productModel.find(filter).exec();
    }

    async updateProduct(productId: string)// : Promise<ProductModel>
    {
        let id = Types.ObjectId(productId);
        return 1;
        //return this._productModel.updateOne({ _id: id }, { $set: { name: 'Producto actualizado' } });
    }
}

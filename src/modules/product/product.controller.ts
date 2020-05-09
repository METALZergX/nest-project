import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDto } from './product.dto';

@Controller('product')
export class ProductController 
{
    constructor(private _productService: ProductService)
    {}

    @Get()
    getProducts(): any
    {
        return this._productService.findAllProducts();
    }

    @Post('/code')
    getProductCode(@Body() filters: productDto): any
    {
        return this._productService.findProductByCode(filters);
    }

    @Get(':id')
    getProduct(@Param('id') id: string): any
    {
        return this._productService.findProduct(id);
    }

    @Post()
    createProduct(@Body() product: productDto): any
    {
        return this._productService.createProduct(product);
    }

    @Delete(':/id')
    deleteProduct(@Param() id: string): boolean
    {
        return true;
    }

}

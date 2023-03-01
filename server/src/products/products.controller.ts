import { Controller, Get } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('products')
  getProducts() {
    return this.productService.getProducts();
  }
}

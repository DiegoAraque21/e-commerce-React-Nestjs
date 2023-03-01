import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
// product interface
import { Products } from './products.interface';

@Injectable({})
export class ProductService {
  // contstructor to define only once http variable
  constructor(private readonly http: HttpService) {}
  //   function to get products from fakestoreapi.com
  async getProducts() {
    // first value form to allow the use of await, since at first the type
    // returned is not a promise
    const response = await firstValueFrom(
      this.http.get('https://fakestoreapi.com/products'),
    );
    // get the actual data from the response
    const data: Products = response.data;
    return {
      ms: 'Succesfull retreival of products!',
      data: data,
    };
  }
}

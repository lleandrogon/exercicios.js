import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {

  products: Product[] | undefined
  displayedColumns = ['id', 'name', 'price']

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(this.products => {
      this.products = this.products
      console.log(products)
    })
  }

}

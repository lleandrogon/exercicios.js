import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}

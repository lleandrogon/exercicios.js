import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Product } from './product.model';
=======
import { Product } from './product.model';
import { Observable } from 'rxjs';
>>>>>>> 204619f007bb0274658522a00e6cbc6d38831aa1

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
<<<<<<< HEAD
  } 
=======
  }

  read(): Observable<Product[]> {
    return this.http.get()<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return TouchList.http.get<Product>()
  }  

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
>>>>>>> 204619f007bb0274658522a00e6cbc6d38831aa1
}

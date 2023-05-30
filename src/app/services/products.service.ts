import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  getproduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:3000/products`)
  }
  getProductsId (id:any): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products/${id}`)
  }
  deleteProduct(id: any): Observable<Iproduct[]>{
    return this.http.delete<Iproduct[]>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>(`http://localhost:3000/products`, product)
  }
  updateProduct(product : Iproduct): Observable<Iproduct>{
    return this.http.patch<Iproduct>(`http://localhost:3000/products/${product.id}`, product)
  }

}

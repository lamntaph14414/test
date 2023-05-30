import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Iproduct[]=[];

 constructor (private productSevice: ProductsService){
  this.productSevice.getproduct().subscribe(data => {
    this.products = data
  }, error=>{
    console.log(error.message);
    
  })
 }
 removeItem(id: any){
  this.productSevice.deleteProduct(id).subscribe(()=>{
    console.log('xóa thành công');
    
  }) 
}
}

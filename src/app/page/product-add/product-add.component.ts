import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Iproduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: 0,
    img: ['', [Validators.required]]
  })
constructor (
  private productService : ProductsService,
  private fb : FormBuilder
){

}
onHandleSubmit(){
  if(this.productForm.valid){
    const product : Iproduct ={
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      img: this.productForm.value.img || ""
    }
    this.productService.addProduct(product).subscribe(product => {
      console.log('them thanh cong');
      
    })
  }
}
}

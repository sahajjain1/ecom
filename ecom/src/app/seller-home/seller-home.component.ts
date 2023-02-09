import { Component, OnInit } from '@angular/core';
import { ProductService } from '../seller-add-product/services/product.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: any;
  productMessage: any;
  icon=faTrash;
  edit=faEdit;
  constructor(private product: ProductService) { }


  ngOnInit(): void {
    this.list()

  }
  deleteProduct(id: number) {
    console.log("deleteProduct", id)

    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "product deleted successfully";

        this.list()

      }
    })

    setTimeout(() => { this.productMessage = undefined }, 3000)
  }

  list() {
    this.product.productList().subscribe((result) => {
      console.log(result);
      this.productList = result;
    })


  }

} 

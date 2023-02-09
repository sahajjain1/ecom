import { Component } from '@angular/core';
import { SellerServiceService } from './seller-auth/seller-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';
  constructor(private seller:SellerServiceService){}
  ngOnIint():void{
    this.seller.reloadSeller()
  }
}

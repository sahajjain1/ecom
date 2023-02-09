import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from './seller-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError:String = '';
  constructor(private seller: SellerServiceService, private router: Router) { }
  ngOnInit(): void {
    this.seller.reloadSeller();

  }

  signUp(data: any): void {
    console.log(data);
    this.seller.userSignup(data)
    // this.seller.userSignup(data).subscribe((result) => {

    //   if (result) {
    //     this.router.navigate(['seller-home'])
    //   }

    // });

  }

  login(data: any): void {
    this.authError = "";
  //  console.log(data);
   this.seller.userLogin(data);
   this.seller.isLoginError.subscribe((isError) => {
    if (isError)
    {
      this.authError = "Email or password is not correct "
    }
   })
  }
  openLogin() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }
}

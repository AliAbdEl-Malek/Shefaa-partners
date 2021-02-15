import { Partner } from './../../../../models/partner';
import { Product } from './../../../../models/Product';
import { APIResponse } from './../../../../models/Api-response';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : [{}] = [{'name':"mahmoud",'age':23,'gender':"male"}];
  partner: Partner;
  isLogged: boolean
  formGroup: FormGroup;

  constructor(private _apiService: ApiService, private _partnerService: PartnerService,) { }

  ngOnInit(): void {
    let token = this._partnerService.getToken()
    console.log("Token is:", token)
    this._apiService.get('partner/get/' + token).subscribe((response) => {
      let obj = response as APIResponse
      console.log("partner Retrieved: ", obj)
      if (obj.status) {
        this.partner = obj.Data
        console.log("partner retreived is: ", this.partner)
      }
      // else {
      //   alert(obj.message)
      // }
    })
    this.isLogged = this._partnerService.isLogged()

    //fromgroup validation
    // this.formGroup = this._formBuilder.group({
    //   input: ['', [Validators.required]],
      

    // })
    
  }

  addproduct() {
    let partner = this.partner

    console.log("partner", partner);
  }

}

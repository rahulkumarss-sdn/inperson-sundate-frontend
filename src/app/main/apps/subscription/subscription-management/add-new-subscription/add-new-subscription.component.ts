import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { SubscriptionService } from '../../subscription.service';

@Component({
  selector: 'app-add-new-subscription',
  templateUrl: './add-new-subscription.component.html',
  styleUrls: ['./add-new-subscription.component.scss']
})
export class AddNewSubscriptionComponent implements OnInit {
 
  public productData:any;
  public productForm = this.fb.group({
    name: [''],
    description : [''],
    prices : this.fb.array([]),
    features : [''],
  });

  public intervals = [
    {name:'Month',value:'month'},
    {name:'Days',value:'day'},
    {name:'Year',value:'year'}
  ]
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService,private subscriptionService:SubscriptionService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.setDefaultValue();
    this.getProductDetails();
  }

  get priceDetails() {
    return this.productForm.get('prices') as FormArray;
  }


  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  addProductPrices() {
    let productDetails = this.productForm.get('prices') as FormArray;
    productDetails.push(this.fb.group({
      unit_amount:[''],
      interval:[''],
      interval_count:['']
    }));
  }


  deleteProductDetails(index: number) {
    this.priceDetails.removeAt(index);
  } 


  setDefaultValue() {
    this.addProductPrices();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid && (this.productData && this.productData.id)) {
      // let data = form.value;
      // data.id = this.productData.id;
      // this.subscriptionService.addPriceInProduct(this.productData.id,data).subscribe(res=>{
      // });
    }else if(form.valid){
      console.log(" subscription details. " , form.value);
      this.subscriptionService.addProduct(form.value).subscribe(res=>{
        window.location.reload();
      });
    }
  }

  getProductDetails() {
    this.subscriptionService.changeProductDetailsData.subscribe(res=>{
      if(res) {
        this.productData = res;
        this.productForm.patchValue({
          name:res['productName']
        });

      this.productForm.get('prices') as FormArray;
      } 
    })
  }

  // updatePriceDetails(data) {
  //   console.log("data------",data);
  //   data.active = !data.active
  //   this.subscriptionService.updatePriceData(data.priceId,data.active).subscribe(res=>{
  //     console.log("----",res);
  //   })
  // }

  setValue(data) {
    let productPrice = this.productForm.get('prices') as FormArray;
    this.priceDetails.removeAt(0);
    for(let i=0;i<data['product_details'].length;i++) {
      productPrice.push(this.fb.group({
        unit_amount:data['product_details'][i].price,
        period:data['product_details'][i].interval.interval,
        interval_count:data['product_details'][i].interval.interval_count
      }));
    }
  }
}

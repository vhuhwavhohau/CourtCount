import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value = 0;
  value2 = 0;
  
  
  

  constructor(public navCtrl: NavController) {

  }
  clickthree(){
    this.value +=3;
    console.log(this.value);
  }
  clicktwo(){
    this.value +=2;
    console.log(this.value);
  }
  clickone(){
    this.value +=1;
    console.log(this.value);
  }
  clickthreee(){
    this.value2 +=3;
    console.log(this.value2);
  }
  clicktwoo(){
    this.value2 +=2;
    console.log(this.value2);
  }
  clickonee(){
    this.value2 +=1;
    console.log(this.value2);
  }
  Reset(){
    this.value = 0;
    this.value2 =0;
    console.log(this.value + this.value2)
  }
  
  
  

  }
  
    
  

 



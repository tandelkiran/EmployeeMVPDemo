import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo-presentation-ui',
  templateUrl: './pipe-demo-presentation.html',
  styleUrls: ['./pipe-demo-presentation.scss']
})
export class PipeDemoPresentation implements OnInit {

  values:string;
  constructor() { 
    
  }

  ngOnInit() {
    // console.log('vQQ'+this.values);
  }
  onItemChange(selectedValue){
    debugger
    
    this.values=selectedValue;
    alert(this.values);
    // console.log(" Value is : ", value );
 }

}

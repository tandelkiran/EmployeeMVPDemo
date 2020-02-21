import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo-presentation-ui',
  templateUrl: './pipe-demo-presentation.html',
  styleUrls: ['./pipe-demo-presentation.scss']
})
export class PipeDemoPresentation implements OnInit {

  values: string;

  constructor() {

  }

  ngOnInit() {
  }

  users: any[] = [
    { code: '1', name: 'jenny', salary: 50000, dob: '28/nov/1996' },
    { code: '2', name: 'ketan', salary: 60000, dob: '22/march/1992' },
    { code: '3', name: 'ravi', salary: 70000, dob: '13/june/1989' },
    { code: '4', name: 'neel', salary: 40000, dob: '07/aug/1945' },
    { code: '5', name: 'manoj', salary: 80000, dob: '09/sept/1999' },
    { code: '6', name: 'suraj', salary: 30000, dob: '25/july/1991' }
  ];


  public onItemChange(selectedValue): void {
    this.values = selectedValue;
  }
}

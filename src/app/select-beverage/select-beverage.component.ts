import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DrinksService } from '../drinks.service';
@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  beverageList: object[] = [
    {
      
      value: "Old Fashioned"
    },
    {
      
      value: "Margarita"
    },
    {
      
      value: "Cosmopolitan"
    },
    {
      
      value: "Moscow Mule"
    }
  ];
  @Output() sendBeverage: EventEmitter<string> = new EventEmitter<string>();

  selectedBeverage: string = "";
  choosenBeverage(beverageList): void {
    this.selectedBeverage = beverageList.value;
    this.sendBeverage.emit(this.selectedBeverage)
    this.userInfo.saveBeverage(beverageList.value);
  }




  constructor(private userInfo: DrinksService) {

  }
  ngOnInit(): void {

  }

}


 
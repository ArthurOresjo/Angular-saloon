import { Component, OnInit, Output, EventEmitter, Input,} from '@angular/core';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  lastname: string;
  inputValue: string;
  gotName: boolean = false;
  foundStorage: boolean = false;

  addName(name: string) {
    this.lastname = name;
    this.gotName = true;
    this.userInfo.saveName(name);
  }

  gotBeverage: boolean = false;
  beverage: string;

  handleBeverage(gotBeverage: string) {
    this.beverage = gotBeverage;
    this.gotBeverage = true;
  }

  storedBeverage: string;
  gotStoredBeverage(storedBeverage: string) {
    this.beverage = storedBeverage;
    this.gotBeverage = true;
  }
  constructor(private userInfo: DrinksService) {

  }
  firstTime: boolean = false;
  noBeverage: boolean = false;

  ngOnInit() {
    if (localStorage.getItem("Name") !== null) {
      this.lastname = localStorage.getItem("Name");
      this.gotName = true;
    } else {
      this.firstTime = true;
    };

    if (localStorage.getItem("Beverage") !== null) {
      this.storedBeverage = localStorage.getItem("Beverage");
      this.noBeverage = true;
    } else
      this.noBeverage = false;
  }


}


  
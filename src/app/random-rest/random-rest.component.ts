import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-random-rest',
  templateUrl: './random-rest.component.html',
  styleUrls: ['./random-rest.component.css']
})
export class RandomRestComponent implements OnInit, OnChanges{
  periods:String[] = ["1 minute", "2 minutes", "3 minutes"];
  @Input() gesture:String = "None";
  chosen_period:String = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gesture) {
      const currValue = changes.gesture.currentValue;
      if(currValue == "Hand Pointing")
      {
        this.chosen_period = this.periods[Math.floor(Math.random()*this.periods.length)];
      }
      else if(currValue == "None")
      {
        this.chosen_period = "Point Hand to Get a Random Rest Period!"
      }
    }
  }

  ngOnInit(): void {
    
  }

  update(): void {
    
  }
}

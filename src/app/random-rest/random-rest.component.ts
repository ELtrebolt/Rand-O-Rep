import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-random-rest',
  templateUrl: './random-rest.component.html',
  styleUrls: ['./random-rest.component.css']
})
export class RandomRestComponent implements OnInit, OnChanges{
  periods:String[] = ["1 minute", "2 minutes", "3 minutes"];
  @Input() gesture:String = "";
  chosen_period:String = "";

  constructor() { }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.gesture) {
      const currValue = changes.gesture.currentValue;
      if(currValue == "Hand Pointing")
      {
        this.chosen_period = "Generating Random Rest...";
        await new Promise(resolve => { setTimeout(resolve, 2000)});
        this.chosen_period = this.periods[Math.floor(Math.random()*this.periods.length)];
      }
      else if(currValue == "")
      {
        this.chosen_period = "Point Hand to Get a Random Rest Period!";
      }
    }
  }

  ngOnInit(): void {
    
  }

  update(): void {
    
  }
}

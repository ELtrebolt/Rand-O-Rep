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
  instruction:string = "Hold up a 5 and a 1 to Get a Random Rest Period!";
  generatingMessage:string = "";
  constructor() { }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.gesture) {
      const currValue = changes.gesture.currentValue;
      if(currValue == "One Open Hand, One Pointing Hand")
      {
        this.instruction = "";
        this.generatingMessage = "Generating Random Rest...";
        await new Promise(resolve => { setTimeout(resolve, 2000)});
        this.generatingMessage = "";
        this.chosen_period = this.periods[Math.floor(Math.random()*this.periods.length)];
      }
    }
  }

  ngOnInit(): void {
    
  }

  update(): void {
    
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-random-rest',
  templateUrl: './random-rest.component.html',
  styleUrls: ['./random-rest.component.css']
})
export class RandomRestComponent {
  periods:String[] = ["1 minute", "2 minutes", "3 minutes"];
  @Input() gesture:String = "None";
  chosen_period:String = "";

  constructor() { }

  ngOnInit(): void {
    if(this.gesture == "Hand Pinching")
    {
      this.chosen_period = this.periods[Math.floor(Math.random()*this.periods.length)];
    }
    else if(this.gesture == "None")
    {
      this.chosen_period = "Point Hand to Get a Random Rest Period!"
    }
  }

  update(): void {
    
  }
}

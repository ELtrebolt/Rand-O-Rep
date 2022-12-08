import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-random-rep',
  templateUrl: './random-rep.component.html',
  styleUrls: ['./random-rep.component.css']
})
export class RandomRepComponent implements OnChanges, OnInit{
  @Input() gesture: string;
  public minRep: number;
  public maxRep: number;
  public minSelected: boolean;
  public maxSelected: boolean;
  public errorMessage: string;
  public randomRep: string;
  public generatingMessage: string;

  constructor() {}

  ngOnInit(): void {
    this.minRep = 1;
    this.maxRep = 2;
    this.minSelected = false;
    this.maxSelected = false;
    this.errorMessage = '';
    this.randomRep = '';
    this.generatingMessage = '';
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.gesture) {
      const currValue = changes.gesture.currentValue;
      if (currValue == 'Open Hand') {
        if (this.minSelected) {
          this.minRep++;
          if (this.maxRep <= this.minRep) {
            this.maxRep = this.minRep + 1;
          }
        }
        else if (this.maxSelected) {
          this.maxRep++;
        }
      } else if (currValue == 'Closed Hand') {
        if (this.minSelected) {
          if (this.minRep == 0) {
            this.errorMessage = "Minimum rep value must be greater than 0"
            await new Promise(resolve => { setTimeout(resolve, 2000)});
            this.errorMessage = "";
          } else {
            this.minRep--; 
          }
        }
        else if (this.maxSelected) {
          this.maxRep--;
          if (this.maxRep <= this.minRep) {
            this.minRep--;
          }
        }
      } else if (currValue == 'Two Open Hands') {
        if (this.minSelected) {
          this.minSelected = false
        } else { 
          this.minSelected = true; 
        }
        this.maxSelected = false;
      } else if (currValue == 'Two Closed Hands') {
        if (this.maxSelected) {
          this.maxSelected = false;  
        } else {
          this.maxSelected = true; 
        }
        this.minSelected = false;
      } else if (currValue == 'One Open Hand, One Closed Hand') {
        if (this.minRep == 0) {
          this.errorMessage = "Minimum rep value must be set"
          await new Promise(resolve => { setTimeout(resolve, 2000)});
          this.errorMessage = ""; 
        } else {
          this.generatingMessage = "Generating Random Rep Count...";
          await new Promise(resolve => { setTimeout(resolve, 2000)});
          this.generatingMessage = "";
          this.randomRep = (Math.floor(Math.random() * this.maxRep) + this.minRep).toString() + " Reps";
        }
      }
    }
  }

}

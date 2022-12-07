import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-random-rep',
  templateUrl: './random-rep.component.html',
  styleUrls: ['./random-rep.component.css']
})
export class RandomRepComponent implements OnChanges, OnInit{
  @Input() gesture: string;

  constructor() {}
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gesture) {

    }
  }

}

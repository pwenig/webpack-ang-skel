import { Component, OnInit } from '@angular/core';
import {MountainService} from '../services/mountain_service';


@Component({
  selector: 'hello-angular',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent implements OnInit {

  name: string;
  mountains: any;

  constructor(private _mountains: MountainService) {}

  ngOnInit() {
    this.name = 'Paul';
    this._mountains.getMountains().subscribe(
      (data) => {
        this.mountains = data;

        console.log('MOUNTAINS', this.mountains)
    

      },
      (error) => {
        console.log('Error', error)
      }
    )



  }

 


}

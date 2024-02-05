import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged, throttleTime} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'debounce-throttle';
  searchText  = new FormControl('');

  constructor(){

  }

  ngOnInit() {
    // debouncing 
    // this.searchText.valueChanges.pipe(debounceTime(400),distinctUntilChanged()).subscribe((res) => {
    //   console.log("res", res);
    //   // any BE api call can be made here
    // }, (err) =>{
    //   console.log(err);
    // });
    // Throttling
    this.searchText.valueChanges.pipe(throttleTime(400),distinctUntilChanged()).subscribe((res) => {
      console.log("res", res);
    } , (err) => {
      console.log(err);
    });
  }
}

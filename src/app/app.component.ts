import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  testProp = '';



  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);

    this.testProp = f.value.first;
  }

  ngOnInit(): void {
    this.doRandomCheck();
  }

  doRandomCheck(): void {
    if(Math.random() < 0.5) {
      this.doSomethingRandomA();
    } else {
      this.doSomethingRandomB();
    }
  }

  doSomethingRandomA(): void {
    console.log('did A randomly')
  }

  doSomethingRandomB(): void {
    console.log('did B randomly')
  }
}

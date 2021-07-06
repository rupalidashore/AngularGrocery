import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css', 
              '../../assets/css/bootstrap.min.css']
})
export class GroceryComponent implements OnInit {
task:string='';
tasks : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.tasks.push(`name:${this.task}`);
  this.task = '';
}

}

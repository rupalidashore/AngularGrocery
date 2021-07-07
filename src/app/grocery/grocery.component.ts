import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css', 
              '../../assets/css/bootstrap.min.css']
})
export class GroceryComponent implements OnInit {
task ={name:'',
        id:0};
 
tasks:any[]=[];
  constructor() {     
  }

  ngOnInit(): void {
  }
  onClick(){   
    if(this.task.name.length>0){
    this.tasks.push({id: (new Date()).getTime(),name: this.task.name});    
    this.task.name="";
    }
  }
   
  handleKeyDown(event: any){   
    if(event.keyCode == 13 && this.task.name.length>0)
    {
      this.tasks.push({id: (new Date()).getTime(),name: this.task.name});    
      this.task.name="";
    }    
  }
onEdit(item:any){
  this.task=item
  // for( var i=0;i<this.tasks.length;i++){
  //   if(item.id==this.tasks[i].id){
  //     this.tasks[i].name=this.task;
  //     break;
  //   }
  // }
}

onDelete(item:any){
  for( var i=0;i<this.tasks.length;i++){
    if(item.id==this.tasks[i].id){
      this.tasks.splice(i,1);
      break;
    }
  }
}
onStrike(item:any){
  for(var i = 0;i < this.tasks.length; i++){
    if(item.id == this.tasks[i].id){
      if(this.tasks[i].strike){
        this.tasks[i].strike = false;
      }
      else{
        this.tasks[i].strike = true;
      }
      break;
    }
  }
}

public clear(): void {
  this.tasks = [];
}
}

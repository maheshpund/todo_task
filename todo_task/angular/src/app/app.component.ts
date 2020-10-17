import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  alltasks: Object;

  isEdit=false;
  taskObj={
    task:"",
    date:'',
    done:''
    }

  constructor(private taskservice:TaskService){}
  ngOnInit(){
    this.getLatesttask()

  }

  addtask(formobj){
    console.log(formobj)
    this.taskservice.createtask(formobj).subscribe((response)=>{
      this.getLatesttask();
    })
  }
  getLatesttask(){
    this.taskservice.getAlltask().subscribe((response)=>{
      this.alltasks= response
    })
  }

  EditTask(task){
    this.isEdit=true;
    this.taskObj = task;
  }

  deletetask(task){
    this.taskservice.Deletetask(task).subscribe(()=>{
      this.getLatesttask()
    })
  }

  updatetask(){
    this.isEdit = !this.isEdit;
    this.taskservice.Updatetask(this.taskObj).subscribe(()=>{
      this.getLatesttask()
    })
  }



}

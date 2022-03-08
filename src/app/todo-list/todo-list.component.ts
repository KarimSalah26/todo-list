import { Component } from '@angular/core';


class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {

  public name: string = '';
  public isDone : boolean= false

  

  public items: Array<TodoItem> = [
    { isDone: false,
      name: "First item"
    },{ isDone: true,
      name: "Second item"
    },{ isDone: false,
      name: "Third item"
    },
     ];

     numberOfTask : number = this.items.length ;
     completedTasks : number = this.items.filter(item => !item.isDone).length;; 

   

  public add() {
    const newTask :TodoItem = {
      name : this.name,
      isDone : this.isDone, 
    }

    if (this.name) {
      this.items.push(newTask)

      this.numberOfTask++
    this.completedTasks++   
      
    }
    this.name = ""
      }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
    this.completedTasks = this.items.filter(item => !item.isDone).length

    
    
  }

}

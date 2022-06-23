angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this;

    todoList.todos = [new Todo('TODO 1'), new Todo('TODO 2'), new Todo('TODO 3')]


    todoList.submit = function () {
      // console.log('submit')
      var newTodo = createTodo(todoList.newTodoText);
      todoList.todos.push(newTodo)
      todoList.newTodoText = '';
    }


    function createTodo(newTodoText) {
      return new Todo(newTodoText);
    }

  });

/*
Copyright 2022 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

class Todo {
  text;
  done = false;
  show = true;
  newSubTodoText = '';
  sub = []

  constructor(text) {
    this.text = text;
  }

  addSub() {
    var newSub = new Todo(this.newSubTodoText)
    this.sub.push(newSub);
    this.clearNewTodoText();
  }

  switchSubList() {
    this.show = !this.show;
  }

  allChecked() {
    this.done = this.sub.every(subList => subList.done);
  }

  clearNewTodoText() {
    this.newSubTodoText = ''
  }

}

angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this;
    todoList.todos = [
      { text: 'typeA', done: false, sub: [{ text: 'A1' }, { text: 'A2' }], show: false },
      { text: 'typeB', done: false, sub: [{ text: 'B1' }, { text: 'B2' }], show: true }
    ];

    todoList.addTodo = function () {
      todoList.todos.push({ text: todoList.todoText, done: false });
      todoList.todoText = '';
    };

    todoList.remaining = function () {
      var count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function () {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function (todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };

    todoList.subShow = function (todo) {
      if (todo.show == true) {
        todo.show = false;
      } else {
        todo.show = true;
      }
    };

  });

/*
Copyright 2022 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
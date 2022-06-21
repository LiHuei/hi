angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this;
    todoList.todos = [
      { text: 'TODO 1', done: false, show: true, newSubTodoText: '', sub: [{ text: '1A', done: true }, { text: '2A', done: false }], },
      { text: 'TODO 2', done: false, show: true, newSubTodoText: '', sub: [{ text: '1B', done: false }, { text: '2B', done: false }], },
      { text: 'TODO 3', done: false, show: true, newSubTodoText: '', sub: [{ text: '1C', done: false }, { text: '2C', done: false }], },
    ];

    todoList.openSubList = function (todo) {
      // console.log('open')
      todo.show = !todo.show
    }

    todoList.allChecked = function (todo) {
      var isAllChecked = todo.sub.every(subList => subList.done);
      todo.done = isAllChecked
    }

    todoList.submit = function () {
      // console.log('submit')
      var newTodo = createTodo(todoList.newTodoText);
      todoList.todos.push(newTodo)
      todoList.newTodoText = '';
    }

    todoList.submitSub = function (todo) {
      var newSub = createSub(todo.newSubListText);
      console.log(todo)
      // todo.sub.push({ text: todo.newSubListText })
      todo.sub.push(newSub)
      // console.log(todoList.todos[0])
    }

    function createTodo(newTodoText) {
      console.log('aaa')
      return { text: newTodoText, done: false, sub: [] }
    }

    function createSub(newSubListText) {
      return { text: newSubListText }
    }

  });

/*
Copyright 2022 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
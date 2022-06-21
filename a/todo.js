angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this;
    todoList.todos = [
      { text: 'TODO1', checked: false, sub: [{ text: ' A1', checked: true }, { text: ' A2', checked: false }, { text: ' A3', checked: false }], show: true },
      { text: 'TODO2', checked: false, sub: [{ text: ' B1', checked: true }, { text: ' B2', checked: false }, { text: ' B3', checked: false }], show: false },
      { text: 'TODO3', checked: false, sub: [{ text: ' C1', checked: true }, { text: ' C2', checked: false }, { text: ' C3', checked: false }], show: false }
    ];

    todoList.show = function (todo) {
      todo.show = !todo.show
    }

    todoList.func = function (todo) {
      // console.log(todo.sub)
      // var isAllChecked = todo.sub.every(item => item.checked)

      var isAllChecked = true

      // var isChecked = todo.sub.filter(item => item.checked)
      // console.log(isChecked)
      for (var i = 0; i < todo.sub.length; i++) {
        if (!todo.sub[i].checked) {
          isAllChecked = false;
        }
      }

      // console.log('全部打勾:', isAllChecked)

      // if (isAllChecked == true) {
      //   todo.checked = true;
      // } else {
      //   todo.checked = false;
      // }

      todo.checked = isAllChecked
    }
  });

/*
Copyright 2022 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
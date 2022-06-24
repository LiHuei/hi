angular.module('todoApp', [])
  .controller('Controller', function () {
    this.nav = [
      new Test('A'),
      new Test('B'),
      new Test('C'),
      new Test('D'),
    ]

    this.select = function (test) {
      this.nav.forEach(item => item.setShow(false))
      test.setShow(true)
    }
  });

/*
Copyright 2022 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

class Test {
  show;
  text;
  content;
  constructor(text) {
    this.text = text;
    this.content = `content ${text}`
  }

  setShow(value) {
    this.show = value;
  }
}
angular.module('todoApp', [])
  .controller('Controller', function () {
    this.nav = [
      { text: 'Home', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
      { text: 'Slot', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
      { text: 'Live Casino', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
      { text: 'Chess Games', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
      { text: 'Fish Hunter', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
      { text: 'Sports', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
      { text: 'Promotion', sub: [{ text: 'slot 1' }, { text: 'slot 2' }, , { text: 'slot 3' }, { text: 'slot 4' }, { text: 'slot 5' }] },
    ]
  });

/*
Copyright 2022 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
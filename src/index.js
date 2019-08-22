import _ from 'lodash';
// webpack will not alter any code other than import and export statements.
// If you are using other ES2015 features, make sure to use a transpiler such as Babel or Bublé via webpack's loader system.

function createDiv() {
    const el = document.createElement('div');

    var data = [
        { "name": "Maria", "chosen": false },
        { "name": "Jenny", "chosen": false },
        { "name": "Ben", "chosen": false },
        { "name": "Morris", "chosen": false }
    ];
    el.innerHTML = _.map(data, 'name').join(', ');
    return el;
}

document.body.append(createDiv());

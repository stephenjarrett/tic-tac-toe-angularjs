'use strict';

class SquareController {
    value;
    constructor() {}
}

angular.module('app').component('square', {
    templateUrl: 'components/square/square.component.html',
    controller: SquareController,
    controllerAs: 'vm',
    bindings: {
        value: '@'
    }
});

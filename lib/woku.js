(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.WOKU = {})));
}(this, (function (exports) {
    'use strict';

    function Say() {

        console.log("woku");
    }



    exports.Say = Say;

    Object.defineProperty(exports, '__esModule', { value: true });



})))
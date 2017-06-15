(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.gAxis = global.gAxis || {})));
}(this, function (exports) { 'use strict';

    function xaxisOrdinal() {
    	let tickSize = 0;


        function axis(parent) {

            
        }

        axis.tickSize = (d)=>{
            if(d===undefined) return tickSize
            tickSize=d;
            return axis;
        }
            
        return axis
    };

    exports.xaxisOrdinal = xaxisOrdinal;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
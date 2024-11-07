"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius ** 2;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
exports.default = Geometry;
// Geometry.calculateArea(10)

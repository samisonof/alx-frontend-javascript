"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cpp = void 0;
var Subject_1 = require("./Subject");
var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Cpp';
    };
    Cpp.prototype.getAvailableTeacher = function () {
        var _a;
        if (!((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingC)) {
            return 'No available teacher';
        }
        return "Available Teacher: " + this.teacher.firstName;
    };
    return Cpp;
}(Subject_1.Subject));
exports.Cpp = Cpp;
//# sourceMappingURL=Cpp.js.map
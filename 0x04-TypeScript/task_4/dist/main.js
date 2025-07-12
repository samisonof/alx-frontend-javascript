"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
var Cpp_1 = require("./subjects/Cpp");
var Java_1 = require("./subjects/Java");
var React_1 = require("./subjects/React");
exports.cpp = new Cpp_1.Cpp();
exports.java = new Java_1.Java();
exports.react = new React_1.React();
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log('React');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
//# sourceMappingURL=main.js.map
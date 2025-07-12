# 0x04. TypeScript

This project introduces the basics and advanced features of TypeScript in frontend JavaScript development. You’ll learn how to define interfaces, classes, namespaces, and interact with configuration files like `tsconfig.json` and `webpack.config.js`.

## Learning Objectives

- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript

---

## 📁 Tasks Summary

### ✅ Task 0: Creating an Interface for a Student

- Created an interface `Student` with fields: `firstName`, `lastName`, `age`, and `location`.
- Rendered an HTML table using TypeScript that displays student names and locations.
- Validated that Webpack compiles without any type errors.

---

### ✅ Task 1: Extending Interfaces and Creating Classes

- Defined a `Teacher` interface with readonly fields and optional attributes.
- Used index signatures to allow additional properties (like `contract`).
- Created a `Directors` interface that extends `Teacher`.
- Created a `StudentClass` with methods and described it via an interface.

---

### ✅ Task 2: Implementing Interfaces with Classes

- Created `DirectorInterface` and `TeacherInterface`.
- Implemented `Director` and `Teacher` classes based on the interfaces.
- Built a `createEmployee` function that returns a `Director` or `Teacher` based on salary type and value.

---

### ✅ Task 3: Ambient Declarations and Module Interoperability

- Created type definitions for `crud.js` using an ambient `crud.d.ts` file.
- Defined types `RowID` and `RowElement` in `interface.ts`.
- Used TypeScript to call and validate `insertRow`, `updateRow`, and `deleteRow`.

---

### ✅ Task 4: Namespaces and Subject Classes

- Used namespaces to define `Teacher` interface and multiple subjects: `Cpp`, `Java`, `React`.
- Used declaration merging to add optional teaching experience fields.
- Each subject class implements `getRequirements()` and `getAvailableTeacher()`.
- Demonstrated usage by logging outputs for each subject with a sample teacher.

---

### ✅ Task 5: Branded Types with Major and Minor Credits

- Defined `MajorCredits` and `MinorCredits` interfaces using branding (`__brand`) for type safety.
- Implemented `sumMajorCredits()` and `sumMinorCredits()` functions that accept and return properly typed values.

---

## 🛠️ Project Structure

0x04-TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
├── task_5/
├── package.json (per task)
├── tsconfig.json (per task)
└── webpack.config.js (per task)


---

## ✅ Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The Typescript compiler should not show any warning or error when compiling your code

---

## 📚 Resources

-  [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Webpack Documentation](https://webpack.js.org/)
- [Jest Documentation](https://jestjs.io/docs/en/24.x/getting-started)

---

## Author

Samuel Beraki
Project from **ALX Frontend ProDev**


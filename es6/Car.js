class Car {
  // the following function is called a constructor function and is called when a new instance of the class is created
  // the constructor function is used to initialize the object
  // the (name) parameter is used to pass the value to the constructor function
  // not passing an argument to the constructor function will result in an undefined value
  // additionally, if you do not declare a constructor function for a class a default constructor function will be created for you by the JavaScript engine and will not take any parameters
  // the constructor function is a special function that is used to initialize the object
  // the "this" keyword is used to refer to the object that is created by the class, and the "brand" property is assigned the value of "name"
  // think of it as if you are creating a variable called brand and assigning it the value of name taken from the parameter of the constructor function
  // the "brand" property is then used to store the value of the "name" parameter
  // think of the "this" keyword as an anchor which is being used to hold the brand variable within the scope of the class
  // the concept of the this keyword is complicated to explain to newcomers, but this is the best analogy I can think of for now.
  // the "this" keyword is used to refer to the object that is created by the class, which means that the "brand" property is a property of the object that is created by the class. Whenever you create an object, the "brand" property will be created as well.

  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
  // End of class definition
}

// Declaring a new class called Model that extends the Car class

class Model extends Car {
  constructor(name, mod) {
    // The super keyword is used to call the constructor of the parent class. As you can see here, it uses the same parameters as the constructor of the parent class.
    super(name);
    // Here the new extended class is declaring a new property called model and assigning it the value of the parameter mod
    this.model = mod;
  }  
  show() {
    // the "this" keyword is referring to the Car class method present()
    // think of "this" as a pointer to the topmost class.
      return this.present() + ', it is a ' + this.model
  }

// objects must be created as constant variables because the class is not a function, it is a template for creating objects.
// Creating a new object from a class is called instantiating an object

// Creating a new object from the class Car called mycar with the parameter "Ford"

const mycar = new Car("Ford");

console.log(mycar.brand);
console.log(mycar.present());

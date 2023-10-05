


console.log("");
console.log("OBJECT DEFINE PROPERTY PATTER");
// REACTIVE INDIVIDUAL PROPERTIES: Object.definePropery

const employee = {
  _name: 'Rob'
};

Object.defineProperty(employee, 'name', {
  get: function(){
    console.log(`Getting property name`);
    return this._name;
  },
  set: function(value){
    console.log(`Setting property name to ${value}`);
    this._name = value;
  }
})

console.log(employee.name);
employee.name = "Wanda";
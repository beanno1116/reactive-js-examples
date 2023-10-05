


console.log("");
console.log("PROXY PATTERN");
// REACTIVE OBJECT PROPERTIES WITH JAVASCRIPT PROXIES

const handler = {
  get: function(target,property){
    console.log(`Getting property ${property}`);
    return target[property];
  },
  set: function(target,property,value){
    console.log(`Setting property ${property} to ${value}`);
    target[property] = value;
    return true;
  }
}

const person = {
  name: "Ben",
  age: 39,
  gender: "male"
}

const proxiedPerson = new Proxy(person,handler);
console.log(proxiedPerson.name);
proxiedPerson.name = "Alan";
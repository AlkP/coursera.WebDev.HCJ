(function (window) {
  let sayHello = {};
  sayHello.speak = function(name) {
    console.log("Hello " + name);
  }

  window.sayHello = sayHello;
})(window);
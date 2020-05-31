(function (window) {
  let sayGoodbye = {};
  sayGoodbye.speak = function(name) {
    console.log("Goodbye " + name);
  }

  window.sayGoodbye = sayGoodbye;
})(window);
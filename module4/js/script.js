let names = ["Alexey", "Joe", "Yaakov", "Jenya","Temir"]

for (let name of names) {
  let firstChart = (name.charAt(0)).toLowerCase();
  if (firstChart === 'j') {
    sayGoodbye.speak(name)
  } else {
    sayHello.speak(name)
  }
}
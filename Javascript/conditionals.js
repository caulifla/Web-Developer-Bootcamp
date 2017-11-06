var age = Number(prompt("What is your age?"));

if (age < 0) alert("ERROR: age is negative");
else if (age == 21) alert("Happy 21st birthday!");
else if (age % 2 == 1) alert("Your age is odd!");
else if ((Math.sqrt(age)+"").split(".").length == 1) alert("perfect square!");
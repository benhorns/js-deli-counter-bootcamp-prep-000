function takeANumber (katzDeli, name){
  katzDeli.push (name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(deliLine){
  return "Currently serving " + deliLine.shift()"."
   // do {("Now Serivng" +deliLine.shift())};
   // while (deliLine > 0);
   // return "There is nobody waiting to be served!";
}

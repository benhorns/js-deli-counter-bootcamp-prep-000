function takeANumber (katzDeli, name){
  katzDeli.push (name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(deliLine){
  while (deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + "."
  }
  return "There is nobody waiting to be served!"

}

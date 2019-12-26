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

function currentLine (line){
for (var i = 1; i < line.length; i++ )  {
return "The line is currently: " + i + ". " + line[]
  }
    return "The line is currently empty."
}

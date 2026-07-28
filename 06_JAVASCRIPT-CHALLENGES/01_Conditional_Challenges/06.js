

function trafficLightColor(color) {
    color =color.toLowerCase()
    if (color == "red") {
        return "Stop"   
    }else if(color == "Yellow"){
        return "Slow Down"
    }
    else if(color == "Green"){
        return "Go"
    }else{
        return "Invalid Color"
    }
}
console.log(trafficLightColor("Red")) 
console.log(trafficLightColor("RED"))
console.log(trafficLightColor("ReD"))
console.log(trafficLightColor("red"))






function trafficLightColor(color) {
    switch(color.toLowerCase()){
        case "red" : return 'Stop'
        case "Yellow" : return "Slow Down"
        case "Green" : return "Go"
        default :  return "Invalid Color"
    }
}
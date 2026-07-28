function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    // (32°F − 32) × 5/9
    switch(scale){
      case "C" : return (value*9)/5 +32 +"°F";
      case "F" : return (value-32)*5 +32 +"°C";
      default : return "Invalid"
    }
  }
  console.log(convertTemperature(5,"C"))
  console.log(convertTemperature(25,"F"))
  console.log(convertTemperature(15,"C"))
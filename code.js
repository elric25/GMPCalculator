function ProcessInfo(){
  var Difficulty = document.forms["orderForm"]["Difficulty"].value;
  var Advanced = document.forms["orderForm"]["Advanced"].checked;
  var Coached = document.forms["orderForm"]["Coach"].checked;
  var Overflow = document.forms["orderForm"]["Overflow"].value;
  var Scheduled = document.forms["orderForm"]["Schedule"].value;
  var Youtube = document.forms["orderForm"]["Youtube"].checked;
  var Craig = document.forms["orderForm"]["Craig"].checked;
  var Lore = document.forms["orderForm"]["Lore"].checked;

  var GMP = 0;

  switch(Difficulty){
    case "Easy":
    GMP =  GMP + 2;
    break;
    case "Standard":
    GMP = GMP + 15;
    break;
    case "Semi":
    GMP = GMP + 25;
    break;
    case "Prime":
    GMP = GMP + 30;
    break;
  }
  if(Advanced == true){
    GMP = GMP + 10;
  }
  if(Coached == true){
    GMP = GMP + 1;
  }
  if(Overflow == 2){
    GMP = GMP + 2;
  }else if (Overflow == 3) {
    GMP = GMP + 3;
  }
  if(Scheduled == 1){
    GMP = GMP + 1;
  }else if (Scheduled == 3) {
    GMP = GMP + 3;
  }
  if(Youtube == true){
    GMP = GMP + 1;
  }
  if(Craig == true){
    GMP = GMP + 1;
  }
  if(Lore == true){
    GMP = GMP + 4;
  }
alert("You will receive "+ GMP + " GMP at the end of this run.");
}

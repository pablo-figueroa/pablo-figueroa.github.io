
// var valueRateOut = 1.0

document.getElementById('demo').innerHTML = 12.682503 + " %";

function getValue()
{
  var rateIn = document.getElementById('selectRate_in');
  rateIn = rateIn.options[rateIn.selectedIndex].value;
  rateIn =rateIn*1;

 
  var capitIn = document.getElementById('selectCapit_In');
  capitIn = capitIn.options[capitIn.selectedIndex].value;
  capitIn = capitIn*1;

  
  var valueRateIn = document.getElementById('valueRate_in').value;
  valueRateIn = (valueRateIn*1)/100;


  var periodIn = document.getElementById('selectPeriod_in');
  periodIn = periodIn.options[periodIn.selectedIndex].value;
  periodIn = periodIn*1;


  var rateOut = document.getElementById('selectRate_out');
  rateOut = rateOut.options[rateOut.selectedIndex].value;

  
  var capitOut = document.getElementById('selectCapit_Out');
  capitOut = capitOut.options[capitOut.selectedIndex].value;
  capitOut = capitOut*1;


  var periodOut = document.getElementById('selectPeriod_out');
  periodOut = periodOut.options[periodOut.selectedIndex].value;
  periodOut = periodOut*1;
    

  if (rateIn==1 && rateOut==1) {
    valueRateOut = (((1 + valueRateIn)**(((360/periodIn)/(360/periodOut))))-1)*100;
    valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
  }

else if (rateIn==1 && rateOut==2) {
  
  valueRateOut = ((((1 + valueRateIn)**((360/periodIn)/(360/capitOut))))-1)*(periodOut/capitOut)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

  
else if (rateIn==1 && rateOut==3) {
  
  valueRateOut = (((1+valueRateIn)**((360/periodIn)/(-360/periodOut)))-1)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==1 && rateOut==4) {
  
  valueRateOut = (((1+valueRateIn)**((360/periodIn)/-(360/capitOut)))-1)*(periodOut/capitOut)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==2 && rateOut==1) {
  
  valueRateOut = (((1+(valueRateIn/(periodIn/capitIn)))**((360/capitIn)/(360/periodOut)))-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==2 && rateOut==2) {
  
  valueRateOut = (((1+(valueRateIn/(periodIn/capitIn)))**((360/capitIn)/(360/capitOut)))-1)*(periodOut/capitOut)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==2 && rateOut==3) {
  
  valueRateOut = (((1+(valueRateIn/(periodIn/capitIn)))**((360/capitIn)/(-360/periodOut)))-1)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==2 && rateOut==4) {
  
  valueRateOut = (((1+(valueRateIn/(periodIn/capitIn)))**((360/capitIn)/(-360/capitOut)))-1)*(periodOut/capitOut)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==3 && rateOut==1) {
  
  valueRateOut = (((1-valueRateIn)**((-360/periodIn)/(360/periodOut)))-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==3 && rateOut==2) {
  
  valueRateOut = (((1-valueRateIn)**(-(360/periodIn)/(360/capitOut)))-1)*(periodOut/capitOut)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==3 && rateOut==3) {
  
  valueRateOut = (((1-valueRateIn)**((-360/periodIn)/(-360/periodOut)))-1)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==3 && rateOut==4) {
  
  valueRateOut = (((1-valueRateIn)**(-(360/periodIn)/(-360/capitOut)))-1)*(periodOut/capitOut)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==4 && rateOut==1) {
  
  valueRateOut = (((1-(valueRateIn/(periodIn/capitIn)))**(-(360/capitIn)/(360/periodOut)))-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==4 && rateOut==2) {
  
  valueRateOut = (((1-(valueRateIn/(periodIn/capitIn)))**((-360/capitIn)/(360/capitOut)))-1)*(periodOut/capitOut)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==4 && rateOut==3) {
  
  valueRateOut = (((1-(valueRateIn/(periodIn/capitIn)))**((-360/capitIn)/(-360/periodOut)))-1)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}

else if (rateIn==4 && rateOut==4) {
  
  valueRateOut = (((1-(valueRateIn/(periodIn/capitIn)))**((-360/capitIn)/(-360/capitOut)))-1)*(periodOut/capitOut)*(-1)*100;
  
  valueRateOut = valueRateOut.toFixed(6);
    document.getElementById('demo').innerHTML = valueRateOut + " %";
}
  
  else{
    document.getElementById('demo').innerHTML = "";
  }

  
  if (rateIn == 2 || rateIn ==4) {
    document.getElementById("showIn").style.display = "block";
  }

  if (rateIn == 1 || rateIn ==3) {
    document.getElementById("showIn").style.display = "none";
  }
  
  
  if (rateOut == 2 || rateOut ==4) {
    document.getElementById("showOut").style.display = "block";
  }

  if (rateOut == 1 || rateOut ==3) {
    document.getElementById("showOut").style.display = "none";
  }


};

function showOut(){
  document.getElementById("showOut").style.display = "block";
}





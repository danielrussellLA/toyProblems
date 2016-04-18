function humanReadable(seconds) {
  var HH = 0;
  var MM = 0;
  var SS = 0;
  
  while(seconds > 0){
    SS++
    if(SS > 59 ){
     MM++;
     SS = 0;
    }
    if(MM > 59){
     HH++;
     MM = 0;
    }
    seconds--;
  }
  
  if(HH < 10){
    HH = '0' + HH;
  }
  if(MM < 10){
    MM = '0' + MM;
  }
  if(SS < 10){
   SS = '0' + SS;
  }
  
  return HH + ':' + MM + ':' + SS;
}

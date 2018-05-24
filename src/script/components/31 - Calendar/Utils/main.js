const Utils = {
  calculateNewDate: (year, month)=>{
    if ((month+1) > 12){
      month = month % 12;
      year++;
    }else if ((month+1) < 1){
      month = 11;
      year--;
    }
    return {year, month}
  }

};

export default Utils;

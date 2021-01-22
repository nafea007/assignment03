// kilometerToMeter
function kilometerToMeter(kilometer) {
    if(kilometer < 0){
        return 'error:Distance must be posotive';
    }
    else{
        meter=kilometer*1000;
        return meter;
    }
}


// budget Calculator
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}


// hotel Cost

function hotelCost(day) {
    if(day<=10){
        perDayCost=day*100;
        return perDayCost;
    }
    else if(day<=20){
        perDayCost=10*100;
        restDays=day-10;
        restDaysCost=restDays*80;
        totalCost=perDayCost + restDaysCost;
        return totalCost;
    }
    else{
        perDayCost=10*100;
        other10DaysCost=10*80;
        another10Dayscost=(day-20)*50;
        totalCostOfAllDays=perDayCost + other10DaysCost + another10Dayscost;
        return totalCostOfAllDays;
    }
    
}

// megaFriend

function megaFriend(arr) {
    var length = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > length) {
    var length = arr[i].length;
    longest = arr[i];
  }
}
return longest;
}


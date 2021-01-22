

// *********** kilometer To Meter *************

function kilometerToMeter(kilometer){
    if(kilometer<0 ){
        return "Please Enter Positive number" ;
    }
    else{
        return kilometer * 1000 ;
    }
}



// ************* budget Calculator ************
// watch-50,phone-100,laptop-500

function budgetCalculator(watch,phone,laptop){
    if (watch >= 0 && phone >= 0 && laptop >=0){
        return watch*50 + phone*100 +laptop*500 ;
    }
    else{
        return "Please Enter Positive Number" ;
    }
}



// ************ hotelCost***************
// 1-10=100,  11-20=80,  21<--=50

function hotelCost(days){
    if (days<0){
        return "Please Enter Positive Number ";
    }
    else if(days<=10){
        return days*100 ;
    }
    else if (days <= 20){
        return 1000 + (days-10)*80 ;
    }
    else{
        return 1000 + 10*80 + (days-20)*50 ;
    }
}



// ************** megaFriend ***************

function megaFriend(arr){
    if(arr.length == 0 || typeof arr != "object"){
        return "Please Input The Name List of Array";
    }
    else{
        var namee = arr[0];
        for(var i= 0;i<arr.length ;i++){
            if(arr[i].length > namee.length ){
                namee = arr[i];
            }
        }
        return namee ;
    }
}

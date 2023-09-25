function rent(initialRent) {
    var iRent = initialRent;
    return {
        getRent : function () {
            console.log(iRent);
        },
        incRent : function (incValue) {
            iRent = iRent + incValue;
        },
        decRent : function (decValue) {
            iRent = iRent - decValue;
        }
    }
}

var Rent = rent(8000);
Rent.getRent();
Rent.incRent(1000);
Rent.getRent();
Rent.decRent(5000);
Rent.getRent();
function order(){
    var invoice = document.forme;

    var pintel = 7000 * eval(invoice.pintel.value);
    var pdok = 5000 * eval(invoice.pdok.value);
    var nasiGoreng = 10000 * eval(invoice.nasiGoreng.value);
    var esTeh = 10000 * eval(invoice.esTeh.value);
    var esJeruk = 10000 * eval(invoice.esJeruk.value);

    var TotalPrice = 0;

    var TotalPrice = pintel + pdok + nasiGoreng + esTeh + esJeruk;
        if(TotalPrice>40000){
            invoice.Total.value = TotalPrice;
            invoice.Discount.value = 7000;
            invoice.Payment.value = TotalPrice - eval(invoice.Discount.value);
        }
        else{
            invoice.Total.value = TotalPrice;
            invoice.Discount.value = 0;
            invoice.Payment.value = TotalPrice - eval(invoice.Discount.value);
        }

    var PaymentReceived = parseInt(invoice.PaymentReceived.value);
    
    
    var Changee = PaymentReceived - TotalPrice -7000;
    if(isNaN(PaymentReceived)||isNaN(TotalPrice)){
        alert("Please Enter Received Payment");
    }
    else{
        invoice.Total.value = TotalPrice;
        invoice.Changee.value = PaymentReceived - TotalPrice ;
    }
}

function resetForm(){
    document.forme.reset();
}
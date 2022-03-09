
function adjustPlus(){
    var qtyValue = document.getElementById("quantityValue").value;

    qtyValue = parseInt(qtyValue) + 1;
    document.getElementById("quantityValue").value = qtyValue;
}

function adjustMinus(){
    var qtyValue = document.getElementById("quantityValue").value;

    if (parseInt(qtyValue) <= 0){
        swal("Sorry","You can't go below this order","error");
        document.getElementById("quantityValue").value = 0;
    }
    else{
        qtyValue = parseInt(qtyValue) - 1;
        document.getElementById("quantityValue").value = qtyValue;

    }

}
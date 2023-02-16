// This events execute for iphone section
const plusBtnIphone = document.getElementById("plus-btn-iphone");
plusBtnIphone.addEventListener("click", function(event){
    const newIphoneQuantity = increaseDecreaseInputField("iphone-quantity",true);
    const price = quantityPrice(newIphoneQuantity,true);
    const itemPrice = perItemPrice("iphone-price",price);
    const total = subTotal()
});

const minusBtnIphone = document.getElementById("minus-btn-iphone");
minusBtnIphone.addEventListener("click", function(event){
    const newIphoneQuantity = increaseDecreaseInputField("iphone-quantity",false);
    if(!isNaN(newIphoneQuantity)){
        const price = quantityPrice(newIphoneQuantity,true);
        const itemPrice = perItemPrice("iphone-price",price);
        subTotal()
    }
});

// This events execute for case section
const plusBtnCase = document.getElementById("plus-btn-case");
plusBtnCase.addEventListener("click", function(event){
    const newCaseQuantity = increaseDecreaseInputField("case-quantity",true);
    const price = quantityPrice(newCaseQuantity,false);
    const itemPrice = perItemPrice("case-price",price);
    subTotal()
});

const minusBtnCase = document.getElementById("minus-btn-case");
minusBtnCase.addEventListener("click", function(event){
    const newCaseQuantity = increaseDecreaseInputField("case-quantity",false);
    if(!isNaN(newCaseQuantity)){
        const price = quantityPrice(newCaseQuantity,false);
        const itemPrice = perItemPrice("case-price",price);
        subTotal()
    }
});




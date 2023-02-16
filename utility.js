function increaseDecreaseInputField(id,increase){
    const quantity = document.getElementById(id);
    const preQuantityNumber = parseInt(quantity.value);
    let newQuantityNumber;
    if(increase === true){
        newQuantityNumber = preQuantityNumber + 1;
    }
    else{
        newQuantityNumber = preQuantityNumber - 1;
    }
    if(newQuantityNumber >= 0){
        quantity.value = newQuantityNumber;
        return newQuantityNumber;
    }
}

function quantityPrice(newQuantityNumber,setPrice){
    let price;
    if(setPrice === true){
        price = newQuantityNumber * 1219;
    }
    else{
        price = newQuantityNumber * 59;
    }
    return price;
}

function perItemPrice(id,price){
    const itemPrice = document.getElementById(id);
    itemPrice.innerText = price;
}

function subTotal(){
    const iphoneTotal = document.getElementById("iphone-price");
    const iphoneTotalNumber = parseInt(iphoneTotal.innerText);
    const caseTotal = document.getElementById("case-price");
    const caseTotalNumber = parseInt(caseTotal.innerText)
    const subTotal = iphoneTotalNumber + caseTotalNumber;
    const perItemSubTotal = document.getElementById("sub-total");
    perItemSubTotal.innerText = subTotal;
    return totalTax(subTotal);
}

function totalTax(subTotal){
    const taxid = document.getElementById("tax");
    const preSubTotal = subTotal;
    const tax = parseFloat(preSubTotal * 0.1).toFixed(2);
    taxid.innerText = tax;
    totalPrice();
    
}

function totalPrice(){
    const againSubTotal = document.getElementById("sub-total").innerText;
    const againSubTotalNumber = parseFloat(againSubTotal)
    const againTax = parseFloat(document.getElementById("tax").innerText)
    const againTotalPrice = againSubTotalNumber + againTax
    document.getElementById("total").innerText = againTotalPrice;
}

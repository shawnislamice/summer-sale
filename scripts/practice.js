let productCount = 1;

let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("click", function () {
    const cardTitle = card.querySelector("h3").innerText;
    const p = document.createElement("p");
    p.innerText = `${productCount}. ${cardTitle}`;
    document.getElementById("title-container").appendChild(p);
    productCount++;
    const productPrice = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    totalPrice += productPrice;
    document.getElementById("totalPrice").innerText = totalPrice;
  });
}
document.getElementById("apply-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-field").value;

  const inputValue = inputText.split(" ").join("").toUpperCase();
  if(totalPrice>=200){
    if(inputValue==='SELL200'){
        const discountPrice=totalPrice*0.2
        
        document.getElementById("discountPrice").innerText=discountPrice.toFixed(2)
        document.getElementById("total").innerText=(totalPrice-discountPrice).toFixed(2)

    }else{
        alert("Invalid Coupon")
    }
  }else{
    alert("Please spend 200$ for get this coupon")
  }
});
document.getElementById("make-purchase").addEventListener('click',function(){
  alert(
    `Thank you for shopping with us.`
  )
})

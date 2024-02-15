let orderCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;
    console.log(title);
    const p = document.createElement("p");
    p.innerText = `${orderCount}. ${title}`;
    document.getElementById("title-container").appendChild(p);
    orderCount++;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    console.log(price);
    totalPrice += price;
    console.log(totalPrice);
    document.getElementById("totalPrice").innerText = " " + totalPrice;
  });
  document.getElementById("apply-btn").addEventListener("click", function () {
    const couponText = document.getElementById("input-field").value;

    let couponValue = couponText.split(" ").join("").toUpperCase();
    console.log(couponValue);
    if (totalPrice >= 200) {
      if (couponValue == "SELL200") {
        const discountPrice = document.getElementById("discountPrice");
        const discountValue = totalPrice * 0.2;
        discountPrice.innerText = discountValue.toFixed(2);

        const restTotal = document.getElementById("total");
        restTotal.innerText = (totalPrice - discountValue).toFixed(2);
        document.getElementById("input-field").value = "";
      } else {
        // alert("Invalid Coupon");
        document.getElementById("input-field").value = "";
      }
    } else {
      alert("Please Spend 200$ for apply this coupon");
      document.getElementById("input-field").value = "";
    }
  });
}

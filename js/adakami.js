function getTkb() {
  var e = new XMLHttpRequest;
  e.addEventListener("load", function() {
    var e = JSON.parse(this.responseText);
    0 === e.result ? document.getElementById("tkb").innerHTML = e.content.tkb : console.log(e.resultMessage)
  }), e.open("POST", endpoint + "/adaKredit/stats/tkb"), e.setRequestHeader("Content-Type", "application/json"), e.send()
}

function getBusinessData() {
  
  var e = new XMLHttpRequest;

  e.addEventListener("load", function()
  {
    var e = JSON.parse(this.responseText);
    if (0 === e.result)
    {
      var t = e.content;
      document.getElementById("disburseAmountTotal").innerHTML = numberFormat(transToMilyar(t.disburseAmountTotal)),
      document.getElementById("disburseAmountTotal").parentNode.style.visibility = "visible",
      document.getElementById("disburseAmountThisYear").innerHTML = numberFormat(transToMilyar(t.disburseAmountThisYear)),
      document.getElementById("disburseAmountThisYear").parentNode.style.visibility = "visible",
      document.getElementById("outstandingLoanPrincipalTotal").innerHTML = numberFormat(transToMilyar(t.outstandingLoanPrincipalTotal)),
      document.getElementById("outstandingLoanPrincipalTotal").parentNode.style.visibility = "visible",
      document.getElementById("borrowerCountTotal").innerHTML = numberFormat(t.borrowerCountTotal),
      document.getElementById("borrowerCountTotal").parentNode.style.visibility = "visible",
      document.getElementById("borrowerCountInDebt").innerHTML = numberFormat(t.borrowerCountInDebt),
      document.getElementById("borrowerCountInDebt").parentNode.style.visibility = "visible",
      document.getElementById("highestReceivedAmount").innerHTML = "Rp " + numberFormat(t.highestReceivedAmount),
      document.getElementById("highestFeeTotal").innerHTML = "Rp " + numberFormat(t.highestFeeTotal),
      document.getElementById("highestRepaymentAmount").innerHTML = "Rp " + numberFormat(t.highestRepaymentAmount),
      document.getElementById("highestDailyInterestRate").innerHTML = (100 * t.highestDailyInterestRate).toFixed(1) + "%",
      document.getElementById("lowestReceivedAmount").innerHTML = "Rp " + numberFormat(t.lowestReceivedAmount),
      document.getElementById("lowestFeeTotal").innerHTML = "Rp " + numberFormat(t.lowestFeeTotal),
      document.getElementById("lowestRepaymentAmount").innerHTML = "Rp " + numberFormat(t.lowestRepaymentAmount),
      document.getElementById("lowestDailyInterestRate").innerHTML = (100 * t.lowestDailyInterestRate).toFixed(1) + "%"


    }
    else
      console.log(e.resultMessage)
    }),
    e.open("POST", endpoint + "/adaKredit/stats/summary"), e.setRequestHeader("Content-Type", "application/json"), e.send()


}

/*e.addEventListener(event, function, useCapture)*/
/*e.open(method, url, async, user, psw)*/

function transToMilyar(e) {
  return e /= 1e9, e.toFixed(0)
}

function thousandBitSymbol(e) {
  return e ? e.toLocaleString().replace(/,/g, ".") : ""
}

function numberFormat(e) {
  if (0 == e) return "0";
  var t = Number(e).toString().split(".");
  return 1 === t.length ? thousandBitSymbol(Number(t[0])) : (1 === t[1].length && (t[1] = t[1] + "0"), Math.abs(e) < 1 ? t[0] + "," + t[1] : thousandBitSymbol(Number(t[0])) + "," + t[1])
}! function() {
  $(".mynav li").not(".faq-li").click(function(e) {
    if ($(this).data("href")) {
      var t = $(this).children("a").text().trim();
      gtag("event", "screen_view", {
        event_label: t
      }), $(".mynav li").removeClass("active"), $(this).addClass("active"), location.href = $(this).data("href")
    }
  }), $(".faq-hover .hover-link").click(function(e) {
    if ($(this).data("href")) {
      var t = $(this).text().trim();
      gtag("event", "screen_view", {
        event_label: t
      }), $(".mynav li").removeClass("active"), $(this).parents("li").addClass("active"), location.href = $(this).data("href")
    }
  }), $(".my-card .item").click(function(e) {
    console.log(1), $(".my-card .item").removeClass("active"), $(this).addClass("active")
  });
  new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    }
  })
}();

var endpoint = "https://api.adakami.id";

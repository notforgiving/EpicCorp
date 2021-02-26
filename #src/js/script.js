    /*Ползунок цен */
  jQuery(document).ready(function () {
   /*Стили к каталогу товаров */
    $(".upper").on("input", setFill);
    $(".lower").on("input", setFill);

    var max = $(".upper").attr("max");
    var min = $(".lower").attr("min");

    function setFill(evt) {
      var valUpper = $(".upper").val();
      var valLower = $(".lower").val();
      if (parseFloat(valLower) > parseFloat(valUpper)) {
        var trade = valLower;
        valLower = valUpper;
        valUpper = trade;
      }

      var width = (valUpper * 100) / max;
      var left = (valLower * 100) / max;
      $(".fill").css("left", "calc(" + left + "%)");
      $(".fill").css("width", width - left + "%");

      // Update info
      if (parseInt(valLower) == min) {
        $(".easy-basket-lower").val("0");
      } else {
        $(".easy-basket-lower").val(parseInt(valLower));
      }
      if (parseInt(valUpper) == max) {
        $(".easy-basket-upper").val("1000");
      } else {
        $(".easy-basket-upper").val(parseInt(valUpper));
      }
      $(".histogram-list li").removeClass("ui-histogram-active");
    }

    // изменяем диапазон цен вручную
    $(".easy-basket-filter-info p input").keyup(function () {
      var valUpper = $(".easy-basket-upper").val();
      var valLower = $(".easy-basket-lower").val();
      var width = (valUpper * 100) / max;
      var left = (valLower * 100) / max;
      if (valUpper > 5000) {
        var left = max;
      }
      if (valLower < 0) {
        var left = min;
      } else if (valLower > max) {
        var left = min;
      }
      $(".fill").css("left", "calc(" + left + "%)");
      $(".fill").css("width", width - left + "%");
      // меняем положение ползунков
      $(".lower").val(valLower);
      $(".upper").val(valUpper);
    });
    $(".easy-basket-filter-info .iLower input").blur(function () {
      var valLower = $(".lower").val();
      $(this).val(Math.floor(valLower));
    });
    $(".easy-basket-filter-info .iUpper input").blur(function () {
      var valUpper = $(".upper").val();
      $(this).val(Math.floor(valUpper));
    });
  });

const buyBtns = document.querySelectorAll('.card-item-btn__buy')
const alert = document.querySelector('.alert')
const closeAlert = document.querySelector('.alert__close')
buyBtns.forEach((item)=>{
  item.addEventListener('click',()=>{
    alert.classList.toggle('alertShow')
  })
})

closeAlert.addEventListener('click',()=>{
  alert.classList.toggle('alertShow')
})



  


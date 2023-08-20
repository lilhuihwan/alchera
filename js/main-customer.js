$(document).ready(function () {
  let leftVal = 0;
  let imgWidth = 220;

  function flowImg() {
    leftVal -= 1;
    if (leftVal < -imgWidth) {
      leftVal = 0;
      $(".customer_list1>li").first().appendTo(".customer_list1");
    }
    $(".customer_list1").css("left", leftVal);
  }
  auto2 = setInterval(flowImg, 10);

  let leftVal1 = 0;
  let imgWidth1 = 220;

  function flowImg1() {
    leftVal1 -= 1;
    if (leftVal1 < -imgWidth1) {
      leftVal1 = 0;
      $(".customer_list2>li").first().appendTo(".customer_list2");
    }
    $(".customer_list2").css("left", leftVal1);
  }
  auto3 = setInterval(flowImg1, 10);
});

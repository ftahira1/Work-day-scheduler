//Display today's date
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM, Do YYYY'));

$(function() {
  //Display current hour
  currentTime = dayjs().hour();
  console.log(currentTime);
//Assign color to time.
  $(".time-block").each(function(){ 
    var onTime = $(this). attr("id").split("-")[1];
    console.log(onTime);
    if (onTime < currentTime) {
      $(this).addClass("past");
    } else if (onTime == currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })

$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  console.log(time);
  var text = $(this).siblings(".description").val();
  console.log(text);
  

})
});




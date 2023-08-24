$(document).ready(function () {
  var today = dayjs();
  var date = today.date();
  var suffix = getSuffix(date);
  // this function saves the content to local storage

  $(document).on("click", ".saveBtn", function () {
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // this shows the text that appointment was added to local storage
    $("#saved-confirm").show();
    // saves time and input in local storage
    localStorage.setItem(time, input);


  });
  // This function checks for all id's that have "hour" and compares the value to
  // current time. If value matches criteria then the classes are changed
  function time() {
    var currentTime = dayjs().hour();
  
    $('.time-block').each(function () {
      var hour = $(this).attr("id").split("-")[1];
      var idEl = $(this).attr("id");
      console.log(hour);
      console.log(currentTime);
      if (hour < currentTime) {
        console.log("Setting past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (hour == currentTime) {
        console.log("Setting present");
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else { (hour  > currentTime) 
        console.log("Setting future");
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      
      }
      // retrieves stored text
      var storeItem = localStorage.getItem(idEl);
      // finds the class description and adds the value of stored item
      $(this).find(".description").text(storeItem);
    });
  }
  //displays the current time
  $("#currentDay").text(today.format("dddd, MMMM") + " " + date + suffix);
  //displays the dates suffix 
  function getSuffix(number) {
    switch(number % 10 ){
      case 1: return"st";
      case 2:return "nd";
      case 3: return"rd";
      default: return "th";
    }
  }

  time();
});

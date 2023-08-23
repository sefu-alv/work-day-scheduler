// The global variables
var today = dayjs();

// This function saves the user input into the local storage
$(document).ready(function () {
  $(document).on("click", ".saveBtn", function () {
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // saves time and input in local storage
    localStorage.setItem(time, input);
  });
  // This function checks for all id's that have "hour" and compares the value to
  // current time. If value matches criteria then the classes are changed
  $(document).ready(function () {
    var currentTime = dayjs().hour();
    $('[id^="hour-"]').each(function () {
      var idEl = $(this).attr("id");
      var idSplit = idEl.split("-");
      var hour = idSplit[1];
      if (hour === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (hour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (hour > currentTime) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
      // retrieves stored text
      var storeItem = localStorage.getItem(idEl);
      // finds the class description and adds the value of stored item
      $(this).find(".description").val(storeItem);
    });
  });
  //displays the current time
  $("#currentDay").text(today.format("dddd, MMMM DD "));
});

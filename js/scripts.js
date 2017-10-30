function Task (task, time) {
  this.task = task;
  this.time = time;
}

$(document).ready(function() {
  $("#addTask").submit(function(event) {
    event.preventDefault();
    var taskInput = $("#newTask").val();
    var taskTime = $("#taskTime").val();

    $("#newTask").val("");
    $("#taskTime").val("");

    var newTask = new Task(taskInput, taskTime);

    $("#myTasks").append("<span class='remove'><li>" + taskInput + "</li></span>");
    $("#time").append("<span class='remove'><li>" + taskTime + "</li></span>");
    $("#complete").append("<span class='done'><li>Click to remove</li></span>");

    $(".done").click(function() {
      $("#myTasks").show();
      // $(".remove").empty();
      // $("#complete").append("It works");
      // $("#myTasks").append("DONE!");
    });
  })

  // $(".done").click(function() {
  //   $("#myTasks").show();
  //   // $(".remove").empty();
  //   // $("#complete").append("It works");
  //   // $("#myTasks").append("DONE!");
  // });
})

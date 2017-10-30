function Task (task, ) {
  this.task = task
}

$(document).ready(function() {
  $("#addTask").submit(function(event) {
    event.preventDefault();
    var taskInput = $("#newTask").val();

    var newTask = new Task(taskInput);

    $("#myTasks").append("<span class='remove'><li>" + taskInput + "</li></span>")
    $("#complete").append("<span class='done'><li>Still pending...</li></span>");
  })

  $("#complete .done").click(function() {
    $(".done").remove();
    $("#complete").append("It works");
  })

})

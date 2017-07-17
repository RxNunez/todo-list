//business logic
function toDo(task, status) {
  this.taskDescription = task;
  this.statusDescription = status;
}
toDo.prototype.detail = function() {
  return this.taskDescription + "-" + this.statusDescription;
}

//user interface logic
$(document).ready(function() {
  $("form#task").submit(function(event) {
    event.preventDefault();

    var inputtedtaskDescription =
    $("input#newTask").val();
    var inputtedstatusDescription =
    $("input#newStatus").val();

    var newtoDo = new toDo(inputtedtaskDescription, inputtedstatusDescription);

    $("ul#taskList").append("<li><input type = 'checkbox' /> "  +  " <span class='toDo'>" + newtoDo.detail() + "</span></li>");
      $("input#newTask").val("");
      $("input#newStatus").val("");

      });
      $('#remove').click(function(event) {
    event.preventDefault();
    $('input:checkbox[name=addList]:checked').parent().remove();
  });
  });

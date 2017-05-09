//back-end logic
function Task(task,location,date,time){
  this.taskName=task;
  this.taskDate=date;
  this.taskTime=time;
  this.taskLocation=location;
};
//user interface
$(document).ready(function(){
  $("form#todolist").submit(function(event){
    event.preventDefault();
    var inputtedTask=$("textarea#new-task").val();
      var inputtedLocation=$("input#new-location").val();
        var inputtedDate=$("input#new-date").val();
          var inputtedTime=$("input#new-time").val();
    var newTask=new Task(inputtedTask,inputtedLocation,inputtedDate,inputtedTime);
    //show places
    $("ul#task").append("<li><span class='task'>" + newTask.taskName + "</span></p>");
    $(".task").click(function(){
      $("#show-details").show();
      $(".task").text(newTask.taskName);
      $(".location").text(newTask.taskLocation);
      $(".date").text(newTask.taskDate);
      $(".time").text(newTask.taskTime);
    });
    $("textarea#new-task").val();
    $("input#new-location").val();
      $("input#new-date").val();
        $("input#new-time").val();
  });
});

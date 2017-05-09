//back-end logic
function Task(date,time,location,notes){
  this.taskDate=date;
  this.taskTime=time;
  this.taskLoaction=location;
  this.taskNotes=notes;
};
//user interface
$(document).ready(function(){
  $("form#todolist").submit(function(){
    var inputtedTask=$("textarea#new-task").val();
      var inputtedLocation=$("input#new-location").val();
        var inputtedDate=$("input#new-date").val();
          var inputtedTime=$("input#new-time").val();
            var inputtedNotes=$("textarea#new-notes").val();
  });
});

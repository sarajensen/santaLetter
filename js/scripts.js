$("#name-input").click(function(event){
  $(this).val("");
    event.preventDefault();
});

$("#name-input").keyup(function(event){
  if(event.keyCode === 13){
    $("#name").text($(this).val());
    $("#letter").show();
    event.preventDefault();
  }
});

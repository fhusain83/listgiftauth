$("#add-item").on("click", function(event){
  event.preventDefault();
  console.log("here");
  var groupList = $("#group-list").val().trim();
  
  console.log("This is the g"+groupList);

  var data = {
    "groupList": groupList
  };
  
    $.post({
      type: "POST",
      url: '/mygroups',
      data: data
    
    }).then(function(event){
      location.reload();
    });
    
});

$("#add-list-item").on("click", function(event){
  event.preventDefault();
  var item = $("#list-item").val().trim();
  
  console.log(item);

  var data = {
    "item": item
  };
    
    $.post({
      type: "POST",
      url: '/groups',
      data: data
    
    }).then(function(event){
      location.reload();
    });
    
});
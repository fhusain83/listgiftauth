$("#add-item").on("click", function(event){
  event.preventDefault();
  var groupList = $("#group-list").val().trim();
  
  console.log(groupList);

  var data = {
    groupList: groupList
  }
    
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
  
  alert(console.log);

  var data = {
    item: item
  }
    
    $.post({
      type: "POST",
      url: '/groups',
      data: data
    
    }).then(function(event){
      location.reload();
    });
    
});
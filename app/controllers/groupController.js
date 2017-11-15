  Model = require('../model/models.js')

module.exports.getallmygroups=function(req,res)
{

   Model.List.findAll({}).then(function(results){
      res.render('list-man', {list: results});
    });
}


module.exports.getallgroups=function(req,res)
{
   Model.Event.findAll({}).then(function(results){
      res.render('list-join', {groups: results});
    });
}

module.exports.posttomygroups=function(req,res)
{

var newEvent={
  event_name:req.body.groupList,
  user_id:1
};
   Model.Event.create(newEvent).then(function(results) {
   res.render("list-man", {list: results})
  });
    
}


module.exports.posttoallgroups=function(req,res)
{
 Model.List.create({item_name : req.body.item}).then(function(results){
      res.render('list-join', {groups: results});
       });
}
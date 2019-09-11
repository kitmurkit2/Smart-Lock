$( document ).ready(function() {

$.ajax({
method: "GET",
url: "https://dry-wildwood-48050.herokuapp.com/std/logs",
}) 
.done(function(resp) {
console.log(resp);
resp.forEach(function(user) {
  var ou=$("#data");
  ou.append("<tr>"+"<td>"+user.Id+"</td>"+"<td>"+user.UserId+"</td>"+"<td>"+user.CreatedAt+"</td>"+"<td>"+user.EventType+"</td>"+"</tr>");
  });
})
.fail(function(resp) {
console.log(resp);
});
});






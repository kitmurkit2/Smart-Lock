$( document ).ready(function() {

$.ajax({
method: "GET",
url: "https://dry-wildwood-48050.herokuapp.com/std/user",
}) 
.done(function(resp) {
console.log(resp);
resp.forEach(function(user) {
  var ou=$("#data");
	var stat;
	if(user.status == 1){
		stat = "Active";
		var status = stat.fontcolor("green");
	}
	else{
		stat = "Blocked";
		var status = stat.fontcolor("red");
		}
  ou.append("<tr>"+"<td>"+user.id+"</td>"+"<td>"+user.card_key+"</td>"+"<td>"+user.first_name+"</td>"+"<td>"+user.last_name+"</td>"+"<td>"+status+"</td>"+"<td>"+user.last_checked_in+"</td>"+"</tr>")
});
})
.fail(function(resp) {
console.log(resp);
});
});

function add (a,b,c,d) { 
	var A = document.getElementById(a).value;
	var B = document.getElementById(b).value;
	var C = document.getElementById(c).value;
	var D = document.getElementById(d).value; 
	$.ajax({
    method: "POST",
    url: "https://dry-wildwood-48050.herokuapp.com/std/user",
    dataType:"json",
    data: JSON.stringify({
  id : parseInt(C),
        card_key : parseInt(D),
  first_name :A,
  last_name : B,
  status : "1",
  last_checked_in : "0001-01-01T00:00:00Z"}),
  success: function(data) 
  { alert('User was added') ; location.reload(); },
  error: function(data) { alert('Error') ; }
}) ;
};
function del (e) {
 var E = document.getElementById(e).value;
 $.ajax({
  method: "DELETE",
  url: "https://dry-wildwood-48050.herokuapp.com/std/user/delete/"+E,
  success: function(result) { alert('User was deleted') ;  location.reload(); },
  error: function(result) { alert('DELETE error') ;  }
 });
};
function update (a,b,c,d) { 
	var A = document.getElementById(a).value;
	var B = document.getElementById(b).value;
	var C = document.getElementById(c).value;
	var D = document.getElementById(d).value;
	$.ajax({
  url: "https://dry-wildwood-48050.herokuapp.com/std/user/update/"+A,
  method: "PUT",
  dataType:"json",
 data: JSON.stringify({
 card_key : parseInt(D),
  first_name : B,
  last_name : C,
  status : "1",
  last_checked_in : "0001-01-01T00:00:00Z"
 }),	
  success: function(data) { alert('User was updated') ; location.reload();},
    error: function(data) { alert('Error') ; }
});

};
function block (a) {
 var A = document.getElementById(a).value;
$.ajax({
  method: "PUT",
  url: "https://dry-wildwood-48050.herokuapp.com/std/user/blocked/"+A,
  success: function(result) { alert('User was blocked') ;  location.reload(); },
  error: function(result) { alert('Blocked error') ;  }
 });
};

function unblock (a) {
 var A = document.getElementById(a).value;
$.ajax({
  method: "PUT",
  url: "https://dry-wildwood-48050.herokuapp.com/std/user/unblocked/"+A,
  success: function(result) { alert('User was unblocked') ;  location.reload(); },
  error: function(result) { alert('unblocked error') ;  }
 });
};




var form = $('form');
var email = $('#email');
var emailErr = $('#emailErr');
var website = $('#website');
var message = $('#message');
var nameErr = $('#nameErr');
var userName = $('#userName');
var webErr = $('#webErr');
var msgErr = $('#msgErr');

var error = function () {
	$('p').css('color', 'red');
	if (userName.val() === '') {
		nameErr.html("Name cannot be left empty");
	} else {
		nameErr.html("");
	}
	if (email.val() === '') {
		emailErr.html("Email cannot be left empty");
	} else if (email.val().includes('@')===false){
		emailErr.html("Email must contain an '@'.");
	} else {
		emailErr.html('');
	}
	if (website.val() === '') {
		webErr.html("Website cannot be left empty");
	} else if (website.val().startsWith('http://')===false){
		webErr.html("Website must start with 'http://'.");
	} else {
		webErr.html('');
	}
	if (message.val() === '') {
		msgErr.html("Name cannot be left empty");
	} else {
		msgErr.html("");
	}

};


form.on('submit', function(e){
	e.preventDefault();
	error();
});

$('button').mouseover(function() {
	$(this).toggleClass('clicked');
});

$('button').mouseout(function() {
	$(this).toggleClass('clicked');
});


var url='http://localhost:8080';
var socket = io.connect(url);

$(document).ready(function() {
	function form_acceptable() {
		if ($('#password').val() != $('#confirm_password').val()) {
			console.log("Passwords don't match!");
			$('#confirm_password').val();
			$('#confirm_password').placeholder("Password must match!");
			return false;
		}
		return true;
	}

	
	$('#create_form').submit(function(event) {
		if ($('#password').val() != $('#confirm_password').val()) {
			event.preventDefault();
			console.log("Passwords don't match!");
			$('#confirm_password').val("");
			$('#confirm_password').attr("placeholder", "Password must match!");
		}
		else {
			var account_info = {
				'fname':$('#fname').val(),
				'lname':$('#lname').val(),
				'password':$('#password').val(),
				'email':$('#email').val(),
				'phone_number':$('#phone_num').val(),
				'school':$('#school').val(),
				'statement':$('#statement').val(),
				'type':'teacher'
			};
			socket.emit('create_account_teacher', account_info);
		}
	});
});
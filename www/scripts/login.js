var url = "http://localhost:8080";
var socket = io.connect(url);

$(document).ready(function() {
	var account_type_visible = false;
	$('#account_type').hide();
	$('#create_account_button').click(function(event) {
		if (!account_type_visible) {
			$('#account_type').show();
			account_type_visible = true;
		}
		else {
			$('#account_type').hide();
			account_type_visible = false;
		}
	});
	$('#teacher').click(function(event) {
		window.location.href = './create_account_teacher.html';
	});
});
// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});

$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){
		console.log($(this).text())
	});
});
var key = "";
$(document).ready(function(){
    $("div.key").click(function(){
        key += $(this).text()
        $("#tcontainer").text(key);
    });
});

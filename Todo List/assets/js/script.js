$(document).on ("click","span", function(){
	$(this).parent().remove();
});

$(document).on ("click","li", function(){
	$(this).toggleClass("done");
});

$("input").keypress(function(event){
	if(event.which === 13) {
		$("ul").append('<li><span><i class="fa fa-trash-o"></i></span>'+$(this).val()+'</li>');
		$(this).val("").attr("placeholder", "Add New Todo");
	}
});
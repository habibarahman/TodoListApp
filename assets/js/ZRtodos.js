//check off specific todos by clicking
$("ul").on("click", "li", function(){ //when an li is click the run this code each time
	// console.log($(this).css("color"));
	// //if li is red
	// if ($(this).css("color")=== "rgb(255, 0, 0)"){
	// 	console.log("it is currently red");
	// 	//turn it black
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"	});
	// }else{
	// 	$(this).css({
	// 	color: "red",
	// 	textDecoration: "line-through"	
	// }); //this indicates the click li only not all
	// }
	$(this).toggleClass("completed");
});

//click on X to delete 
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});//parent refers to li 
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear out the todo after it has been entered 
		$(this).val("");
		//create a new li add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+todoText+"</li>")

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

});
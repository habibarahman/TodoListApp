 //simple way to wright a code it works same...
  $("ul").on("click", "li", function(){
     $(this).toggleClass("completed");
   });
// // check off specific todos by clicking
// $("li").click(function(){
// 	//if li is red
// 	if ($(this).css("color") === "rgb(255, 0, 0)"){
// 		//turn it blsck
// 		$(this) .css({
//            color:"black",
//            textDecoration: "none"
//         });
// 	}
// 	//else
//     else{
//  	    $(this) .css({
//            color:"red",
//            textDecoration: "line-through"
//      });
//     } 
// });


//click on x to delete todo
  // $("span").click(function(){
  // 	$(this).parent().remove("li");
  // });

$("ul").on("click", "span", function(event){
 $(this).parent().fadeOut( 500, function(){
 	$(this).remove();
 });
    //stops babling  
    event.stopPropagation();
});

$("input[type= 'text']").keypress(function(event){
if (event.which === 13) {
	//grabbing new todo text from input
	var todoText = $(this).val();
	$(this).val("");

	//creat a new li and to ul
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
}
});

$(".fa-plus").click(function(){
     $("input[type= 'text']").fadeToggle();
});

























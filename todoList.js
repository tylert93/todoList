document.addEventListener("DOMContentLoaded", () => {
    //allow user to check and uncheck list items
    $("ul").on("click","li", function(){
        $(this).toggleClass("completed");
        $(this).children().last().toggleClass("invisible");
    })

    //allow user to remove list items
    $("ul").on("click","span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        })
        event.stopPropagation();
    })

    //allow user to add new list items
    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
            //get text from input and clear field
            var todo = $(this).val();
            $(this).val("");
            //create new list item using this text
            $("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span> " + todo + " <span class='tick invisible'><i class='fas fa-check'></i></span></li>");
        }
    })
    //allow user to toggle the list item input field
    $(".input-toggle").on("click", function(){
        $("input[type='text']").fadeToggle();
    })
})
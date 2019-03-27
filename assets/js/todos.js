//Check off to-dos by clicking
$('ul').on("click", "li", function () {
    $(this).toggleClass("completed");
});

//deletes to-dos if the "X" is clicked
$('ul').on("click", "span", function (e) {
    $(this).parent().fadeOut("400", function () {
        $(this).remove();
    });
    e.stopPropagation();
});

//adds new to-do item to list
$("input[type='text']").on("keypress", function (e) {
    if (e.which === 13) {
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + $(this).val() + '</li>');
        $(this).val("");
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});
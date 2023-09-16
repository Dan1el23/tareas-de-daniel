$(".suma").click(function() {
    let var1 = parseInt($(".valor1").
    val());
    let var2 =parseInt($(".valor2").
    val());

    $(".resultado").html(var1+var2)
});

$(".resta").click(function() {
    let var1 = parseInt($(".valor1").
    val());
    let var2 =parseInt($(".valor2").
    val());

    $(".resultado").html(var1-var2)
});
$(".multiplicacion").click(function() {
    let var1 = parseInt($(".valor1").
    val());
    let var2 =parseInt($(".valor2").
    val());

    $(".resultado").html(var1*var2)
});
$(".division").click(function() {
    let var1 = parseInt($(".valor1").
    val());
    let var2 =parseInt($(".valor2").
    val());

    $(".resultado").html(var1/var2)
});


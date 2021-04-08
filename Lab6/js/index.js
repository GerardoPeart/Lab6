$(".agregar").on("click",function(event){
    event.preventDefault();
    elemento = document.getElementById("newText").value;
    var contenido = 
    `<li>
    <div class = "elemento">
    <p>${elemento}</p>
    <button class="check" type="submit"> check </button>
    <button class="delete" type="submit"> delete </button>
    </div>
    </li>
     `;
    $(".Lista").append(contenido); 

    
});

$(document).on('click','.check', function(){
    
    $(this).parent().toggleClass( "chec" );

    console.log("hola");

});

$(document).on('click','.delete', function(){
    
    $(this).parent().remove();

});
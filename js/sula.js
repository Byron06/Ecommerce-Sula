//MODAL INICIAR SESION

document.getElementById('button_inicio_sesion').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementById('button_inicio_sesion_movil').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function(){
document.querySelector('.bg-modal').style.display = 'none';
});

//MODAL REGISTRARSE
document.getElementById('button_register').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('.bg-modal-register').style.display = 'flex';
});

document.querySelector('.close-register').addEventListener('click',
function(){
document.querySelector('.bg-modal-register').style.display = 'none';
});

//MODAL INICIAR HOME
document.getElementById('button_inicio_sesion_home').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementById('button_inicio_sesion_movil').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function(){
document.querySelector('.bg-modal').style.display = 'none';
});

   // MARCADOR DE LIKES
   var i=1;
   function cambiaImagen(id_photo) 
   {       
       if(i==1){
        document.getElementById(id_photo).src = "images/sula/like_blanco.png";
        i=2;
       }else{
        document.getElementById(id_photo).src = "images/sula/like.png";
        i=1;
       }                
    
   }
   
   //CATEGORIA Y BUSCAR FIJO
   

console.log('$$$$$$$$$$$$$$$##$$$$$$$$$$$$$$$$$');

   var windowHeight = $(window).height();
   var sliderAltura = $('leftbar').innerHeight();

   $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>windowHeight){
             $('.leftbar').addClass('sidenav');
        }else{
            $('.leftbar').removeClass('sidenav');
        }
   });


   //################ INFO CARRITO

   function mostrarInfo () {
    document.querySelector('.info_carrito').style.display = 'flex';
   }
   
   function ocultarInfo () {
    document.querySelector('.info_carrito').style.display = 'none';
   }


   var control = 1;
   function btn_info_dropdown () {
       if(control==1){
        document.querySelector('.dropdown-content_sula').style.display = 'block';
        control=2;
       }else{
        document.querySelector('.dropdown-content_sula').style.display = 'none';
        control=1;
       }
    
   }


   document.getElementsByClassName('.block2-btn-addcart').addEventListener('click',
   function () {
    var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
    $(this).on('click', function () {
        swal(nameProduct, "! Se agrego a tu carrito !", "success");
    });
});
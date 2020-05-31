$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(function(){
    $('.carousel').carousel({
        interval:2000
    })
})

// solo le puse eventos a los modal de los tres primeros Hoteles
$('#reservaHotel').on('show.bs.modal', function(e){
    console.log('el modal con el formulario de reservacion se va a mostar')
    $('#botonReserva').removeClass('btn btn-primary')
    $('#botonReserva').addClass('btn btn-success')
    $('#botonReserva').prop('disabled',true)
})

$('#reservaHotel').on('shown.bs.modal', function(e){
    console.log('el modal con el formulario se esta mostando')
})

$('#reservaHotel').on('hide.bs.modal', function(e){
    console.log('el modal con el formulario se va a cerrar')
})

$('#reservaHotel').on('hidden.bs.modal', function(e){
    console.log('el modal con el formulario se cerro')
    $('#botonReserva').removeClass('btn btn-success')
    $('#botonReserva').addClass('btn btn-primary')
    $('#botonReserva').prop('disabled',false)
})

$('#reservaHotel2').on('show.bs.modal', function(e){
    console.log('el modal con el formulario de reservacion se va a mostar 2')
    $('#botonReserva2').removeClass('btn btn-primary')
    $('#botonReserva2').addClass('btn btn-success')
    $('#botonReserva2').prop('disabled',true)
})

$('#reservaHotel2').on('shown.bs.modal', function(e){
    console.log('el modal con el formulario se esta mostando 2')
})

$('#reservaHotel2').on('hide.bs.modal', function(e){
    console.log('el modal con el formulario se va a cerrar 2')
})

$('#reservaHotel2').on('hidden.bs.modal', function(e){
    console.log('el modal con el formulario se cerro 2')
    $('#botonReserva2').removeClass('btn btn-success')
    $('#botonReserva2').addClass('btn btn-primary')
    $('#botonReserva2').prop('disabled',false)
})

$('#reservaHotel3').on('show.bs.modal', function(e){
    console.log('el modal con el formulario de reservacion se va a mostar 2')
    $('#botonReserva3').removeClass('btn btn-primary')
    $('#botonReserva3').addClass('btn btn-success')
    $('#botonReserva3').prop('disabled',true)
})

$('#reservaHotel3').on('shown.bs.modal', function(e){
    console.log('el modal con el formulario se esta mostando 2')
})

$('#reservaHotel3').on('hide.bs.modal', function(e){
    console.log('el modal con el formulario se va a cerrar 2')
})

$('#reservaHotel3').on('hidden.bs.modal', function(e){
    console.log('el modal con el formulario se cerro 2')
    $('#botonReserva3').removeClass('btn btn-success')
    $('#botonReserva3').addClass('btn btn-primary')
    $('#botonReserva3').prop('disabled',false)
})
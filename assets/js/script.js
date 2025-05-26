$(document).ready(function () {
    //genero instancia del toast de bootstrap para después
    const toast = new bootstrap.Toast($('#liveToast')[0]);
    //activar popover
    $('[data-bs-toggle="popover"]').popover();

    let selectedColor = '#000000';

    //funcion para actualizar el contenido de la columna derecha
    function updateDisplay() {
        //obtener valores seleccionados de sabores o - si está vacío
        const sabor = $('#sabor').val() || '-';
        //obtener valores seleccionados de bolitas o - si está vacío
        const bolitas = $('#bolitas').val() || '-';
        //obtener valores seleccionados del checkbox
        //se pasan a array de valores, se unen con la coma
        const toppings = $('.topping:checked').map(function () { return this.value; }).get().join(', ') || '-';
        //recopila el valor del color seleccionado
        const color = selectedColor;

        //valores correspondientes a :
        $('#showSabor').text(sabor);
        $('#showBolitas').text(bolitas);
        $('#showToppings').text(toppings);
        $('#showColor').text(color);
        //cambiamos el color de fondo del cuadro al color elegido
        $('#colorBox').css('background-color', color);

        //dudo que olvide esto?
        toast.show();
    }
    //muestra click en botones de color
    $('#colorSelector .color-btn').on('click', function () {
        selectedColor = $(this).data('color');
        updateDisplay();
    });
    //ejecuta updateDisplay al cambiar los valores seleccionados
    $('#sabor, #bolitas, .topping, #colorFav').on('change', updateDisplay);
});
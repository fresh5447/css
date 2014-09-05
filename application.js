$(function(){

    var counter = 0;

   // $('table tbody tr:first').hide();

    $('#add-row').on('click', function(){

        counter += 1;
        $("table tbody").append($("table tbody tr:first").clone().show()[0].outerHTML.replace(/\{\{counter\}\}/g, counter));
        return false;

    })


});




// hide row one on clone... then show
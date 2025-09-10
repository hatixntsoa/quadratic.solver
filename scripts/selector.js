$(document).ready(function(){
    $('.equation_input').keypress(function(e){
        if(e.which == 13){
            e.preventDefault();
            let inputs = $(".equation_input");
            let next_input = inputs.get(inputs.index(this) + 1);
            if(next_input){
                next_input.focus();
            }else{
                solve(); 
            }
        }
    });

    // $('#a, #b, #c').on('keydown', function(event) {
    //     if (event.which == 13) { // Check if Enter key is pressed
    //       if ($('#a').val() !== '' && $('#b').val() !== '' && $('#c').val() !== '') {
    //         solve();
    //       }
    //     }
    // });

    $('body').keypress(function(e){
        if(e.which == 82){
            document.forms.data.reset();
        }
    });

    $("#a").focus();
});

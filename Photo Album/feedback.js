$(document).ready(function(){
    //     function validateUsername(){
    //         let usernameValue=$('#username').value;
    //         if(usernameValue!='Hnery'){
    //             console.log('invalid username!');
    //         }
    // }

    //validate username
    $('button').click(function(){
            let usernameValue=$('#username').val();

            if(usernameValue!=='Henry'){
                console.log('Invalid Username!');
                $('#usernameHelpInline').html('Invalid Username!');
                $('#usernameHelpInline').css('color','red');
            }else{
                $('#usernameHelpInline').html('Valid Username!');
                $('#usernameHelpInline').css('color','green');
            }
    });

    $('body').css({
        'text-align':'center',
        'background-color':'lightblue'
    });

    $('.title').css({
        'text-align':'center',
        'background-color':'lightblue',
        'color':'black',
    });

})
$(document).ready(function(){
    $('#orderButton').click(function(){

        let name=$('input[name=username] ').val();
        // let name=$('input[id=name]').val();
        let coffeeType=$('input[name=coffeetype]:checked').val();
        
        let extras=[];
        $('input[name=extras]:checked').each(function(){
            extras.push($(this).val());
        })
        console.log(name);
        console.log(coffeeType);
        console.log(extras);

        //add coffee type cost
        let total=0;
        if(coffeeType=='Turkish'){
            total+=3;
        }else if(coffeeType=='American'){
            total+=5
        }else{
            total+=7;
        }

        //Add the extra cost
        for(let i=0;i<extras.length;i++){
            let extra = extras[i];
            if(extra=="extra_coffee"){
                total+=1.5;
            }else if(extra=="extra_cream"){
                total+=2;
            }else{
                total+=3;
            }
        }

        //print report
        let output=`Name: ${name} <br>`;
        output+=`Total: $ ${total.toFixed(2)}`;
        $('#result').html(output);
        });

});
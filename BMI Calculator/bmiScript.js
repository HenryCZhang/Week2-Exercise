$(document).ready(function(){
    $('#calculateBtn').click(function(){
        let weight=$('input[name=weight]').val();
        let height=$('input[name=height]').val();
        let BMI= weight/(height*height);
        console.log('weight'+weight);
        console.log('height'+height);
        console.log(BMI);

        if(BMI==0){
            $('p').html('Unprecedented');
            $('img').attr('src','img/unprecedented.png')
        }else if(BMI<=18.5){
            $('p').html('Under Weight');
            $('img').attr('src','img/underweight.png')
        }else if(BMI<=24.9){
            $('p').html('Normal Weight')
            $('img').attr('src','img/normalweight.png')
        }else if(BMI<=29.9){
            $('p').html('Overweight');
            $('img').attr('src','img/overweight.png')
        }else if(BMI>=30){
            $('p').html('Obese');
            $('img').attr('src','img/obesity.png')
        }
    })

    $('img').css({
        'width':'100%',
        'height': 'auto',
        'margin':'10px'
    })
})
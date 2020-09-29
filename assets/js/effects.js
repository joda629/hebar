$(document).ready(function(){
    
    $(".list .list-link").each(function(index, _)
    {
        $(this).css({
            'top' : '-300px'
        })

        $(this).animate({
            "top" : 0
        }, 2000 + (index * 500))
    })

    $(".title").css("left", "-200px")

    $(".title").animate({
        "left" : 0
    }, 3500)

    $(".nav").css("opacity", "0")

    $(".nav").animate({
        "opacity" : 1
    }, 1500)


//  $('.menu a').each(function(index,elemento){
//         $(this).css({
//             'top' : '-200px',
//         });

//         $(this).animate({
//             top:'0'
//         }, 2000 + (index * 500));

//     });



})
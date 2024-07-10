/// <reference types="../js/@types/jquery" />

/*$('#mySec').animate({ width: '100%' }, 1000)
    .animate({ height: '100vh' }, 1000, function () {
        $('h1').fadeIn(1000, function () {
            $('h1').fadeIn(1000, function () {
                $('col-md-4').slideDown(1000, function () {
                    $('h4').fadeIn(1000)
                })
            })
        })
    }) */




$('.closeBtn').on('click', function () {
    let navWidth = $('.nav').width()
    $('.navBar').animate({ left: -navWidth })
})


$('.openNav').on('click', function () {
    let navWidth = $('.nav').width()
    $('.navBar').animate({ left: 0 })
})


$('.bgP').hide()

$('.singer').on('click', function () {
    $(this).next().slideToggle(500)

})


$('.nav a[href^="#"]').on('click', function () {
    $('a').removeClass('active')
    $(this).addClass('active')
    let aHref = $(this).attr('href')
    let sectionOffset = $(aHref).offset().top
    $('html, body').animate({ scrollTop: sectionOffset }, 1000)
})
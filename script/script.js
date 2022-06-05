$(function () {
    $('.menu-open').click(function () {
        $('.logo a').toggleClass('show-logo')
        $('.nav').toggleClass('show-nav')
        $('.header').toggleClass('show-menu')
        $('body').toggleClass('fixed')
    })
})
txt1.onclick = function () {
    txt1.style.backgroundColor = '#222222'
    txt1.style.color = '#8DFD1B'
    txt2.style.backgroundColor = '#000'
    txt2.style.color = '#ffffff'
    txt3.style.backgroundColor = '#000'
    txt3.style.color = '#ffffff'
}
txt2.onclick = function () {
    txt2.style.backgroundColor = '#222222'
    txt2.style.color = '#8DFD1B'
    txt1.style.backgroundColor = '#000'
    txt1.style.color = '#ffffff'
    txt3.style.backgroundColor = '#000'
    txt3.style.color = '#ffffff'
}
txt3.onclick = function () {
    txt3.style.backgroundColor = '#222222'
    txt3.style.color = '#8DFD1B'
    txt2.style.backgroundColor = '#000'
    txt2.style.color = '#ffffff'
    txt1.style.backgroundColor = '#000'
    txt1.style.color = '#ffffff'
}
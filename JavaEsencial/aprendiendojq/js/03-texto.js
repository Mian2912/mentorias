$(document).ready(function(){
    $('a').each(function(index){
        var that = $(this)
        var enlace = that.attr('href');
        that.text(enlace)
    })
})
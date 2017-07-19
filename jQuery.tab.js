;(function($){      
    $.fn.extend({
        tab:function(option){
            var dafaults = {
                'father':this,
                'cur':null
            }
            var option = $.extend({},dafaults,option)
            var divs = $(option.father).children();
            divs.eq(0).children().click(function(){
                $(this).addClass(option.cur).siblings().removeClass(option.cur);
                divs.eq(1).children().eq($(this).index()).show().siblings().hide();
            })
        }
    })
})(jQuery)
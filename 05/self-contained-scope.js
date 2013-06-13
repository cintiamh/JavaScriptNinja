(function(){
    var numClicks = 0;
    document.addEventListener("click", function(){
        alert(++numClicks);
    }, false);
})();

$ = function(){ alert('not jQuery!'); };
(function($){
    $('img').on('click', function(event){
        $(event.target).addClass('clickedOn');
    })
})(jQuery);

(function(){
    var jQuery = window.jQuery = function(){
        // Initialize
    };
    //...
})();

var jQuery = (function(){
    function jQuery(){
        // Initialize...
    }
    //...
    return jQuery;
})();
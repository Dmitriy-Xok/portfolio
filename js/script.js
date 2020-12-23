$(document).ready(function () {
        $("#close").click (function () {
            $("#close").hide();
            $("nav").hide();        
        });
        $("#burger").click (function () {
            $("#close").show();
            $("nav").show();    
        });
        if ($(document).width() <= 414 ) {
            $(".top-menu li").click (function () {
                $("#close").hide();
                $("nav").hide();            
            });
        }
    }    
)
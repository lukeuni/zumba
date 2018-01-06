     $(document).ready(function(){
            
            $('main').hide();
            
            $(window).on({
                load: function(){
                    $('.loader').hide();
                    $('main').show();
                }
            })
            
        });   
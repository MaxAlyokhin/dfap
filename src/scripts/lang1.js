click = 1;

function lang1()
        {
		   if(click)
             {
				 
			    $('table#en').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
			    $('table#ru').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
			    
			    $('.en').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
			    $('.ru').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                click = 0;
			   
             }
             
            else
             {
                 
                $('table#en').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
			    $('table#ru').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
			    
                $('.en').transition({opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
			    $('.ru').transition({opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
                click = 1;
             }
        }
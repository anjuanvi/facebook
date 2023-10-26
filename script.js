$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            mobileemail:{
                required:true,
                email:true
            },
            newpswrd:{
                required:true,
 
            },
            repswrd:{
                required:true,

            },
            days:{
                required:true

            },
            months:{
                required:true
            },
            years:{
                required:true
            },
            gender:{
                required:true
            }
            
        }

    })

    
})
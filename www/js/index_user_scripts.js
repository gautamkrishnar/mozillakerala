(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #abtmozk */
    $(document).on("click", "#abtmozk", function(evt)
    {
         activate_page("#About"); 
    });
    
        /* button  Mozilla kerala team */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_page("#mozkteam"); 
    });
    
        /* button  Mozilla kerala facebook */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         activate_page("#facebookph"); 
    });
    
        /* button  Mozilla kerala blog */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_page("#blogph"); 
    });
    
        /* button  #homebtn */
    $(document).on("click", "#homebtn", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* button  #abtme */
    
    
        /* button  #memoz */
    $(document).on("click", "#memoz", function(evt)
    {
        window.open("https://mozillians.org/en-US/u/gkr/","_blank");
    });
    
        /* button  Facebook */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         window.open("https://www.facebook.com/gautamkrishnar","_blank");
    });
    
        /* button  #homebtnmoztm */
    $(document).on("click", "#homebtnmoztm", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* button  #homebtnabtm */
    $(document).on("click", "#homebtnabtm", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* button  #abtme */
    
    
        /* button  #abtme */
    $(document).on("click", "#abtme", function(evt)
    {
         activate_subpage("#page_69_48"); 
    });
    
        /* button  #abtdev */
    $(document).on("click", "#abtdev", function(evt)
    {
         activate_page("#abtme"); 
    });
    
        /* button  #homebtbn */
    $(document).on("click", "#homebtbn", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* listitem  #surabh */
    $(document).on("click", "#surabh", function(evt)
    {
      
swal({
  title: "Saurabh Nair",
  text: "Visit his reps profile",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Cancel",
  cancelButtonText: "Reps Profile", 
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/d9/8e/d98e9491e08a7d2b92524172d6c628d6.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
   
  } else {
	   window.open("https://reps.mozilla.org/u/jsx/","_blank");
  }
});

      
    });
    
        /* listitem  Kumaresan CS */
    $(document).on("click", ".uib_w_27", function(evt)
    {
      
swal({
  title: "Kumareshan CS",
  text: "Visit his reps profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Cancel",
  cancelButtonText: "Reps Profile", 
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/2c/e5/2ce511f50885e04e510b0ea81759470a.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
   
  } else {
	   window.open("https://reps.mozilla.org/u/Kumaresan/","_blank");
  }
});
	  
    });
    
        /* listitem  Abid Aboobaker */
    $(document).on("click", ".uib_w_28", function(evt)
    {
swal({
  title: "Abid Aboobaker",
  text: "Visit his reps profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  cancelButtonText: "Reps Profile", 
  confirmButtonText: "Cancel",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/37/de/37de15a2e7c5f8c315aa1711dd605637.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
    
  } else {
window.open("https://reps.mozilla.org/u/eKuttan/","_blank");
  }
});

    });
    
        /* listitem Midhun M */
    $(document).on("click", ".uib_w_29", function(evt)
    {
swal({
  title: "Midhun M",
  text: "Visit his reps profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  
  confirmButtonText: "Cancel",
  cancelButtonText: "Reps Profile", 
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/1a/03/1a030a7dd3f0cff1ed8ea96d3155bed6.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
    
  } else {
window.open("https://reps.mozilla.org/u/midhun/","_blank");
  }
});
    });
    
        /* listitem  Anush A */
    $(document).on("click", ".uib_w_30", function(evt)
    {
swal({
  title: "Anush A",
  text: "Visit his reps profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  
  confirmButtonText: "Cancel",
  cancelButtonText: "Reps Profile", 
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/d3/0f/d30fb0c4fb5e3612c02a0ae15cb6b114.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
   
  } else {
 window.open("https://reps.mozilla.org/u/anushbmx/","_blank");
  }
});
    });
    
        /* listitem  Rigin oommen */
    $(document).on("click", ".uib_w_31", function(evt)
    {
swal({
  title: "Rigin oommen",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/b6/53/b65398557354b0a5d699bbfc8cd7f3af.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
   
  } else {
 window.open("https://mozillians.org/en-US/u/riginoommen/","_blank");
  }
});
    });
    
        /* listitem  Gautam krishna.R */
    $(document).on("click", ".uib_w_32", function(evt)
    {
swal({
  title: "Gautam krishna.R",
  text: "Visit my Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/a3/00/a300920b023c9c3961fefc9b4d8052f0.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
    
  } else {
window.open("https://mozillians.org/en-US/u/gkr/","_blank");
  }
});
    });
    
        /* button  #hombtnz1 */
    $(document).on("click", "#hombtnz1", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
    
        /* button  Button */
    $(document).on("click", ".uib_w_43", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* button  #reps_kum */
    $(document).on("click", "#reps_kum", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #homebtnbklog */
    $(document).on("click", "#homebtnbklog", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* button  #aboutdev */
    $(document).on("click", "#aboutdev", function(evt)
    {
         activate_subpage("#page_69_48"); 
    });
    
        /* button  #homebtname */
    $(document).on("click", "#homebtname", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* button  #mozkircbtn */
    $(document).on("click", "#mozkircbtn", function(evt)
    {
         activate_subpage("#page_33_29"); 
    });
    
    
        /* button  #backbtnircmozk */
    $(document).on("click", "#backbtnircmozk", function(evt)
    {
         activate_subpage("#page_10_68"); 
    });
    
        /* listitem  Abin Abraham */
    $(document).on("click", ".uib_w_60", function(evt)
    {
swal({
  title: "Abin Abraham",
  text: "Visit his reps profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Reps Profile", 
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/c6/3e/c63efb050b4e07ba693d27976a7487a9.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {

  } else {
    window.open("https://reps.mozilla.org/u/Abin/","_blank");
  }
});
       
    });
    
  
    
        /* listitem  Shine Nelson */
    $(document).on("click", ".uib_w_61", function(evt)
    {
 swal({
  title: "Shine Nelson",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/f2/a3/f2a3f6c7acde66642991a3365c1d9b4f.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
  
  } else {
	    window.open("https://mozillians.org/en-US/u/shine/","_blank");
  }
});
    });
    
        /* listitem  Nadeem Ahmed */
    $(document).on("click", ".uib_w_62", function(evt)
    {
swal({
  title: "Nadeem Ahmed",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/80/9c/809cb46fbb982573d1e29335e77a8d86.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
    
  } else {
	  window.open("https://mozillians.org/en-US/u/nadeem/","_blank");
  }
});
    });
    
        /* listitem  Amal K Mathew */
    $(document).on("click", ".uib_w_63", function(evt)
    {
swal({
  title: "Amal K Mathew",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/bf/f8/bff8c4dd831cecff1414436703c8db97.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
    
  } else {
window.open("https://mozillians.org/en-US/u/amal_mathew/","_blank");
  }
});
    });
    
        /* listitem  Akhil James */
    $(document).on("click", ".uib_w_64", function(evt)
    {
swal({
  title: "Akhil James",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/e2/7e/e27e62f9f2d21643b4d8eb96047dc7b0.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
 
  } else {
   window.open("https://mozillians.org/en-US/u/akhiljames/","_blank");;
  }
});
    });
    
        /* listitem  Eldhose K Shibu */
    $(document).on("click", ".uib_w_65", function(evt)
    {
swal({
  title: "Eldhose K Shibu",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/8b/b3/8bb3915e417500711785d86ce858bbf5.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {

  } else {
    window.open("https://mozillians.org/en-US/u/eldhose104/","_blank");
  }
});
    });
    
        /* listitem  Faheem K */
    $(document).on("click", ".uib_w_66", function(evt)
    {
swal({
  title: "Faheem K",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/d4/65/d465ab70c41e607802b124245fdd4b9c.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {
 
  } else {
   window.open("https://mozillians.org/en-US/u/faheem/","_blank");
  }
});
    });
    
        /* listitem  Praveen Sridhar */
    $(document).on("click", ".uib_w_67", function(evt)
    {
swal({
  title: "Praveen Sridhar",
  text: "Visit his Mozillian profile",
  
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",  confirmButtonText: "Cancel",
  cancelButtonText: "Mozillian Profile",
imageUrl: "https://mozillians.org/media/uploads/sorl-cache/fd/7f/fd7f325b6091e03a731325a43cbedfe1.jpg",
  closeOnConfirm: true,
  closeOnCancel: true
},
function(isConfirm){
  if (isConfirm) {

  } else {
    window.open("https://mozillians.org/en-US/u/praveen13/","_blank");
  }
});
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

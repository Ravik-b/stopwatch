var hours =document.getElementById("hours");
var minutes =document.getElementById("minutes");
var seconds =document.getElementById("seconds");
var start =document.getElementById("starts");
var stop =document.getElementById("stop");
var reset =document.getElementById("reset");

var temp=1;
var min =00;
var hr=00;
start.addEventListener('click' ,function(){

              var id =   setInterval(function(){
                       
                  seconds.innerHTML=temp;
                  temp++;
                 

                  if(temp==60)
                  {
                     temp=1;
                     minutes.innerHTML= ++min;
                     
                  }
                  if(min==60)
                  {
                    hours.innerHTML=++hr;
                    

                  }
            
                   stop.addEventListener('click' ,function(){

                    hours.innerHTML=hr
                    minutes.innerHTML=min
                    seconds.innerHTML=temp
                    clearInterval(id);
                 


                })
                reset.addEventListener('click',function(){

                    hours.innerHTML="00"
                    minutes.innerHTML="00"
                    seconds.innerHTML="00"

                    hr=00;
                    min=00;
                    temp=01;
                   


                    clearInterval(id);
                
                 
                   })


                 },1000)
         
                 });

                 var element=document.getElementById("lightmode");
                 console.log(element);
                 var body =document.querySelector("body");
                 console.log(body);


                 element.addEventListener('click' ,function(){

                              body.classList.toggle('lightmode');
                               if(body.classList=='lightmode')
                               {
                                   element.innerHTML="Dark Mode";
                               }
                               else
                               {
                                element.innerHTML="Light Mode";
                               }


                 })
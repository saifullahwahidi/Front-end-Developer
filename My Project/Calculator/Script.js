let screen=document.querySelector('.screen')
function display(Number){
    screen.value += Number;
   }
   
   function Calculate(){
    try{
      screen.value = eval(screen.value)
    }
    catch(error){
    
     alert("invalid")
    }
   }
   
   function Clear(){
   screen.value ="";
   
   }
   function del(){
    screen.value = screen.value.slice(0,-1)
   }
 
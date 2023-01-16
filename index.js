
function ClockUpdate(){

   var date = new Date();
   var ora = date.getHours();
   var minuta = date.getMinutes();
   var sekonda = date.getSeconds();
   var session = document.getElementById('session');

    if( ora>=12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }

     document.getElementById('Ora').innerHTML=ora;
     document.getElementById('minuta').innerHTML=minuta;
     document.getElementById('sekonda').innerHTML=sekonda;
    
}

setInterval(ClockUpdate, 1000);

 
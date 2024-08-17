setInterval(currentTime,1000);

function currentTime(){
    var now = new Date();
    var hour=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();
    var zone="AM";

    if(hour>12){
        hour=hour-12;
        zone="PM";
    }

    else if(hour==0){
        hour=12;
        zone="AM";
    }

    else if(hour==12){
        zone="PM";
    }

    if(min<=9){
        min='0'+min;
    }
    if(hour<=9){
        hour='0'+hour;
    }
    if(sec<=9){
        sec='0'+sec;
    }
    let current=hour+" : "+min+" : "+sec+" "+zone;
    document.getElementById("clock").innerHTML=current;
}

currentTime();

let time = document.getElementById("time");

function changedate() {

    // start for date--------------------------------------------
    let d = new Date();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    // start for timing-------------------------------------------
    let milisecond = d.getMilliseconds();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hours = d.getHours();


    //Using Switchs for converting nunber into days---------
    switch (day) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Sunday"
            break;
    }
    //end of days





    //Using Switchs for converting nunber into month---------
    switch (month) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        default:
            month = "December"
            break;
    }
    //end of month

document.getElementById("millisecond").innerText=milisecond;
document.getElementById("second").innerText=second;
document.getElementById("minute").innerText=minute;
document.getElementById("hour").innerText=hours;
document.getElementById("day").innerText=day;
document.getElementById("date").innerText=date;
document.getElementById("month").innerText=month;
document.getElementById("year").innerText=year;



    setTimeout(changedate, 1)

}



let timer=true;


function stop(){
    if(timer===true){
        document.getElementById("stoped").innerText="Start";
        document.getElementById("started").style.visibility="hidden"

        timer=false;
    }
    else{
        document.getElementById("started").style.visibility="visible";
        document.getElementById("stoped").innerText="Stop";
        timer=true;
    }
}

function start(){
    let current=document.getElementById("settime").innerText;
    current=Number(current);
    if(timer===true){
       current+=1; 
    }
    
    document.getElementById("settime").innerText=current;
    document.getElementById("started").innerText="Speed";

    setTimeout(start,1000);
    
}

function reset(){
        window.location.reload();
    }

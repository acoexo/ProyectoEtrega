let [milliseconds, seconds, minutes, hours]=[0, 0, 0, 0];
let timerRef = document.querySelector(".timeDisplay");
let int = null;
document.getElementById('start').addEventListener('click', ()=>{
    if(int != null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours]=[0, 0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
});
function displayTimer(){
    const mensa1=document.querySelector(".timeDisplay")
    milliseconds+=10;
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            };
        };
    };
    let h = hours<10? "0"+hours: hours;
    let m = minutes<10? "0"+minutes: minutes;
    let s = seconds<10? "0"+seconds: seconds;
    let mi = milliseconds<10? "00"+seconds: milliseconds<100? "0"+milliseconds: milliseconds;
    timerRef.innerHTML=`${h} : ${m} : ${s} : ${mi}`
    if(hours==0&&minutes==0&&milliseconds==10&&milliseconds==0){
        Ach("You have already win an achievement");
        return;
    }else if(hours==1&&minutes==0&&seconds==0&&milliseconds==0){
        Ach("You have already win an achievement");
        return; 
    }else if( hours==2&&minutes==0&&seconds==0&&milliseconds==0){
        Ach("You have already win an achievement");
        return;
    } else if(hours==2&&minutes==30&&seconds==0&&milliseconds==0){
        Ach("You have already win an achievement");
        return;
    }else if(hours==5&&minutes==30&&seconds==0&&milliseconds==0){
        Ach("You have already win an achievement");
        return;
    }
    
};
const mensa1=document.querySelector(".achievements");
function Ach(mensaje){
    const pop1=document.createElement("p");
    pop1.textContent=mensaje;
    pop1.classList.add("popup");
    mensa1.appendChild(pop1);
    setTimeout(()=>{pop1.remove()}, 3000);
    };


const mensa2= document.querySelector(".achievements")

function run(){
    let se=seconds;
    let min =minutes;
    let hor = hours;
    if(hor==0&&min==0&&se>=10){
        ShowAch("Your firsts ten seconds");
        if(hor>=1&&min==0&&se==0){
            ShowAch("Just one hour");
            if(hor>=2&&min==0&&se==0){
                ShowAch("TWO HOURS??!!");
                if(hor>=2&&min==30&&se==0){
                    ShowAch("Please stop now");
                    if(hor>=5&&min==0&&se==0){
                        ShowAch("Just leave, you have a life to live");
                        return;
                    }
                    return;
                }
                return;
            }
            return;
        }
        return;
    }else{
        ShowAch("There is no achievements yet");
        return;
    }
};


function ShowAch(mensaje){
    const pop2=document.createElement("p");
    pop2.textContent=mensaje;
    pop2.classList.add("popup");
    mensa2.appendChild(pop2);
    setTimeout(()=>{pop2.remove()}, 3000);
};
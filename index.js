let Time=59;
let Mistakes=0;
let WPM=0;
let Mistakes_Span=document.querySelector("#Mistakes>span");
Mistakes_Span.innerHTML=Mistakes;

let Time_Span=document.querySelector("#Timer>span");
Time_Span.innerHTML=Time;


let Current_Character=0;
let Test_String="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quos neque, accusantium sit repellat fuga eaque laboriosam repellendus ratione nemo rem odio deserunt laudantium non soluta optio hic. A, eius.";
let Tag_Test_String=document.getElementById('Test-String');


Test_String=Test_String.split('');
Test_String.forEach(element => {
    Tag_Test_String.innerHTML+=`<span>${element}</span>`;
});

let Text_Box=document.getElementById('Text-Box');
let Button=document.getElementById('Action');
let Interval_Time;
function Start_Test()
{
    Tag_Test_String.childNodes[Current_Character].style.textDecoration="underline";
    Button.setAttribute("onclick","Stop_Test()");
    Button.innerHTML="Stop Test"
    Text_Box.disabled=false;
    Interval_Time=setInterval(()=>{
        Time--;
        Time_Span.innerHTML=Time;
        if(Time===0){
            Text_Box.disabled=true;
            Reset_Test();
            clearInterval(Interval_Time);
        }
    },1000);
    
    Text_Box.addEventListener("keyup",(event)=>{
        if(!(event.key==="Shift") && !(event.key==="Backspace")){
            debugger
            if(event.key===" "){
                debugger
                WPM++;
            }
            let User_Input=Text_Box.value;
            User_Input=User_Input.split('')[Current_Character].toLowerCase();


            Tag_Test_String.childNodes[Current_Character +1].style.textDecoration="underline";

            if(User_Input===Test_String[Current_Character].toLowerCase()){
                Tag_Test_String.childNodes[Current_Character].style.color="#8BC34A";
                console.log("OK");
            }else{
                Tag_Test_String.childNodes[Current_Character].style.color="red";
                console.log("Mistake");
                Mistakes++;
                Mistakes_Span.innerHTML=Mistakes;
            }
            Current_Character++;
        }
    });   
    
}
function Stop_Test()
{
    clearInterval(Interval_Time);
    Button.setAttribute("onclick","Start_Test()");
    Button.innerHTML="Resume Test"
    Text_Box.disabled=true;
}
let Result_Mistakes=document.querySelector('.Result_Mistakes>span');
let Resul_WPM=document.querySelector('.WPM>span');

function Reset_Test()
{

    Text_Box.value="";
    Text_Box.disabled=true;
    Button.setAttribute("onclick","Start_Test()");
    Button.innerHTML="Start Test";
    Result_Mistakes.innerHTML=Mistakes;
    Resul_WPM.innerHTML=WPM;
    
    Tag_Test_String.innerHTML="";
    Test_String.forEach(element => {
        Tag_Test_String.innerHTML+=`<span>${element}</span>`;
    });

    WPM=0;
    Current_Character=0;
    Mistakes=0;
    Time=59;
    Time_Span.innerHTML=Time;
    Mistakes_Span.innerHTML=Mistakes;
}
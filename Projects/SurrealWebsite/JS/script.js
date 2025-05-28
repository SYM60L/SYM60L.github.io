//this is for timeouts
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//convo code
var PMP = 0;
var CubeP = 0; //I don't want to write the short version of this :(
var talk = false;

async function paperMan(img){
    if(talk){
        return;
    }
    else{
        talk = true;
        const tp = document.getElementById("PMt");
        img.src="IMG/PM/PMtalk.gif";

        switch(PMP) {
            case 0:
                tp.innerHTML = "what?";
                await sleep(1000);
            break;

            case 1:
                tp.innerHTML = "I'm not in the mood to talk.";
                await sleep(1000);
            break;

            case 2:
                tp.innerHTML = "Just leave me alone!";
                await sleep(1000);
            break;

            case 3:
                tp.innerHTML = "...";
                await sleep(1000);
            break;

            case 4:
                tp.innerHTML = "Since you have nothing better to do...";
                await sleep(1000);
            break;

            case 5:
                tp.innerHTML = "How about you find me a detergent bottle?";
                await sleep(1000);
            break;

            case 6:
                tp.innerHTML = "I just lost mine actually...";
                await sleep(1000);
            break;

            case 7:
                tp.innerHTML = "It's a pink color, can't miss it.";
                await sleep(1000);
            break;

            case 8:
                tp.innerHTML = "Go ask the square for help.";
                await sleep(1000);
            break;

            case 9:
                tp.innerHTML = "He loves to hoard shit.";
                await sleep(1000);
            break;

            case 10:
                tp.innerHTML = "Find me that detergent bottle.";
                PMP--;
                await sleep(1000);
            break;

            case 11:
                tp.innerHTML = "Oh, you found it!";
                await sleep(1000);
            break;
        
            case 12:
                tp.innerHTML = "I don't really have a use for you anymore...";
                await sleep(1000);
            break;

            case 13:
                window.location.replace("https://sym60l.github.io/");
            break;
        }
        document.getElementById("PM").src="IMG/PM/PMidle.gif";
        PMP++;
        talk = false;
    }
}

async function cube(img){
    if(talk){
        return;
    }
    else{
        talk = true;
        const tp = document.getElementById("Ct");
        img.src = "IMG/CUBE/Ctalk.png";

        switch(CubeP) {
            case 0:
                tp.innerHTML = "Greetings.";
                await sleep(1000);
            break;

            case 1:
                tp.innerHTML = "As you can see the creator did a poor chromakeying job on me.";
                await sleep(1000);
            break;

            case 2:
                tp.innerHTML = "Need something?";
                await sleep(1000);
            break;

            case 3:
                if(PMP>9 && PMP<12){
                    tp.innerHTML = "PaperMan said what!?";
                    await sleep(1000);
                }
                if(PMP>5 && PMP<10){
                    tp.innerHTML = "A bottle of detergent?";
                    await sleep(1000);
                    CubeP=6;
                }
                if(PMP<6){
                    CubeP--;
                    tp.innerHTML = "...";
                    await sleep(1000);
                }
            break;

            case 4:
                tp.innerHTML = "I'll have you know: IM NOT A HOARDER!";
                await sleep(1000);
            break;

            case 5:
                tp.innerHTML = "I am a collector, thank you very much!";
                await sleep(1000);
            break;

            case 6:
                tp.innerHTML = "So... the bottle?";
                await sleep(1000);
            break;

            case 7:
                tp.innerHTML = "Found it this morning.";
                await sleep(1000);
            break;

            case 8:
                tp.innerHTML = "I'll give it to you.";
                await sleep(1000);
            break;

            case 9:
                tp.innerHTML = "But be warned!";
                await sleep(1000);
            break;

            case 10:
                tp.innerHTML = "This bottle may bring the end of me.";
                await sleep(1000);
            break;

            case 11:
                tp.innerHTML = "But I accept my fate.";
                await sleep(1000);
            break;

            case 12:
                tp.innerHTML = "Now take it.";
                await sleep(1000);
                bottleMove();
            break;

            case 13:
                tp.innerHTML = "Come on, take it.";
                await sleep(1000);
                CubeP--;
            break;
        }

        CubeP++;
        talk = false;
        img.src = "IMG/CUBE/Cidle.gif";
    }
}
async function cubeDeath(){
    const img = document.getElementById("C");
    talk = true;
    const tp = document.getElementById("Ct");
    const final = document.getElementById("Cd");

    img.src = "IMG/CUBE/Ctalk.png";

    tp.innerHTML = "This is my final stand...";
    await sleep(3000);
    tp.innerHTML = "It's been a blast!";
    await sleep(3000);
    tp.innerHTML = "I truly hope we meet in my next life.";
    await sleep(3000);
    tp.innerHTML = "Goodbye...";
    await sleep(1000);

    img.src = "IMG/CUBE/Cidle.gif";
    await sleep(2000);
    img.src = "IMG/CUBE/Cdeath.gif";
    await sleep(3000);

    final.style.display = "none";

    talk = false;
    img.src = "IMG/CUBE/Cidle.gif";

    PMP = 11;
}

//moving
function bottleMove() {
  let id = null;
  const elem = document.getElementById("Dbottle");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
      elem.style.zIndex = 0;
    } else {
      pos++;
      elem.style.left = pos + "px"; 
    }
  }
}

function dBottle(img){
    img.style.display = "none";
    cubeDeath();
}
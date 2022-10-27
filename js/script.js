console.log("linked")

window.onload = (event) => { // WHEN PAGE AS LOADED, EVENT AS EXECUTED


    console.log("onload ready")

    var image = document.getElementById("imagemmini");
    image.src = "/fundos/1.jpg"

    function time() {
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();

        if(h < 10){
            h = "0" + h
        }
        if(m < 10){
            m = "0" + m
        }


        document.getElementById('timereal').innerHTML = h + ":" + m;
        setTimeout(time, 500);
    }

    function clockbr(){

        dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
        monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")



        now = new Date
        let x = (dayName[now.getDay() ] + ", " + monName[now.getMonth()] + " " + now.getDate () + ", " + now.getFullYear())

    document.getElementById("clock").innerHTML = x

    setTimeout(clockbr, 1000);

    }

    function clockall(){

        dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
        monName = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")



        now = new Date
        let x = (dayName[now.getDay() ] + ", " + monName[now.getMonth()] + " " + now.getDate () + ", " + now.getFullYear())

    document.getElementById("clock").innerHTML = x

    setTimeout(clockall, 1000)

    }

    if(navigator.language == "pt" || navigator.language == "pt-br" || navigator.language == "pt-BR" || navigator.language == "PT-BR"){

        clockbr()

    }else{

        clockall()
    }

    time()

}

// SEPARATE FUNCTIONS //

/*
function audio() {

    var audio = document.getElementById("Audio");    

  if (audio.paused) {
    audio.play();
    console.log("play")
  } else {
    audio.pause();
    console.log("pause")
  }
}

*/

function copy() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
  }

function openInstagram() {
    window.open('https://www.instagram.com/httppatr_/', '_blank')
    
}

function openGithub() {
    window.open('https://github.com/Zanecruise', '_blank')
    
}

function openLinkedin() {
    window.open('https://www.linkedin.com/in/🖥%EF%B8%8F-patrick-stegaribe-548408243/', '_blank')
    
}




var imgcount = 1

function changeBackgroundImagenext() {


        document.body.style.backgroundImage = "url('/fundos/" + imgcount + ".jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.margin = "0"

        x = "url('/fundos/" + imgcount + ".jpg')";

        var image = document.getElementById("imagemmini");

        imgcount++

        if (imgcount > 3) {
            imgcount = 0
          
        }

        image.src = "/fundos/" + imgcount + ".jpg"

        

        console.log("trocado prox")
        console.log(imgcount)

}

function changeBackgroundImageback() {


    document.body.style.backgroundImage = "url('/fundos/" + imgcount + ".jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.margin = "0"

    x = "url('/fundos/" + imgcount + ".jpg')";

    var image = document.getElementById("imagemmini");

    imgcount++

    if (imgcount > 3) {
        imgcount = 0
      
    }

    image.src = "/fundos/" + imgcount + ".jpg"



    console.log("trocado volta")
    console.log(imgcount)

}
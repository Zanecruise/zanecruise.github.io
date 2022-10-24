console.log("Linkado")

window.onload = (event) => {

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

// ------ //
 
function myFunction() {

    var video = document.getElementById("myVideo");    

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

console.log("linked")

window.onload = (event) => { // WHEN PAGE AS LOADED, EVENT AS EXECUTED
    
    console.log("onload ready")
    
    // ---------------------- IMG BG -------------------------- //

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

    // ---------------------- CLOCK BR -------------------------- //

    function clockbr(){

        dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
        monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

        now = new Date
        let x = (dayName[now.getDay() ] + ", " + monName[now.getMonth()] + " " + now.getDate () + ", " + now.getFullYear())

    document.getElementById("clock").innerHTML = x

    setTimeout(clockbr, 1000);

    }

    // ---------------------- CLOCK ALL -------------------------- //

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

function changebgcolor(){
    var element = document.body;
    element.classList.toggle("dark-mode");

}

function copy() { // COPY EMAIL
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
  }

function openInstagram() { // OPEN INSTAGRAM
    window.open('https://www.instagram.com/httppatr_/', '_blank')
    
}

function openGithub() { // OPEN GITHUB
    window.open('https://github.com/Zanecruise', '_blank')
    
}

function openLinkedin() { // OPEN LINKEDIN
    window.open('https://www.linkedin.com/in/🖥%EF%B8%8F-patrick-stegaribe-548408243/', '_blank')
    
}


// OPEN ROAD
 
var press = 0

function openRoad() {

    let box_change = document.getElementById("BOXTIME")
    let road_button_js = document.getElementById("road_button")

    if (press == 0) {

        document.getElementById("BOXTIME").style.display = "inline";

        box_change.addEventListener('open', () => box_change.style.opacity = '1'); //MUDAR ISSO

        press++

    }else{

        document.getElementById("BOXTIME").style.display = "none";
        box_change.style.opacity = '0' // MUDAR ISSO
        press--

    }
        
}

// CHANGE BG

var imgcount = 1

function changeBackgroundImagenext() { // CHANGE BG NEXT

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

function changeBackgroundImageback() { // CHANGE BG BEFORE

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

window.onscroll = scrollpage()

    function scrollpage(){

        var porti = document.getElementById("BOXTIME")
    
        porti.style.visibility = 'visible' //MUDAR ISSO
    
        console.log("rodo")
    
    }


// WHITE AND DARK MODE


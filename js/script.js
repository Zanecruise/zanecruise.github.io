console.log("Linkado")

window.onload = (event) => {

    console.log('ABRIU');

    function clock(){

        dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
        monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

        var split = new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]
        var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
        console.log(timeZoneFormatted)


        //now = new Date
        //let x = (dayName[now.getDay() ] + ", " + monName[now.getMonth()] + " " + now.getDate () + ", " + now.getFullYear())

    document.getElementById("demo").innerHTML = x

    setTimeout(clock, 1000);

    }

    clock();
}


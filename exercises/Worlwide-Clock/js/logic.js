
document.getElementById("time-zone-request").addEventListener("keydown", (event)=>{
    let timezone = "";
    if (event.key === "Enter") {
        timezone = document.getElementById("time-zone-request").value;
        let url = "https://worldtimeapi.org/api/timezone/" + timezone;
        fetch(url)
        .then(response => response.json())
        .then(timezones => {
            // TODO: Extract data and show the clock
            const data = JSON.stringify(timezones);
            console.log(data);
        })
        .catch(error => {
            console.error("Couldn't load the request timezone");
        });
    }
});

const showClock = ()=> {
    const meses = ["Ene", "Feb", "Mar", "Abr", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let date = new Date();
    let hour = format(date.getHours());
    let minutes = format(date.getMinutes());
    let seconds = format(date.getSeconds());
    let year = date.getFullYear();
    let month = meses[date.getMonth()];
    let day = dias[date.getDay()];
    let num_day = date.getDate();
    document.getElementById("time").innerHTML = `${hour}:${minutes}:${seconds}`;
    document.getElementById("date").innerHTML = `${day}, ${num_day} ${month} ${year}`;
}

const format = (time)=> {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

// Llama a la funcion cada 1s
setInterval(showClock, 1000);

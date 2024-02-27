// Declare array of the available cities to later map them so the user doesn't have to specificy this
const Asia = ["Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuching","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan"];
const Europe = ["Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Dublin","Europe/Gibraltar","Europe/Helsinki","Europe/Istanbul","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/London","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Moscow","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Saratov","Europe/Simferopol","Europe/Sofia","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zurich"];
const Africa = ["Africa/Abidjan","Africa/Algiers","Africa/Bissau","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/El_Aaiun","Africa/Johannesburg","Africa/Juba","Africa/Khartoum","Africa/Lagos","Africa/Maputo","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek"];
const Australia = ["Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney"];
const Pacific = ["Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Easter","Pacific/Efate","Pacific/Fakaofo","Pacific/Fiji","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Marquesas","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu"];
const Indian = ["Indian/Chagos","Indian/Maldives","Indian/Mauritius"];
const America = ["America/Adak","America/Anchorage","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Asuncion","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Chicago","America/Chihuahua","America/Ciudad_Juarez","America/Costa_Rica","America/Cuiaba","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/New_York","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Tijuana","America/Toronto","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat"];

let last_full_path = "https://worldtimeapi.org/api/ip";

document.getElementById("time-zone-request").addEventListener("keydown", (event)=>{
    let timezone = "";
    if (event.key === "Enter") {
        timezone = document.getElementById("time-zone-request").value;
        let fullpath = searchRegion(timezone);
        let url = "https://worldtimeapi.org/api/timezone/" + fullpath;
        fetch(url)
        .then(response => response.json())
        .then(timezone => {
            // If the request was succesfull we save it to keep updating it until we get a new request
            last_full_path = url;
            showClock(timezone);
        })
        .catch(error => {
            last_full_path = "";
            document.getElementById("time").innerHTML =  `X﹏X \n Location Unavailable`
            document.getElementById("date").innerHTML = ``;
            console.error("Couldn't load the request timezone");
        });
    }
});

function searchRegion(timezone) {
    for (let index = 0; index < America.length; index++) {
        if (America[index].includes(timezone)) {
            return America[index];
        }        
    }
    for (let index = 0; index < Asia.length; index++) {
        if (Asia[index].includes(timezone)) {
            return Asia[index];
        }        
    }
    for (let index = 0; index < Europe.length; index++) {
        if (Europe[index].includes(timezone)) {
            return Europe[index];
        }        
    }
    for (let index = 0; index < Africa.length; index++) {
        if (Africa[index].includes(timezone)) {
            return Africa[index];
        }        
    }
    for (let index = 0; index < Australia.length; index++) {
        if (Australia[index].includes(timezone)) {
            return Australia[index];
        }        
    }
    for (let index = 0; index < Australia.length; index++) {
        if (Australia[index].includes(timezone)) {
            return Australia[index];
        }        
    }
    for (let index = 0; index < Pacific.length; index++) {
        if (Pacific[index].includes(timezone)) {
            return Pacific[index];
        }        
    }
    for (let index = 0; index < Indian.length; index++) {
        if (Indian[index].includes(timezone)) {
            return Indian[index];
        }        
    }
}

const showClock = (timezone)=> {
    let day_week = getDayWeek(timezone);
    let day = getDay(timezone);
    let month = getMonth(timezone);
    let year = getYear(timezone);
    let hour = getHour(timezone);
    let minute = getMinute(timezone);
    let seconds = getSeconds(timezone);

    document.getElementById("time").innerHTML =  `${hour} : ${minute} : ${seconds}`
    document.getElementById("date").innerHTML = `${day_week} ${day}, ${month} ${year}`;
}

function getDayWeek(timezone) {
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    return dias[timezone.day_of_week];
}

function getHour(timezone) {
    let hour = timezone.datetime;
    return hour.substring(11, 13);
}

function getMinute(timezone) {
    let minutes = timezone.datetime;
    return minutes.substring(14, 16);
}

function getSeconds(timezone) {
    let seconds = timezone.datetime;
    return seconds.substring(17, 19);
}

function getMonth(timezone) {
    const meses = ["Ene", "Feb", "Mar", "Abr", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let month =  timezone.datetime;
    let month_num = month.substring(5, 7);
    return meses[Number(month_num)-1];
}

function getYear(timezone) {
    let year = timezone.datetime;
    return year.substring(0, 4);
}

function getDay(timezone) {
    let day = timezone.datetime;
    return day.substring(8, 10);
}

const updateClock = ()=> {
    if (last_full_path !== "") {       
        fetch(last_full_path)
        .then(response => response.json())
        .then(timezone => {
            showClock(timezone);
        })
        .catch(error => {
        })   
    }
}

// Update the request every second
setInterval(updateClock, 1000);

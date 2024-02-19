let text_num = "";
let first_arg = 0;
let second_arg = 0;
let operation = "";
let final_result = 0;

document.getElementById("1").addEventListener("click", ()=>{
    text_num += "1";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("2").addEventListener("click", ()=>{
    text_num += "2";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("3").addEventListener("click", ()=>{
    text_num += "3";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("4").addEventListener("click", ()=>{
    text_num += "4";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("5").addEventListener("click", ()=>{
    text_num += "5";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("6").addEventListener("click", ()=>{
    text_num += "6";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("7").addEventListener("click", ()=>{
    text_num += "7";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("8").addEventListener("click", ()=>{
    text_num += "8";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("9").addEventListener("click", ()=>{
    text_num += "9";
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("delete").addEventListener("click", ()=>{
    text_num = text_num.substring(0, text_num.length - 1);
    document.getElementById("result").innerHTML = text_num;
});

document.getElementById("sum").addEventListener("click", ()=>{
    if (text_num != "") {
        first_arg = Number(text_num);
        document.getElementById("ultimo").innerHTML = text_num;
        operation = "sum";
        text_num = "";
        document.getElementById("result").innerHTML = text_num;
    }
});

document.getElementById("sub").addEventListener("click", ()=>{
    if (text_num != "") {
        first_arg = Number(text_num);
        document.getElementById("ultimo").innerHTML = text_num;
        operation = "sub";
        text_num = "";
        document.getElementById("result").innerHTML = text_num;
    }
});

document.getElementById("mul").addEventListener("click", ()=>{
    if (text_num != "") {
        first_arg = Number(text_num);
        document.getElementById("ultimo").innerHTML = text_num;
        operation = "mul";
        text_num = "";
        document.getElementById("result").innerHTML = text_num;
    }
});

document.getElementById("div").addEventListener("click", ()=>{
    if (text_num != "" ) {
        first_arg = Number(text_num);
        document.getElementById("ultimo").innerHTML = text_num;
        operation = "div";
        text_num = "";
        document.getElementById("result").innerHTML = text_num;
    }
});

document.getElementById("equals").addEventListener("click", ()=>{
    second_arg = Number(text_num);
    text_num = "";
    switch (operation) {
        case "sum":
            final_result = first_arg + second_arg;
            break;
        case "sub":
            final_result = first_arg - second_arg;
            break;
        case "mul":
            final_result = first_arg * second_arg;
            break;
        case "div":
            final_result = first_arg / second_arg;
            break;
        default:
            break;
    }
    first_arg = final_result;
    text_num = final_result.toString();
    document.getElementById("result").innerHTML = text_num;
});

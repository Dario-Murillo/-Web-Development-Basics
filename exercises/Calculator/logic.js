let first_text = "";
let first_arg = 0;
let second_text = "";
let second_arg = 0;

// Operation to solve
let oper = "";
let rev = false;

// Resets everything
document.getElementById("reset").addEventListener("click", ()=>{
    first_text = "";
    first_arg = 0;
    second_text = "";
    second_arg = 0;
    rev = false;
    document.getElementById("result").innerHTML = first_text;
    document.getElementById("last").innerHTML = first_text;
});

document.getElementById("0").addEventListener("click", ()=>{
    first_text += "0";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("1").addEventListener("click", ()=>{
    first_text += "1";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("2").addEventListener("click", ()=>{
    first_text += "2";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("3").addEventListener("click", ()=>{
    first_text += "3";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("4").addEventListener("click", ()=>{
    first_text += "4";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("5").addEventListener("click", ()=>{
    first_text += "5";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("6").addEventListener("click", ()=>{
    first_text += "6";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("7").addEventListener("click", ()=>{
    first_text += "7";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("8").addEventListener("click", ()=>{
    first_text += "8";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("9").addEventListener("click", ()=>{
    first_text += "9";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("decimal").addEventListener("click", ()=>{
    first_text += ".";
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("delete").addEventListener("click", ()=>{
    first_text = first_text.substring(0, first_text.length - 1);
    document.getElementById("result").innerHTML = first_text;
});

document.getElementById("sum").addEventListener("click", ()=>{
    // First number is not null but second is
    if (first_text != "" && second_text == "") {
        second_text = first_text;
        first_text = "";
        oper = "sum";
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
    if (first_text != "" && second_text != "") {
        oper = "sum";
        first_text = "";
        rev = true;
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("sub").addEventListener("click", ()=>{
    if (first_text != "" && second_text == "") {
        second_text = first_text;
        first_text = "";
        oper = "sub";
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
    if (first_text != "" && second_text != "") {
        oper = "sub";
        first_text = "";
        rev = true;
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("mul").addEventListener("click", ()=>{
    if (first_text != "" && second_text == "") {
        second_text = first_text;
        first_text = "";
        oper = "mul";
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
    if (first_text != "" && second_text != "") {
        oper = "mul";
        first_text = "";
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("div").addEventListener("click", ()=>{
    if (first_text != "" && second_text == "") {
        second_text = first_text;
        first_text = "";
        oper = "div";
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }

    if (first_text != "" && second_text != "") {
        oper = "div";
        first_text = "";
        rev = true;
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("mod").addEventListener("click", ()=>{
    if (first_text != "" && second_text == "") {
        second_text = first_text;
        first_text = "";
        oper = "mod";
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
    if (first_text != "" && second_text != "") {
        oper = "mod";
        first_text = "";
        rev = true;
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("sqr_root").addEventListener("click", ()=>{
    if (first_text != "") {
        first_arg = Number(first_text);
        first_arg = Math.sqrt(first_arg);
        first_text = first_arg.toString();
        second_text = first_arg.toString();
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("pow").addEventListener("click", ()=>{
    if (first_text != "") {
        first_arg = Number(first_text);
        first_arg = Math.pow(first_arg, 2);
        first_text = first_arg.toString();
        second_text = first_arg.toString();
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("fract").addEventListener("click", ()=>{
    if (first_text != "") {
        first_arg = Number(first_text);
        first_arg = 1 / first_arg;
        first_text = first_arg.toString();
        second_text = first_arg.toString();
        document.getElementById("result").innerHTML = first_text;
        document.getElementById("last").innerHTML = second_text;
    }
});

document.getElementById("neg").addEventListener("click", ()=>{
    if (first_text != "") {
        if (first_text.includes("-")) {
            console.log("here");
            first_text = first_text.substring(1, first_text.length);
        } else {
            first_text = "-" + first_text;
        }
        document.getElementById("result").innerHTML = first_text;
    }
});

document.getElementById("partial_reset").addEventListener("click", ()=>{
    first_text = "";
    document.getElementById("result").innerHTML = "";
});

document.getElementById("equals").addEventListener("click", ()=>{
    if (first_text != "" && second_text != "") {
        let result = 0;
        switch (oper) {
            case "sum":
                if (rev) {
                    result = Number(second_text) + Number(first_text);
                } else {
                    result = Number(first_text) + Number(second_text);
                }
                first_text = result.toString();
                second_text = result.toString();
                document.getElementById("result").innerHTML = first_text;
                document.getElementById("last").innerHTML = second_text;
                break;
            case "sub":
                if (rev) {
                    result = Number(second_text) - Number(first_text);
                } else {
                    result = Number(first_text) - Number(second_text);
                }
                first_text = result.toString();
                second_text = result.toString();
                document.getElementById("result").innerHTML = first_text;
                document.getElementById("last").innerHTML = second_text;
                break;
            case "div":
                if (rev) {
                    result = Number(second_text) / Number(first_text);
                } else {
                    result = Number(first_text) / Number(second_text);
                }
                first_text = result.toString();
                second_text = result.toString();
                document.getElementById("result").innerHTML = first_text;
                document.getElementById("last").innerHTML = second_text;
                break;
            case "mul":
                result = Number(first_text) * Number(second_text);
                first_text = result.toString();
                second_text = result.toString();
                document.getElementById("result").innerHTML = first_text;
                document.getElementById("last").innerHTML = second_text;
                break;
            case "mod":
                if (rev) {
                    result = Number(second_text) % Number(first_text);
                } else {
                    result = Number(first_text) % Number(second_text);
                }
                first_text = result.toString();
                second_text = result.toString();
                document.getElementById("result").innerHTML = first_text;
                document.getElementById("last").innerHTML = second_text;
            default:
                break;
        }
        oper = "";
    }
});


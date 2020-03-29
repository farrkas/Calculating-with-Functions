// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(z) {

    const x = {
        value: 0,
        action: "",
    }
    //if (z.value===null || z.value===undefined) {}
    const y = { value, action } = z;
    let result = { action: y.action }
/*
    switch (result.action) {
        case "add": result.value = x.value + y.value; break;
        case "minus": result.value = x.value - y.value; break;
        case "times": result.value = x.value * y.value; break;
        case "devidedBy":
            if (y.value == 0) { console.log("dzielenie przez 0!!!!!!") }
            else { result.value = x.value + y.value; break; }
        default: break;
    }


*/
    //  return result; 
    if (result.action === null || result.action === undefined) console.log(result);
    else console.log(result.value);
}
function one(z) {
    const x = {
        value: 1,

    }
    return x;
}
function two(z) {
    const x = {
        value: 2,
        action: "",
    }
}
function three(z) {
    const x = {
        value: 3,
        action: "",
    }
}
function four(z) {
    const x = {
        value: 4,
        action: "",
    }
}
function five(z) {
    const x = {
        value: 5,
        action: "",
    }
}
function six(z) {
    const x = {
        value: 6,
        action: "",
    }
}
function seven(z) {
    const x = {
        value: 7,

    }
}
function eight(z) {
    const x = {
        value: 8,
        action: "",
    }
}
function nine(z) {
    const x = {
        value: 9,
        action: "",
    }
}

function plus(z) {
    const x = {
        value: z.value,
        action: "add",
    }
    return x;
}
function minus(z) {
    "minus"
}
function times(z) {
    "times"
}
function dividedBy(z) {
    "devidedBy"
}





var z = {
    value: 1,
    action: "add",
}
zero(plus(one));
//seven(times(five()))  // 35;
//four(plus(nine()))    // 13;
//eight(minus(three())) // 5;
//six(dividedBy(two())) // 3;
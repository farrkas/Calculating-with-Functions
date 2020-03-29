// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
function variable(z, x) {
    if (z != undefined) {
        const y = { value, action } = z;
        let result = { action: y.action, }

        switch (result.action) {
            case "add": result.value = x.value + y.value; break;
            case "minus": result.value = x.value - y.value; break;
            case "times": result.value = x.value * y.value; break;
            case "devidedBy":
                if (y.value == 0) { console.log("dzielenie przez 0!!!!!!") }
                else { result.value = Math.floor(x.value / y.value); break; }
            default: break;
        }
        //console.log("result");
        console.log(result.value);
        return result.value;
    }
    else {
        //console.log("varriable"); console.log(x);
        return x;
    }
}

function zero(q) {
    const x = {
        value: 0,
        action: "",
    }
    const next = variable(q, x);
    //console.log("zero");
    //console.log(next);
    return next;
}
function one(q) {
    const x = {
        value: 1,
    }
    const next = variable(q, x);
    //console.log("one");
    //console.log(next);
    return next;
}
function two(q) {
    const x = {
        value: 2,
        action: "",
    }
    const next = variable(q, x);
    //console.log("two");
    //console.log(next);
    return next;
}
function three(q) {
    const x = {
        value: 3,
        action: "",
    }
    const next = variable(q, x);
    //console.log("three");
    //console.log(next);
    return next;
}
function four(q) {
    const x = {
        value: 4,
        action: "",
    }
    const next = variable(q, x);
    //console.log("four");
    //console.log(next);
    return next;
}
function five(q) {
    const x = {
        value: 5,
        action: "",
    }
    const next = variable(q, x);
    //console.log("five");
    //console.log(next);
    return next;
}
function six(q) {
    const x = {
        value: 6,
        action: "",
    }
    const next = variable(q, x);
    //console.log("six");
    //console.log(next);
    return next;
}
function seven(q) {
    const x = {
        value: 7,
    }
    const next = variable(q, x);
    //console.log("seven");
    //console.log(next);
    return next;
}
function eight(q) {
    const x = {
        value: 8,
        action: "",
    }
    const next = variable(q, x);
    //console.log("eight");
    //console.log(next);
    return next;
}
function nine(q) {
    const x = {
        value: 9,
        action: "",
    }
    const next = variable(q, x);
    //console.log("nine");
    //console.log(next);
    return next;
}

function plus(z) {
    const x = {
        value: z.value,
        action: "add",
    }
    //  console.log("plus "); console.log(x);
    return x;
}
function minus(z) {
    const x = {
        value: z.value,
        action: "minus",
    }
    //console.log("minus "); console.log(x);
    return x;
}
function times(z) {
    const x = {
        value: z.value,
        action: "times",
    }
    //console.log("times "); console.log(x);
    return x;
}
function dividedBy(z) {
    const x = {
        value: z.value,
        action: "devidedBy",
    }
    //console.log("devidedBy "); console.log(x);
    return x;
}


seven(times(five())); console.log("oczekiwane 35");
four(plus(nine())); console.log("oczekiwane 13");
eight(minus(three())); console.log("oczekiwane 5");
six(dividedBy(two())); console.log("oczekiwane 3");
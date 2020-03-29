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
                else { result.value = x.value + y.value; break; }
            default: break;
        }

        //  return result; 
        console.log("one "); console.log(result.value);
    }
    else { console.log(x); return x; }
}
function one(z) {
    const x = {
        value: 1,
    }
    variable(z, x);
}
function two(z) {
    const x = {
        value: 2,
        action: "",
    }

    if (z != undefined) {
        const y = { value, action } = z;
        let result = { action: y.action, }

        switch (result.action) {
            case "add": result.value = x.value + y.value; break;
            case "minus": result.value = x.value - y.value; break;
            case "times": result.value = x.value * y.value; break;
            case "devidedBy":
                if (y.value == 0) { console.log("dzielenie przez 0!!!!!!") }
                else { result.value = x.value + y.value; break; }
            default: break;
        }

        //  return result; 
        console.log("two "); console.log(result.value);
    }
    else { return x; }
}
function three(z) {
    const x = {
        value: 3,
        action: "",
    }

    if (z != undefined) {
        const y = { value, action } = z;
        let result = { action: y.action, }

        switch (result.action) {
            case "add": result.value = x.value + y.value; break;
            case "minus": result.value = x.value - y.value; break;
            case "times": result.value = x.value * y.value; break;
            case "devidedBy":
                if (y.value == 0) { console.log("dzielenie przez 0!!!!!!") }
                else { result.value = x.value + y.value; break; }
            default: break;
        }

        //  return result; 
        console.log("two "); console.log(result.value);
    }
    else { return x; }
}
function four(z) {
    const x = {
        value: 4,
        action: "",
    }

    if (z != undefined) {
        const y = { value, action } = z;
        let result = { action: y.action, }

        switch (result.action) {
            case "add": result.value = x.value + y.value; break;
            case "minus": result.value = x.value - y.value; break;
            case "times": result.value = x.value * y.value; break;
            case "devidedBy":
                if (y.value == 0) { console.log("dzielenie przez 0!!!!!!") }
                else { result.value = x.value + y.value; break; }
            default: break;
        }

        //  return result; 
        console.log("two "); console.log(result.value);
    }
    else { return x; }
}
function five(z) {
    const x = {
        value: 5,
        action: "",
    }

    if (z != undefined) {
        const y = { value, action } = z;
        let result = { action: y.action, }

        switch (result.action) {
            case "add": result.value = x.value + y.value; break;
            case "minus": result.value = x.value - y.value; break;
            case "times": result.value = x.value * y.value; break;
            case "devidedBy":
                if (y.value == 0) { console.log("dzielenie przez 0!!!!!!") }
                else { result.value = x.value + y.value; break; }
            default: break;
        }

        //  return result; 
        console.log("two "); console.log(result.value);
    }
    else { return x; }
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
    console.log("plus "); console.log(x);
    return x;
}
function minus(z) {
    const x = {
        value: z.value,
        action: "minus",
    }
    console.log("minus "); console.log(x);
    return x;
}
function times(z) {
    const x = {
        value: z.value,
        action: "times",
    }
    console.log("times "); console.log(x);
    return x;
}
function dividedBy(z) {
    const x = {
        value: z.value,
        action: "devidedBy",
    }
    console.log("devidedBy "); console.log(x);
    return x;
}

one(plus(one()));
//seven(times(five()))  // 35;
//four(plus(nine()))    // 13;
//eight(minus(three())) // 5;
//six(dividedBy(two())) // 3;
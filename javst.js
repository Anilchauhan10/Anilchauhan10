
function calc(option) {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let result;
    if (option == "add") {
        result = `sum of the number is ${Number(a) + Number(b)}`;
    } else {
        result = `Sub of the number is ${Number(a) - Number(b)}`;
    }
    document.getElementsByClassName("outing")[0].innerText = result;

}


function myFunction(submission) {
    let p = document.getElementById("first").value;
    let q = document.getElementById("second").value;
    let final;
    if ( == "plus") {
        final = `sub of the number is ${Number(p) + Number(q)}`;

    } else {
        final = `sub of the number is ${Number(p) - Number(q)}`;

    }
    document.getElementsByClassName("duting")[0].innerText = final;
}


function myResult(decision) {
    let s = document.getElementById("first").value;
    let t = document.getElementById("second").value;
    let submission;
    if (decision == "plus") {
        submission = `the sum of the num is ${Number(s) + Number(t)}`;

    } else {
        submission = `the sub of the num is ${Number(s) - Number(t)}`;
    }
    document.getElementsByClassName()[0].innerText = submission;
}


function yourFunction(your) {
    let w = document.getElementById("ink").value;
    let x = document.getElementById("pink").value;
    let fuck;
    if (your == "plust") {
        fuck = `the sum of the number is ${Number(w) * Number(x)}`;
    }
    else {
        fuck = `the sub of the numbr is ${Number(w) % Number(x)}`;

    }
    document.getElementsByClassName("faltu")[0].innerText = fuck;
}
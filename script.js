function square() {
    let n = Number(document.getElementById("rows").value);
    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            output += "* ";
        }
        output += "\n";
    }
    show(output);
}

function triangle() {
    let n = Number(document.getElementById("rows").value);
    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += "* ";
        }
        output += "\n";
    }
    show(output);
}

function numberTriangle() {
    let n = Number(document.getElementById("rows").value);
    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        output += "\n";
    }
    show(output);
}

function show(text) {
    document.getElementById("result").innerText = text;
}

document.getElementById("output__trigger").addEventListener("click", parse);

function parse() {
    // Define character codes
    const I = 73;
    const V = 86;
    const X = 88;
    const L = 76;
    const C = 67;

    const i = 105;
    const v = 118;
    const x = 120;
    const l = 108;
    const c = 99;

    const dot = 46;
    const next = 62;

    const program = document.getElementById("program__value").value;
    let parsed = "";
    let size = 30000;
    let ptrs = Array(size).fill(0);
    let index = 0;
    for (let idx = 0; idx < program.length; idx++) {
        let ch = program.charCodeAt(idx);

        // Darn you single quote == double quote
        switch (ch) {
            case I: case i:
                ptrs[index] += 1;
                break;
            case V: case v:
                ptrs[index] += 5;
                break;
            case X: case x:
                ptrs[index] += 10;
                break;
            case L: case l:
                ptrs[index] += 50;
                break;
            case C: case c:
                ptrs[index] += 100;
                break;
            case dot:
                parsed += String.fromCharCode(ptrs[index]);
                break;
            case next:
                index += 1;
                break;
            default: break;
        }
    }
    console.log(ptrs);
    document.getElementById("output__value").innerHTML = parsed;
}


function fileSelected(input) {
    var file = input.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function(evt) {
            document.getElementById("output").innerHTML = evt.target.result;
        }
        reader.onerror = function(evt) {
            alert("Failed to read file");
            document.getElementById("output").innerHTML = ":(";
        }
    }
}

function openFile() {
    document.getElementById('fileIn').click();
}


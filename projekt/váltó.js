
function Binaryon() {
selectElement=document.querySelector('#lista');
akarat=selectElement.value
}
function Binaryon2() {
    selectElement=document.querySelector('#lista2');
    akarat2=selectElement.value
    }
    
function conver() {
if ("decisz" == akarat){

    if (binary2 ==akarat2){var rem, binary = 0, i = 1;
    var deci = Number(document.getElementById("number1").value);
    while (deci > 0) {
        rem = deci % 2;
        deci = parseInt(deci / 2);
        binary = binary + (i * rem);
        i = i * 10;
    }
    document.getElementById("ertek").value = binary;}

    if (octalsz2 == akarat2) {
            var decoo = Number(document.getElementById("number1").value);
            var octal = decoo.toString(8);
            document.getElementById("ertek").value = octal;
        }
    if (hexasz2 == akarat2) {
            var hhh = Number(document.getElementById("number1").value);
            var hexa = hhh.toString(16);
            document.getElementById("ertek").value = hexa;
        }
        }













        if (hexasz == akarat){
    var hhh = Number(document.getElementById("number1").value);
            var hexa = hhh.toString(10);
            document.getElementById("Hexa").value = hexa;
}

if (octal == akarat){

}

if (binary == akarat){

}
                        
}
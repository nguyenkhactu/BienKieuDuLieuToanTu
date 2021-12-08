function caihhoten() {
    let ht = prompt("Họ Tên")
    document.getElementById("hoten").innerHTML=ht


}

function tinhtong() {
    let x = parseInt(document.getElementById("vatly").value);
    let h = parseInt(document.getElementById("hoahoc").value);
    let s = parseInt(document.getElementById("sinhhoc").value);
    let tong=x+h+s;
    document.getElementById("ttong").innerHTML=tong
}
function tinhtb() {
    let x = parseInt(document.getElementById("vatly").value);
    let h = parseInt(document.getElementById("hoahoc").value);
    let s = parseInt(document.getElementById("sinhhoc").value);
    let trungb = (x+h+s)/3;
    document.getElementById("tb").innerHTML=trungb;

}
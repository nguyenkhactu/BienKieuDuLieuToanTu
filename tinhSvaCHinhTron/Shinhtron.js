function dientich() {
    let R= parseInt(document.getElementById("bankinh").value);
    let S = Math.pow(R,2)*3.14;
    document.getElementById("dient").innerHTML=S;
    let C = 2*R*3.14;
    document.getElementById("chuvi").innerHTML=C;

}
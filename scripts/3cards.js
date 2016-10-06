//"Baza" obrazków
function losuj() {
    var myImages1 = Math.floor((Math.random() * 15) + 1);
    var myImages = "grafiki/image" + myImages1 + ".jpg";
    return myImages;
}
//Klikniêcia
var count = 0;

//Pierwszy obrazek, losowanie
function clickHandler1() {
    var celnie1 = document.getElementById("jeden").style.backgroundImage = "url('" + losuj() + "')";
    console.log(losuj());
    if (celnie1 == "url('grafiki/image1.jpg')") {
        count++;
        document.getElementById("count").innerHTML = count;
    } else {
        document.getElementById("jeden").removeEventListener('click', clickHandler1);
    }
    return count;
}
document.getElementById("jeden").addEventListener('click', clickHandler1);

//Drugi obrazek, losowanie
function clickHandler2() {
    var celnie2 = document.getElementById("dwa").style.backgroundImage = "url('" + losuj() + "')";
    console.log(losuj());
    if (celnie2 == "url('grafiki/image1.jpg')") {
        count++;
        document.getElementById("count").innerHTML = count;
    } else {
        document.getElementById("dwa").removeEventListener('click', clickHandler2);
    }
    return count;
}
document.getElementById("dwa").addEventListener('click', clickHandler2);

//Trzeci obrazek, losowanie
function clickHandler3() {
    var celnie3 = document.getElementById("trzy").style.backgroundImage = "url('" + losuj() + "')";
    console.log(losuj());
    if (celnie3 == "url('grafiki/image1.jpg')") {
        count++;
        document.getElementById("count").innerHTML = count;
    } else {
        document.getElementById("trzy").removeEventListener('click', clickHandler3);
    }
    return count;
}
document.getElementById("trzy").addEventListener('click', clickHandler3);

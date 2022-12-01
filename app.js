// -------------------------------------------------
// var a1 = document.getElementById('day1-1');
// var a2 = document.getElementById('day2-1');
// var a3 = document.getElementById('day3-1');
// var a4 = document.getElementById('day4-1');
// var a5 = document.getElementById('day5-1');
// var d1 = a1.value;
// var d2 = a2.value;
// var d3 = a3.value;
// var d4 = a4.value;
// var d5 = a5.value;

// var dtext1 = document.getElementById("text1-1");
// var dtext2 = document.getElementById("text1-2");
// var dtext3 = document.getElementById("text1-3");
// var dtext4 = document.getElementById("text1-4");
// var dtext5 = document.getElementById("text1-5");
// var text1 = dtext1.value;
// var text2 = dtext2.value;
// var text3 = dtext3.value;
// var text4 = dtext4.value;
// var text5 = dtext5.value;

// console.log("1 урок "+d1 + " Д.З " +text1);
// console.log("2 урок "+d2 + " Д.З " +text2);
// console.log("3 урок "+d3 + " Д.З " +text3);
// console.log("4 урок "+d4 + " Д.З " +text4);
// console.log("5 урок "+d5 + " Д.З " +text5);

// localStorage.setItem('day1',d1 +' д/з '+ text1 );
// localStorage.setItem('day2',d2 +' д/з '+ text2 );
// localStorage.setItem('day3',d3 +' д/з '+ text3 );
// localStorage.setItem('day4',d4 +' д/з '+ text4 );
// localStorage.setItem('day5',d5 +' д/з '+ text5 );
// ---------------------------------------------------------

// var date1 = document.getElementById("dadate");
// var data = date1.value;

// console.log(data)

// document.write(localStorage.getItem('day1'));
// document.write(localStorage.getItem('day2'));
// document.write(localStorage.getItem('day3'));
// document.write(localStorage.getItem('day4'));
// document.write(localStorage.getItem('day5'));

var dada = (localStorage.getItem('date'));

var label1 = (localStorage.getItem('day1'));
var label2 = (localStorage.getItem('day2'));
var label3 = (localStorage.getItem('day3'));
var label4 = (localStorage.getItem('day4'));
var label5 = (localStorage.getItem('day5'));
var label6 = (localStorage.getItem('day6'));
var label7 = (localStorage.getItem('day7'));
var coment1 = (localStorage.getItem('com'));

document.getElementById("dada").innerHTML = dada;

document.getElementById("label1").innerHTML = label1;
document.getElementById("label2").innerHTML = label2;
document.getElementById("label3").innerHTML = label3;
document.getElementById("label4").innerHTML = label4;
document.getElementById("label5").innerHTML = label5;
document.getElementById("label6").innerHTML = label6;
document.getElementById("label7").innerHTML = label7;
document.getElementById("coment1").innerHTML = coment1;



function dataaad() {
    var ad1 = document.getElementById('etad');
    var dd1 = ad1.value;
    // console.log(dd1);
    localStorage.setItem('date',dd1);

    
}

function dnevnic1(){
    var a1 = document.getElementById('day1-1');
    var d1 = a1.value;
    var dtext1 = document.getElementById("text1-1");
    var text1 = dtext1.value;
    // console.log("1 урок "+d1 + " Д.З " +text1);
    localStorage.setItem('day1',"1 "+d1 +' : '+ text1 );
}

function dnevnic2(){
    var a2 = document.getElementById('day2-1');
    var d2 = a2.value;
    var dtext2 = document.getElementById("text1-2");
    var text2 = dtext2.value;
    // console.log("2 урок "+d2 + " Д.З " +text2);
    localStorage.setItem('day2',"2 "+d2 +' : '+ text2 );
}
function dnevnic3(){
    var a3 = document.getElementById('day3-1');
    var d3 = a3.value;
    var dtext3 = document.getElementById("text1-3");
    var text3 = dtext3.value;
    // console.log("3 урок "+d3 + " Д.З " +text3);
    localStorage.setItem('day3',"3 "+d3 +' : '+ text3 );
}
function dnevnic4(){
    var a4 = document.getElementById('day4-1');
    var d4 = a4.value;
    var dtext4 = document.getElementById("text1-4");
    var text4 = dtext4.value;
    // console.log("4 урок "+d4 + " Д.З " +text4);
    localStorage.setItem('day4',"4 "+d4 +' : '+ text4 );
    
}
function dnevnic5(){
    var a5 = document.getElementById('day5-1');
    var d5 = a5.value;
    var dtext5 = document.getElementById("text1-5");
    var text5 = dtext5.value;
    // console.log("5 урок "+d5 + " Д.З " +text5);
    localStorage.setItem('day5',"5 "+d5 +' : '+ text5 );
}
function dnevnic6(){
    var a6 = document.getElementById('day6-1');
    var d6 = a6.value;
    var dtext6 = document.getElementById("text6-1");
    var text6 = dtext6.value;
    // console.log("6 урок "+d6 + " Д.З " +text6);
    localStorage.setItem('day6',"6 "+d6 +' : '+ text6 );
}
function dnevnic7(){
    var a7 = document.getElementById('day7-1');
    var d7 = a7.value;
    var dtext7 = document.getElementById("text7-1");
    var text7 = dtext7.value;
    // console.log("7 урок "+d7 + " Д.З " +text7);
    localStorage.setItem('day7', "7 "+d7 +' : '+ text7 );
}
function dnevnic8(){
    var coment = document.getElementById("coment");
    var coment1 = coment.value;
    // console.log(coment1);
    localStorage.setItem('com',coment1)
    

    
}

function clear_D (){
    localStorage.removeItem('com');
    localStorage.removeItem('day1');
    localStorage.removeItem('day2');
    localStorage.removeItem('day3');
    localStorage.removeItem('day4');
    localStorage.removeItem('day5');
    localStorage.removeItem('day6');
    localStorage.removeItem('day7')

    console.log('asdad')

}
function dnevnic_d (){
    var ad1 = document.getElementById('etad');
    var dd1 = ad1.value;
    // console.log(dd1);
    localStorage.setItem('date',dd1);

    var a1 = document.getElementById('day1-1');
    var d1 = a1.value;
    var dtext1 = document.getElementById("text1-1");
    var text1 = dtext1.value;
    // console.log("1 урок "+d1 + " Д.З " +text1);
    localStorage.setItem('day1',"1 "+d1 +' : '+ text1 );

    var a2 = document.getElementById('day2-1');
    var d2 = a2.value;
    var dtext2 = document.getElementById("text1-2");
    var text2 = dtext2.value;
    // console.log("2 урок "+d2 + " Д.З " +text2);
    localStorage.setItem('day2',"2 "+d2 +' : '+ text2 );

    var a3 = document.getElementById('day3-1');
    var d3 = a3.value;
    var dtext3 = document.getElementById("text1-3");
    var text3 = dtext3.value;
    // console.log("3 урок "+d3 + " Д.З " +text3);
    localStorage.setItem('day3',"3 "+d3 +' : '+ text3 );

    var a4 = document.getElementById('day4-1');
    var d4 = a4.value;
    var dtext4 = document.getElementById("text1-4");
    var text4 = dtext4.value;
    // console.log("4 урок "+d4 + " Д.З " +text4);
    localStorage.setItem('day4',"4 "+d4 +' : '+ text4 );

    var a5 = document.getElementById('day5-1');
    var d5 = a5.value;
    var dtext5 = document.getElementById("text1-5");
    var text5 = dtext5.value;
    // console.log("5 урок "+d5 + " Д.З " +text5);
    localStorage.setItem('day5',"5 "+d5 +' : '+ text5 );

    var a6 = document.getElementById('day6-1');
    var d6 = a6.value;
    var dtext6 = document.getElementById("text6-1");
    var text6 = dtext6.value;
    // console.log("6 урок "+d6 + " Д.З " +text6);
    localStorage.setItem('day6',"6 "+d6 +' : '+ text6 );

    var a7 = document.getElementById('day7-1');
    var d7 = a7.value;
    var dtext7 = document.getElementById("text7-1");
    var text7 = dtext7.value;
    // console.log("7 урок "+d7 + " Д.З " +text7);
    localStorage.setItem('day7', "7 "+d7 +' : '+ text7 );
    

}


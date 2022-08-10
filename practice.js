function display(val){

    document.getElementById('result').value += val

    return val

}

function clearScreen(){

    document.getElementById('result').value = ''

}

function solve(){

    let x = document.getElementById('result').value


//     var a = x.split("");
// if(a.findOne('/')){
//     var b = a.indexOf('/');
//     var c  = a[--b];
//     var d = a[+b];
//     return y= c/d;
// }

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}




//     function plus(){
//         let a = Number(document.getElementById('firstnum').value);
//         let b = Number(document.getElementById('Secondnum').value);
//       let c =a+b;
//       document.getElementById('result').innerHTML = `Result of addition is ${c}`;
//     }


//     function sub(){
//         let a = Number(document.getElementById('firstnum').value);
//         let b = Number(document.getElementById('Secondnum').value);
//         let c =a-b;
//         document.getElementById('result').innerHTML = `Result of Subtraction is ${c}`;
//       }

//       function mult(){
//         let a = Number(document.getElementById('firstnum').value);
//         let b = Number(document.getElementById('Secondnum').value);
//         let c =a*b;
//         document.getElementById('result').innerHTML =`Result of Multiplication is ${c}`;
//       }

//       function div(){
//         let a = Number(document.getElementById('firstnum').value);
//         let b = Number(document.getElementById('Secondnum').value);
//         let c =a/b;
//         document.getElementById('result').innerHTML =`Result of division is ${c}`;
//       }

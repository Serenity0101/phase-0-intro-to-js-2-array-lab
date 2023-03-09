var cats = []
var cats = [`Milo`, `Otis`, `Garfield`]
// var gives a varible list 

function destructivelyAppendCat(name){
    // gave name in test
    cats.push(name);
    // push adds to end of array 
    return cats;

}
function  destructivelyPrependCat(name){
    //name in test 
    cats.unshift(name);
    //adds to a strt of array 
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop();
    // .pop removes last element of array
    return cats
}
function  destructivelyRemoveFirstCat(){
    cats.shift();
//.shift removes first element 
    return cats;
}
function appendCat(name){
    var name_1= [...cats, name];
    //
    return name_1;
}

function prependCat(name){
    var name_2=[name,...cats];
    return name_2
}
function removeLastCat(){
    var caats= cats.slice(0,cats.length-1)
    return caats
}

function removeFirstCat(){
    var catts=cats.slice(1)
    return catts
}
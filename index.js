// Write your solution here!
let cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
};
function destructivelyRemoveLastCat(){
    cats.pop()
};
function destructivelyRemoveFirstCat() {
    cats.shift()
};
function appendCat(name){
    let newCats= [...cats,"Broom"];
    return newCats;
};
function prependCat(){
    let newCats=["Arnold",...cats]
    return newCats
};
function removeLastCat(){
    const newCats=cats.slice(0,cats.length -1)
    return newCats
};
function removeFirstCat(){
    const newCats=cats.slice(1,3);
    return newCats;
};
function add(a,b){
    return b,a
}

add(1,2)
2


function add(a,b){
    var out = [a,b]
    return out
}


var a = 10

a>10 ?"Hii":"Bie"


map 

var city = ["London","Delhi","NewYork"]
city.map((data) => { return `My City is ${data}`})
["My City is London", "My City is Delhi", "My City is NewYork"]


//String literal
//es5
var a ="My age is "
var b = 10
"My age is "+b 
"My age is 10"

//es6
var a ="My age is "
var b = 10

`My age is ${b}`
"My age is 10"
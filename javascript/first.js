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

var a= [0,1,2,3]
a.map((data) => {return data*2})
[0,2,4,6]

a.filter((data) => {return data*2})
[1, 2, 3]

var city = ["Delhi","Mumbai","Amsterdam","London"]
city.indexOf("Delhi")
0
city.indexOf("London")
3
city.indexOf("Paris")
-1
var a = [3,6,8,4,4,7,9]
a.filter((data) => {return data>5})

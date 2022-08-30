// const Fruits = ['Shalgham', 'Mango', 'Kado Gul', 'Apple']

// document.write(Fruits[0])
// document.write(Fruits[1])
// document.write(Fruits[2])
// document.write(Fruits[3])


const car = {name:'Rolls Royce _|', Model:'2019 _|', Color:'Black _|', Engine:'V8'}

// document.write(car.name)
// document.write(car.Model)
// document.write(car.Color)
// document.write(car.Engine)


// for(let key in car){
//     document.write(car[key])
// }



// function bootDeleivery(p1)
// {

//     alert('take the '+p1+'');
//     alert('go take me bread')
//     alert('move straight');
//     alert('turn left');
//     alert('move');
//     alert('move');
//     alert('move');
//     alert('move');
//     alert('turn right');
//     alert('give the '+p1+' to Beakry');
//     alert('Buy Bread')
//     alert('Come Back');
//     alert('Give me the remaining money')
// }

// bootDeleivery('Money')




// var mybread;
// var mychange;

// function goGetBread(MyBadge, breadprices)
// {
//     mychange = Math.floor(MyBadge%breadprices);
//     mybread = Math.floor(MyBadge/breadprices);
//     document.write("Number of Bread:" +mybread)
//     document.write("My Change Money:" +mychange)
// }
// goGetBread(333, 20)



// function sumOfTwoNumber(a, b)
// {
//     return a + b


// }
// var total = sumOfTwoNumber(20, 10)

// document.write(total)

// function myName(name)
// {

//     return "Your Name is :" +name;

// }
// document.write()

// var temp;

// function temprature(a)
// {
   
//     temp = Math.floor(5/9*a-32)
//     document.write("Celsius :" +temp)
// }
// temprature(10)

function sayhi()
{
    document.getElementById('demo').src="./images (1).jpg"
    document.getElementById('heart').style="display:none"
    document.getElementById('happy').style="display:block"
    
}

function sayhello()
{
    document.getElementById('demo').src="./download.jpg"
    document.getElementById('happy').style="display:none"
    document.getElementById('heart').style="display:block"
}
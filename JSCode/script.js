
const person={
    name:"sm roton",
    age:25,
    height:5.6,
    location:"Munshigsnj",
    inforObj:{
        favColor:"White",
        favFood:"Beef"

    }

};
person.age=30;
console.log("Name: "+person.name+", Age: "+person.age+", Height: "+person.height+", Location: "+person.location);
console.log("Color: "+person.inforObj.favColor+", Food: "+person.inforObj.favFood);
//map
let numbers=[1,2,3,4,5,6,7,8];
const result=numbers.map(number=>
    number*2
)
console.log(result);
const heroName=[
  {name:"Robel",Age:47,Country:"BD"},
  {name:"Salman",Age:56,Country:"India"},
  {name:"Manna",Age:50,Country:"BD"},
  {name:"Sakib",Age:49,Country:"BD"},
  {name:"Fawad",Age:50,Country:"Pakistan"}
];

const searchByAge=heroName.filter((hero)=>hero.Age >= 55);
console.log(searchByAge);

//reduce method
const shoppingCart=[
    {name:"Robel",price:47},
    {name:"Salman",price:56},
    {name:"Manna",price:47},
    {name:"Sakib",price:47},
    {name:"Fawad",price:47}
  ];

  const totalPrice=shoppingCart.reduce((initialVal,item)=>{
    return initialVal + item.price;
  },0);

  console.log(totalPrice);
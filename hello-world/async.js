let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

function toppings_choice (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
        resolve( console.log("which topping would you love?") )
  
      },3000)
    })
  }
// async function kitchen(){

//     console.log("A")
//     console.log("B")
//     console.log("C")
    
//     await toppings_choice()
    
//     console.log("D")
//     console.log("E")
  
//   }
  
  // Trigger the function
  
//   kitchen();
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking orders")

let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(1000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
kitchen();

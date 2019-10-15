var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "VDBVZM5z",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

connection.query("SELECT * FROM products",
function(err, res){
    
    
    if(err){
        console.log(err);
    }
    else{
        for(var i =0; i< res.length;i++){
           console.log("Item ID: " + res[i].item_id); 
           console.log("Product Name: " + res[i].product_name); 
           console.log("Price: " + res[i].price + "\n"); 
        }
        getPurchase(res.length);
    }
})

function getPurchase(num){
    inquirer.prompt([
        
        {
            message: "What is the item Id of the item you would like.",
            name: "id"
        },
        {
            message: "What is the quantity of the item you would like to purchase.",
            name: "purchaseQuantity"
        }
      ]).then(function(answers) {
          if(num>=answers.id){
              checkDataBase(answers.id, answers.purchaseQuantity)
          }
          else{
              console.log("There is no item by that id.");
              connection.end();
          }
        
      });
}

function checkDataBase(item, quantity){
    connection.query("SELECT * FROM products WHERE ?", [{
        item_id: item
    }],
        
    function(err, res){
        if(err){
            console.log(err);
        }
        else{
            if(res[0].stock_quantity > quantity){

                sendOrder(item,res[0].stock_quantity-quantity,quantity, res[0].price);
            }
            else{
                console.log("Insufficient quantity!");
                connection.end();
            }
        }
    })
}

function sendOrder(item, quantity, numOfProduct, price){
    connection.query("UPDATE products SET ? WHERE ?", [
        {
            stock_quantity: quantity
        },
        {
            item_id: item
        }
    ],
    function(err, res1) {
        console.log("Total Price of Purchase: $"+ price*numOfProduct);
        connection.end();
      }
    )
}
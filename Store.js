console.log("Javascript asynchronous");

// var all = document.getElementById("All");
// var fruits = document.getElementById("Fruit");
// var cookies = document.getElementById("Cookies");
// var ice = document.getElementById("IceCream");
// var cake = document.getElementById("Cake");

var allProduct = document.getElementsByClassName("card");
var total = allProduct.length;

// Array for fruits
var allFruits = []

// Array for cookies
var allCookies = []

// Array for IceCream
var allIceCreams = [];

// Array for Cake
var allCakes = [];


for(var i=0; i<total; i++)
{
    var val = "";
    if(allProduct[i].id == "Fruit")
    {
        val = allProduct[i]
        allFruits.push(val);
    }
    if(allProduct[i].id == "Cookies")
    {
        val = allProduct[i];
        allCookies.push(val);
    }
    if(allProduct[i].id == "IceCream")
    {
        val = allProduct[i];
        allIceCreams.push(val);
    }
    if(allProduct[i].id == "Cake")
    {
        val = allProduct[i];
        allCakes.push(val);
    }
}

function AllProduct()
{
    for(var i = 0; i < allProduct.length; i++)
    {
        allProduct[i].style.display = "inline-block";
    }
}

function AllFruits()
{
    for(var i = 0; i < allProduct.length; i++)
    {
        allProduct[i].style.display = 'none';
    }

    for(var i = 0; i < allFruits.length; i++)
    {
        allFruits[i].style.display = "inline-block";
    }
}

function AllCookies()
{
    for(var i = 0; i < allProduct.length; i++)
    {
        allProduct[i].style.display = 'none';
    }

    for(var i = 0; i < allCookies.length; i++)
    {
        allCookies[i].style.display = "inline-block";
    }
}

function AllIceCreams()
{
    for(var i = 0; i < allProduct.length; i++)
    {
        allProduct[i].style.display = 'none';
    }

    for(var i = 0; i < allIceCreams.length; i++)
    {
        allIceCreams[i].style.display = "inline-block";
    }
}

function AllCakes()
{
    for(var i = 0; i < allProduct.length; i++)
    {
        allProduct[i].style.display = 'none';
    }

    for(var i = 0; i < allCakes.length; i++)
    {
        allCakes[i].style.display = "inline-block";
    }
}
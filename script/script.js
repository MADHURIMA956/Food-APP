// category food 

let food_Id = document.getElementById("slider_track");

async function getfoodData(){

    try{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

        let data = await res.json();
        console.log(data.categories)
        showWholefood_data(data.categories)
    }catch(e){
        console.log(e);
    }
}

function showWholefood_data(food){

   // food.innerText = null;
    food.forEach((f)=>{

        let div = document.createElement('div');
        div.setAttribute('class', 'slide')

        let img = document.createElement('img');
        img.src = f.strCategoryThumb;
       
        let strCategory = document.createElement('p');
        strCategory.textContent = f.strCategory;
    
        div.append(img,strCategory);
        food_Id.append(div)

    })
    
}


getfoodData()


// food data

let food_data = document.getElementById("container");

async function getfood(){

    try{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);

        let data = await res.json();
        console.log(data.meals)
        showWholefood(data.meals)
    }catch(e){
        console.log(e);
    }
}

function showWholefood(food){

   // food.innerText = null;
    food.forEach((f)=>{

        let div = document.createElement('div');
        div.setAttribute('class', 'box')

        let img = document.createElement('img');
        img.src = f.strMealThumb;
       
        let strMeal = document.createElement('p');
        strMeal.textContent = f.strMeal;
    
        div.append(img,strMeal);
        food_data.append(div)

    })
    
}


getfood();


// popular recipes page location

function popularRecipesPage(){
    window.location.href = 'latest.html';
}


// search food data

let search = document.getElementById("search_data");

async function searchData(){
   
     let food = document.getElementById("query").value ;
     document.getElementById("query").value ='';
     try{
   
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`);
   
        let data = await res.json();

        console.log(data.meals) ;
        searchFood(data.meals);
     }catch(e){
         let message = `Search result : ${food} is not found`;
        alert(message);
       console.log("error",e);
     }
  

}

function searchFood(food){
    search.innerText = null;

    
    food.forEach((f)=>{

        let div = document.createElement('div');
        div.setAttribute('class', 'searchDiv')

        let img = document.createElement('img');
        img.src = f.strMealThumb;

        let strTags= document.createElement('p');
        strTags.textContent = f.strTags;
        strTags.style.background = 'red';

        let strYoutube= document.createElement('a');
        strYoutube.href = f.strTags;

        div.append(img,strTags,strYoutube);
        search.append(div);

        let one = document.getElementById('inner_Div');
        one.style.display = "none";
        let two = document.getElementById('main_div');
        two.style.display = "none";
        let three = document.getElementById('outer_container');
        three.style.display = "none";

    });
    
}


// random recipes latest recipes for the days



let recipes = document.getElementById("latest_recipes");

async function latestRecipes(){
  
     try{
   
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
   
        let data = await res.json();

        console.log(data.meals) ;
        showRandomRecipes(data.meals);

     }catch(e){
         let message = `Latest Recipe is not available`;
        alert(message);
       
     }
  

}


function showRandomRecipes(food){
    recipes.innerText = null;

    food.forEach((f)=>{

        let div_main = document.createElement('div');
        div_main.setAttribute('class', 'box_main')


        let main = document.createElement('div');
        main.setAttribute('class', 'main')

        let img = document.createElement('img');
        img.src = f.strMealThumb;

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'box2')
       
        let  strIngredient1 = document.createElement('p');
        strIngredient1.textContent =" Ingredient :  "+ f.  strIngredient1;
        let  strIngredient2 = document.createElement('p');
        strIngredient2.textContent = f.  strIngredient2;
        let  strIngredient3 = document.createElement('p');
        strIngredient3.textContent = f.  strIngredient3;
        let  strIngredient4 = document.createElement('p');
        strIngredient4.textContent = f.  strIngredient4;
        let  strIngredient5 = document.createElement('p');
        strIngredient5.textContent = f.  strIngredient5;
        let  strIngredient6 = document.createElement('p');
        strIngredient6.textContent = f.  strIngredient6;
        let  strIngredient7 = document.createElement('p');
        strIngredient7.textContent = f.  strIngredient7;
        let  strIngredient8 = document.createElement('p');
        strIngredient8.textContent = f.  strIngredient8;
        let  strIngredient9 = document.createElement('p');
        strIngredient9.textContent = f.  strIngredient9;
        let  strIngredient10 = document.createElement('p');
        strIngredient10.textContent = f.  strIngredient10;
        let  strIngredient11 = document.createElement('p');
        strIngredient11.textContent = f.  strIngredient11;
        let  strIngredient12 = document.createElement('p');
        strIngredient12.textContent = f.  strIngredient12;
        let  strIngredient13 = document.createElement('p');
        strIngredient13.textContent = f.  strIngredient13;

        div2.append(strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13)

        let strTags= document.createElement('p');
        strTags.textContent = f.strTags;
        strTags.style.background = 'green';

        let strYoutube= document.createElement('a');
        strYoutube.href = f.strTags;

        div_main.append(strTags,div2,strYoutube)
        main.append(img,div_main)
        recipes.append(main)

    });
    
}
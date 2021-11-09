
// popular recipes

let parent = document.getElementById("recipes_data");

async function popularRecipes(){
  
     try{
   
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`);
   
        let data = await res.json();

        console.log(data.meals) ;
        showFoodRecipes(data.meals);

     }catch(e){
         let message = `food is not found`;
        alert(message);
        console.log("popular recipe error",e)
     }
  

}


function showFoodRecipes(food){
    parent.innerText = null;

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
        parent.append(main)

    });
    
}
popularRecipes();


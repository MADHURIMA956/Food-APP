function navbar(){
    return `
    
    
    <div class="flexdiv">
        <a href="index.html"><img id="logo" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt=""></a> 
    </div>
    
    <div class="search-box flexdiv">
        <input  id="query" type="text" placeholder="Search food">
        <img onclick="searchData()" class="searchIcon" src="https://cdn.iconscout.com/icon/free/png-256/search-1399-475061.png" alt="">
    </div>
   
    <div class="flexdiv">
        <div><a href="signIn.html"><button class="nav_btn">Log-in</button></a></div>
        <div><a href="signUp.html"><button class="nav_btn">Sign-up</button></a></div>
    </div>

    `
}

export default navbar;
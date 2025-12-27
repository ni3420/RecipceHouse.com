const popularurl=`https://www.themealdb.com/api/json/v1/1/random.php`
let populardata=null
const icon=document.querySelector("#icon")
let trendingdata=null;
const hiddencards=document.querySelector(".popular .hidden-card")
const Trendinghiddencard=document.querySelector(".Trending .hidden-card")

const More=document.querySelector(".popular #More")
let count=0;
const gettrendingdata=async () => {
  for(let i=0;i<8;i++)
  {
  const res=await fetch(popularurl)
  trendingdata=await res.json()
  console.log(trendingdata)
  Trending()
  Trendinghidden()

  }
  
}
gettrendingdata()
const getpopulardata=async () => {
 for(let i=0;i<8;i++)
  {
  const res=await fetch(popularurl)
  populardata=await res.json()
  console.log(populardata)
  popular()
  popularhidden()
  }
  
}
getpopulardata()
// load id fuction into loaclastorage//
function loadid(id)
{
  localStorage.setItem("id",JSON.stringify(id))
}
//get the id from loaclstroage//
function getid() {
  const data = localStorage.getItem("id");
  return data ? JSON.parse(data) : null;
}

let addid;
let getidno=getid()
console.log(getidno)
//liked recipces load localstorage//
function loadlike(idMeal)
{
  const like={
    idMeal:idMeal

  }
  localStorage.setItem("like",JSON.stringify(like));
}
//get the like from localstore//
function getlike()
{
  const like=localStorage.getItem("like")
  return like?JSON.parse(localStorage.getItem("like")):null;
}
let recipe=[]
let getlikerecipces=getlike()

//like funtion//
  function loadcounter(counter)
  {
    localStorage.setItem("counter",JSON.stringify(counter))
  }
  //getcounter//
  function getcounter()
  {
    const counter=localStorage.getItem("counter")
    return counter?JSON.parse(counter):null;
  }
  let getfavcounter=getcounter();
  console.log(getfavcounter,"oyet");
  icon.innerHTML=getfavcounter;

function popular()

{
const cards=document.querySelector(".popular .card-grid")
    
    
    let box=document.createElement("div")
    box.className="recipe-card"
    box.innerHTML=`    <div class="recipe-img">
      <img src=${populardata.meals[0].strMealThumb} alt="" id="recipe-img">
      </div>
      <div class="recipe-content">
        <button class="watchlist">❤</button>
        <span id="idMeal">${populardata.meals[0].idMeal}</span>
    <span id="rating">${populardata.meals[0].strArea}</span>
        <h3>${populardata.meals[0].strMeal}</h3>
      </div>
  
  `;
  cards.appendChild(box)
  box.addEventListener("click",()=>{
    const ideMeal=box.querySelector("#idMeal")
    addid=ideMeal.innerHTML;
    loadid(addid)
    window.location.href="mealinfo.html"
  })
  const watchlist=box.querySelector(".watchlist")
  watchlist.addEventListener("click",(e)=>{
    e.stopPropagation();

watchlist.classList.toggle("like")
console.log(e.target.nextElementSibling.innerHTML)
console.log(e)
if(e.target.classList.contains("like"))
{
   const alreadySaved = recipe.some(item => item.idMeal === idMeal);
if(alreadySaved)
{
  alert("already")
  return
}
  count=count+1
loadcounter(count)
let go=getcounter()
   console.log(go,"inner");

   icon.innerHTML=go;

  console.log(e.target.className)
    recipe.push({
      idMeal:e.target.nextElementSibling.innerHTML
    })
    loadlike(recipe);
  }else{
    recipe = recipe.filter(item => item.idMeal !== e.target.nextElementSibling.innerHTML);
    loadlike(recipe)
    console.log(getlikerecipces);
    count--
    loadcounter(count)
    let go=getcounter()
    icon.innerHTML=go;
    console.log(getfavcounter)

    
    

  }  })

}
//see more button funtion showing the hidden cards//
More.addEventListener("click",()=>{
  if(More.innerHTML==="See More")
  {
    More.innerHTML="Less item"
hiddencards.classList.add("show")
  }else{
    More.innerHTML="See More"
    hiddencards.classList.remove("show");
  }
})
// function for popular hidden card//
function popularhidden()
{
    let box=document.createElement("div")
    box.className="recipe-card"
    box.innerHTML=`    <div class="recipe-img">
      <img src=${trendingdata.meals[0].strMealThumb} alt="" id="recipe-img">
      </div>
      <div class="recipe-content">
        <button class="watchlist">❤</button>
<span id="idMeal">${trendingdata.meals[0].idMeal}</span>
        <span id="rating">${trendingdata.meals[0].strArea}</span>
        <h3>${trendingdata.meals[0].strMeal}</h3>
      </div>
  
  `;
  hiddencards.appendChild(box)
   box.addEventListener("click",()=>{
    const ideMeal=box.querySelector("#idMeal")
    addid=ideMeal.innerHTML;
    loadid(addid)
    window.location.href="mealinfo.html"
  })
  const watchlist=box.querySelector(".watchlist")
  watchlist.addEventListener("click",(e)=>{
    e.stopPropagation();
watchlist.classList.toggle("like")
console.log(e.target.nextElementSibling.innerHTML)
console.log(e)
if(e.target.classList.contains("like"))
{
   const alreadySaved = recipe.some(item => item.idMeal === idMeal);
if(alreadySaved)
{
  alert("already")
  return
}
  count=count+1
loadcounter(count)
let go=getcounter()
   console.log(go,"inner");

   icon.innerHTML=go;

  console.log(e.target.className)
    recipe.push({
      idMeal:e.target.nextElementSibling.innerHTML
    })
    loadlike(recipe);
  }else{
    recipe = recipe.filter(item => item.idMeal !== e.target.nextElementSibling.innerHTML);
    loadlike(recipe)
    console.log(getlikerecipces);
    count--
    loadcounter(count)
    let go=getcounter()
    icon.innerHTML=go;
    console.log(getfavcounter)

    
    

  }  })
  
}


//fuction for shoeing cards on screen//

function Trending()

{
const Trendingcards=document.querySelector(".Trending .card-grid")
        
    let box=document.createElement("div")
    box.className="recipe-card"
    box.innerHTML=`    <div class="recipe-img">
      <img src=${trendingdata.meals[0].strMealThumb} alt="" id="recipe-img">
      </div>
      <div class="recipe-content">
        <button class="watchlist">❤</button>
        <span id="idMeal">${trendingdata.meals[0].idMeal}</span>
    <span id="rating">${trendingdata.meals[0].strArea}</span>
        <h3>${trendingdata.meals[0].strMeal}</h3>
      </div>
  
  `;
  Trendingcards.appendChild(box)
box.addEventListener("click",()=>{
    const ideMeal=box.querySelector("#idMeal")
    addid=ideMeal.innerHTML;
    loadid(addid)
    window.location.href="mealinfo.html"
  })
  const watchlist=box.querySelector(".watchlist")
  watchlist.addEventListener("click",(e)=>{
    e.stopPropagation();
watchlist.classList.toggle("like")
console.log(e.target.nextElementSibling.innerHTML)
console.log(e)
if(e.target.classList.contains("like"))
{
   const alreadySaved = recipe.some(item => item.idMeal === idMeal);
if(alreadySaved)
{
  alert("already")
  return
}
  count=count+1
loadcounter(count)
let go=getcounter()
   console.log(go,"inner");

   icon.innerHTML=go;

  console.log(e.target.className)
    recipe.push({
      idMeal:e.target.nextElementSibling.innerHTML
    })
    loadlike(recipe);
  }else{
    recipe = recipe.filter(item => item.idMeal !== e.target.nextElementSibling.innerHTML);
    loadlike(recipe)
    console.log(getlikerecipces);
    count--
    loadcounter(count)
    let go=getcounter()
    icon.innerHTML=go;
    console.log(getfavcounter)

    
    

  }  })
}
//funtion for showing trending cards//

function Trendinghidden()
{

  let box=document.createElement("div")
    box.className="recipe-card"
    box.innerHTML=`    <div class="recipe-img">
      <img src=${trendingdata.meals[0].strMealThumb} alt="" id="recipe-img">
      </div>
      <div class="recipe-content">
        <button class="watchlist">❤</button>
        <span id="idMeal">${trendingdata.meals[0].idMeal}</span>
    <span id="rating">${trendingdata.meals[0].strArea}</span>
        <h3>${trendingdata.meals[0].strMeal}</h3>
      </div>
  
  `;
  Trendinghiddencard.appendChild(box)
   box.addEventListener("click",()=>{
    const ideMeal=box.querySelector("#idMeal")
    addid=ideMeal.innerHTML;
    loadid(addid)
    window.location.href="mealinfo.html"
  })
  const watchlist=box.querySelector(".watchlist")
  watchlist.addEventListener("click",(e)=>{
    e.stopPropagation();
watchlist.classList.toggle("like")
console.log(e.target.nextElementSibling.innerHTML)
console.log(e)
if(e.target.classList.contains("like"))
{
   const alreadySaved = recipe.some(item => item.idMeal === idMeal);
if(alreadySaved)
{
  alert("already")
  return
}
  count=count+1
loadcounter(count)
let go=getcounter()
   console.log(go,"inner");

   icon.innerHTML=go;

  console.log(e.target.className)
    recipe.push({
      idMeal:e.target.nextElementSibling.innerHTML
    })
    loadlike(recipe);
  }else{
    recipe = recipe.filter(item => item.idMeal !== e.target.nextElementSibling.innerHTML);
    loadlike(recipe)
    console.log(getlikerecipces);
    count--
    loadcounter(count)
    let go=getcounter()
    icon.innerHTML=go;
    console.log(getfavcounter)

    
    

  }  })
}
//fuction for showing hidden cards//
const TrendingMore=document.querySelector(".Trending #More")
TrendingMore.addEventListener("click",()=>{
  console.log("hii")
  if(TrendingMore.innerHTML==="See More")
  {
    TrendingMore.innerHTML="Less Item"
    Trendinghiddencard.classList.add("show")
  }
  else{
    TrendingMore.innerHTML="See More"
    Trendinghiddencard.classList.remove("show")
  }
})

// Searching api fecth and get data //
let Searchitem=null;
const Searchurl=`https://www.themealdb.com/api/json/v1/1/filter.php?i=`
const Searchitemlist=document.querySelector(".Search-item")
const Searchbar=document.querySelector("#Search-bar")

const Searchdata=async (item) => {
  const res=await fetch(`${Searchurl}${item}`)

  Searchitem=await res.json()
  console.log(Searchitem);

  for(let i=0;i<Searchitem.meals.length;i++)
  {
  let list=document.createElement("li")
  list.className="list"
  list.innerHTML=`
 <img src= ${Searchitem.meals[i].strMealThumb}>
  
    <p >${Searchitem.meals[i].strMeal}</p>`
  Searchitemlist.appendChild(list);
  list.addEventListener("click",()=>{
    addid=Number(Searchitem.meals[i].idMeal);
    console.log()
    loadid(addid);
    window.location.href="mealinfo.html"
  })
  }

  
}
// function for showing the Searching data//
function Search()
{
Searchbar.addEventListener("input",()=>{
  const Text=Searchbar.value;
  console.log(Text);
  if(Text==="")
  {
    Searchitemlist.innerHTML=""
    return
  }
  else{
    Searchdata(Text)
  }
})

}
Search()

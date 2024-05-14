console.log("my Script is Running");
mycart=document.getElementsByClassName('mycart')
cartArr=[]
console.log(mycart);
mycart[0].addEventListener('click',()=>{
    alert("Item Added To Cart")
    cartArr.push({'name': "Tommy Pizeria", 'price':42.99 , 'imgSrc': "https://media.istockphoto.com/id/157741539/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=1xjrOSIP23DDX2GxgtvqxxhgoIX9JILkqWOEmf-LS8s="})
    localStorage.setItem('items',JSON.stringify(cartArr))
    callfunc()
})
mycart[1].addEventListener('click',()=>{
    cartArr.push({'name': "Momos", 'price':5.99 , 'imgSrc': "https://previews.123rf.com/images/lestertair/lestertair1410/lestertair141000271/32285360-nepalese-food-momo-on-a-white-background-in-the-restaurant.jpg"})
    alert("Item Added To Cart")
    localStorage.setItem('items',JSON.stringify(cartArr))
    localStorage.setItem('items',JSON.stringify(cartArr))
    callfunc()
})
mycart[2].addEventListener('click',()=>{
    cartArr.push({'name': "RedMake", 'price':12.99 , 'imgSrc': "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg"})
    alert("Item Added To Cart")
    localStorage.setItem('items',JSON.stringify(cartArr))
    callfunc()
})
mycart[3].addEventListener('click',()=>{
    cartArr.push({'name': "Mix Salad", 'price':10.99 , 'imgSrc': "https://www.westend61.de/images/0000216001pw/bowl-of-mixed-salad-on-white-background-MAEF006320.jpg"})
    alert("Item Added To Cart")
    localStorage.setItem('items',JSON.stringify(cartArr))
    callfunc()
})
function callfunc() {
    
    
    let myCircle=document.querySelector('.mycircle')
    getItems=JSON.parse(localStorage.getItem('items'))
    console.log(getItems.length);
    if(getItems.length==0){
        myCircle.innerText=0
    }
    else{
        myCircle.innerText=getItems.length
        
    }
    
}
let getSearch=document.querySelector('.get-search')
let search=document.querySelector('.search')
search.addEventListener('click',()=>{
    val=getSearch.value 
    if(val=='Mix Veg Salad'){
        window.location.href='salad.html'
    }
    if(val=='Veg Feast'){
        window.location.href='pizza.html'
    }
    if(val=='Butter Paneer'){
        window.location.href='burger.html'
    }
    if(val=='White Pasta'){
        window.location.href='pasta.html'
    }
    if(val=='Gulab Jamun'){
        window.location.href='sweets.html'
    }
    if(val=='Red velvet cake'){
        window.location.href='pastry.html'
    }

})
callfunc()


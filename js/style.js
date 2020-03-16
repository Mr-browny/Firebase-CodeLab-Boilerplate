
var showNav = document.querySelector('#showNav')
var hideNav = document.querySelector('#hideNav')
var body = document.querySelector('#body')


 
showNav.addEventListener('click', ()=>{
    var links = document.querySelector('#navList')
    links.style.display = 'block';
    hideNav.style.display = 'block'
    showNav.style.display = 'none'
})
hideNav.addEventListener('click', ()=>{
    var links = document.querySelector('#navList')
    links.style.display = 'none';
    showNav.style.display = 'block'
    hideNav.style.display = 'none'
}) 
function displayWindowSize(){ 
    var w = screen.width; 
    var links = document.querySelector('#navList')
    if(w < 649){
        links.style.display = 'none'
        showNav.style.display = 'block' 
    }else{
        links.style.display = 'block';
        hideNav.style.display = 'none'
        showNav.style.display = 'none'
    }
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
 
function checkImg(){ 
   var file = select('#capture').files[0]
   var img = select('#image')
//    var filename = file.name

   var reader = new FileReader()
   reader.onload = (e)=> {
       img.src = reader.result
   }
   reader.readAsDataURL(file) 

}

function registerUser(){ 
    
    var file = select('#capture').files[0]
    // var img = select('#userImg') 
    
    // var reader = new FileReader()
    // reader.onload = (e)=> {
    //     img.src  = reader.result
    // }
    // reader.readAsDataURL(file) 
     

    var userDetails = {
        image: file.name,
        name: select('#name').value,
        email: select('#email').value,
        phone: select("#number").value,
        technology: select('#technology').value
    }
    // Grabbing the parent Element
    var parentId = '#card'
    var elementTag = 'div'
    var elementId = 'rwes'
    var html = 
    '   <div class="card-content"> '+
    '       <div class="card-image"> '+
    '            <img src="img/user.png" id="userImg"  width="100%" height="150"> '+
    '       </div>'+
    '   <div class="card-details">'+
    '       <div class="card-text">'+
    `            <label for="Name"> Name :  ${userDetails.name}  </label>`+
    '       </div>'+
    '       <div class="card-text">'+
    `            <label for="Email"> Email : ${userDetails.email}  </label>` +
    '        </div>'+
    '       <div class="card-text">'+
    `            <label for="Phone Number"> Phone :   ${userDetails.phone} </label>` +
    '        </div>'+
    '       <div class="card-text">'+
    `            <label for="Technology"> Technology :   ${userDetails.technology}  </label>` +
    '        </div>'+
    '   </div>'+
    '  </div>'
    addElement(parentId, elementTag, elementId, html)
    
}
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = select(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

// Function to select DOM element
var select = (el) =>{
    return document.querySelector(el)
}

//declare and initialize your database name here
const createDb = 'Friend'

// This is to check if there is a database already, and render what waas saved in it 
if (db.collection(createDb)) {
    //onSnapshots is a promise which monitors the selected database and observe when the selected change occurs
    // we have modified (for update changes), added, and deleted
    db.collection(createDb).onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
            if (change.type == 'added') { 
                 
                
                //Manipulatig the DOM
                var parentId = '#card'
                var elementTag = 'div'
                var elementId = `${change.doc.id}`
                var html = 
                '   <div class="card-content"> '+
                '       <div class="card-image"> '+
                `            <img src="${change.doc.data().image}" id="userImg"  width="100%" height="150"> `+
                '       </div>'+
                '   <div class="card-details">'+
                '       <div class="card-text">'+
                `            <label for="Name"> Name :  ${change.doc.data().name}  </label>`+
                '       </div>'+
                '       <div class="card-text">'+
                `            <label for="Email"> Email : ${change.doc.data().email}  </label>` +
                '        </div>'+
                '       <div class="card-text">'+
                `            <label for="Phone Number"> Phone :   ${change.doc.data().phone} </label>` +
                '        </div>'+
                '       <div class="card-text">'+
                `            <label for="Technology"> Technology :   ${change.doc.data().technology}  </label>` +
                '        </div>'+
                '   </div>'+
                '  </div>'

                addElement(parentId, elementTag, elementId, html) 
                    function addElement(parentId, elementTag, elementId, html) {
                    // Adds an element to the document
                    var p = select(parentId);
                    var newElement = document.createElement(elementTag);
                    newElement.setAttribute('id', elementId);
                    newElement.innerHTML = html;
                    p.appendChild(newElement);
                }
            }
        });   
    })
}

// Previewing the selected image, the file's extension, size etc, could also be checked in this function
let rawImg;
function checkImg(){ 
   var file = select('#capture').files[0]
   var img = select('#image') 

   var reader = new FileReader()
   reader.onload = (e)=> {
       img.src = reader.result
        rawImg = img.src
       console.log(rawImg)
   }
   reader.readAsDataURL(file) 

}

// The function to register the friend to the database
function registerUser(){  

    var userDetails = {
        image: rawImg,
        name: select('#name').value,
        email: select('#email').value,
        phone: select("#number").value,
        technology: select('#technology').value
    }

    // Destructuring the userDetails object
    const {  image, name, email, phone, technology   } = userDetails;
     
    // Checking if all fields were provided if condition fails, the program returns null, 
    if ( (image.length == 0) || (name.length == 0) || (email.length == 0) || (phone.length == 0) || (technology.length == 0)   ) {
        let msg = select('#errorMsg')
        msg.style.display = 'block'  
        setTimeout(() => {
          msg.style.display = 'none'  
        }, 5000);
        return 
    } 

    db.collection(createDb).add(userDetails)
    .then(res =>{
        // console.log(res)
        console.log('User Created')
    })
    .catch(err =>{
        console.log('The err: '+ err)
    }) 
}













 
// ---------*****	ManufacturerEditSection


// export default function ManufacturerEditSection(manufacturers){
//     return `
//     <h3>Select a Manufacturer to edit</h3>
//     <ul>
//     ${manufacturers.map(manufacturer => {
//         return `
//             <li>
//                 <h3 class='manufacturer_name'>${manufacturer.name}</h3>
//                 <input class='manufacturer_id' type='hidden' value='${manufacturer.manufacturerId}'>
//             </li>
//         `;
//     })
//     .join("")}
//         </ul>
//         <div id='button-box'>
//         <button class='delete-manufacturer'>Delete Manufacturer</button>
//         <button class='add-manufacturer'>Add Manufacturer</button>
//         </div>
//     `
// }




// ----------****	Manufacturer.js

// export default function Manufacturer(){
//     return `
//     <section class='add-manufacturer'>
//         <input class='add-manufacturer_name' type='text' placeholder='Add manufacturer name...'>
//         <input class='add-manufacturer_country' type='text' placeholder='Add country...'>
//         <input class='add-manufacturer_imageURL' type='text' placeholder='Add manufacturer image URL...'>
//         <input class='add-manufacturer_description' type='text' placeholder='Add manufacturer description...'>
//         <button class='add-manufacturer_submit'>Submit</button>
//     </section>


//     `
// }

// -------****	Single Manufacturer.js


// export default function singleManufacturer(manufacturer){
//     return `
//     <img src='${manufacturer.imageURL}' id='main-image' alt='Manufacturer image'></img>
    
//     <div id='name'><h3>${manufacturer.name}</h3>

//         <section class='edit-box'>
//             <input class='manufacturer_id' type='hidden' value='${manufacturer.manufacturerId}'>
//             <input class='edit-manufacturer_imageURL' type='hidden' value='${manufacturer.imageURL}'>
//             <input class='edit-manufacturer_name' type='text' value='${manufacturer.name}'>
//             <input class='edit-manufacturer_country' type='text' value='${manufacturer.country}'>
//             <textarea class='edit-manufacturer_description'>${manufacturer.description}</textarea>
//             <button class='edit-manufacturer_submit'>Submit</button>
//         </section>
//     </div>
//     <p>${manufacturer.description}</p>
//     </div>




//     `
// }




// ---------****Index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" 
//     content="ie=edge">
//     <link rel="stylesheet" type="text/css" href="./style.css">
//     <title>Angel-Luxury Watches</title>
// </head>
// <body id="main">
//     <header>
//         <nav>
//             <ul>
//                 <li id='nav_home'>Home</li>
//                 <li id='nav_manufacturers'>Manufacturers</li>
//                 <li id='nav_collections'>Collections</li>
//                 <li id='nav_watches'>Watches</li>
//             </ul>
//         </nav>    
      
//     </header>

//     <div id="edit-section"></div>
    
//     <div id="info">
//         <h1>Angel</h1>
//         <span>Luxury Watches</span>
//         <p>This is a Luxury Watch catalog that showcases some top of the line watch Manufacturers, their Collections, and of course The Watches.</p>
//     </div>


//     <script src="./js/app.js"></script>
// </body>
// </html>


// -------****	App.js

// import Home from './components/home';
// import Manufacturer from './components/manufacturers';
// import Collection from './components/collections';
// import apiActions from './api/api-actions';
// import Watches from './components/watches';
// import SingleManufacturer from './components/singleManufacturer';
// import ManufacturerEditSection from './components/manufacturer-edit-section';





// pageBuild();
// function pageBuild(){
//     home();
//     navManufacturers();
//     editBoxDisplay();

    
// }

// function home(){
//     const homebutton = document.getElementById('nav_home')
//     homebutton.addEventListener('click', function(){
//         const main = document.getElementById('info')
//         main.innerHTML = Home();
//         const editsection = document.getElementById('edit-section')
//         editsection.innerHTML = '';
//     })
// }


// function navManufacturers(){
//     const manufacturersbutton = document.querySelector('#nav_manufacturers')
//     manufacturersbutton.addEventListener('click', function(){
//         apiActions.getRequest(
//             'https://localhost:44378/api/manufacturer', 
//             manufacturers => {
//                 document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers)
//             }
            
//         )
//             document.querySelector('#info').innerHTML = "";
//         });
        
//         document.getElementById('info').addEventListener('click', function() {
//             if (event.target.classList.contains('add-manufacturer_submit')) {
//             const addmanufacturer = event.target.parentElement.querySelector('.add-manufacturer_name').value;
//             const addcountry = event.target.parentElement.querySelector('.add-manufacturer_country').value;
//             const addimageURL = event.target.parentElement.querySelector('.add-manufacturer_imageURL').value;
//             const adddescription = event.target.parentElement.querySelector('.add-manufacturer_description').value;
            
//             const info = {
//                 id: 0,
//                 name: addmanufacturer,
//                 country: addcountry,
//                 imageURL: addimageURL,
//                 description: adddescription
                
//             };
//             apiActions.postRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
//                 document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers);
//             })
            
//         }
//     });


//     document.getElementById('info').addEventListener('click', function(){
//         if (event.target.classList.contains('edit-manufacturer')){
//             const editbox = event.target.parentElement.querySelector('.edit-box')
//             editbox.style.display = 'block'
//         }

//         if (event.target.classList.contains('edit-manufacturer_submit')){
//             const editmanufacturer_id = event.target.parentElement.querySelector('.manufacturer_id').value;
//             const editmanufacturer_name = event.target.parentElement.querySelector('.edit-manufacturer_name').value;
//             const editmanufacturer_imageURL = event.target.parentElement.querySelector('.edit-manufacturer_imageURL').value;
//             const editmanufacturer_country = event.target.parentElement.querySelector('.edit-manufacturer_country').value;
//             const editmanufacturer_description = event.target.parentElement.querySelector('.edit-manufacturer_description').value;
            
//             const info = {
//                 ManufacturerId: editmanufacturer_id,
//                 Name: editmanufacturer_name,
//                 ImageURL: editmanufacturer_imageURL,
//                 Country: editmanufacturer_country,
//                 Description: editmanufacturer_description
//             };
                       
//             apiActions.putRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
//                     document.querySelector('#info').innerHTML ="";
//                     document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers);
//                 }
//             );
//         }
//     });
    
    
//     document.getElementById('edit-section').addEventListener('click', function(){
//         if (event.target.classList.contains('manufacturer_name')){
//             const manufacturerId = event.target.parentElement.querySelector('.manufacturer_id').value;
//             apiActions.getRequest('https://localhost:44378/api/manufacturer/'+ manufacturerId, 
//             manufacturer =>{
//                 document.querySelector('#info').innerHTML = SingleManufacturer(manufacturer)
//             })
//         }
//     })
// ////modal
//     // document.getElementById('main').addEventListener('click', function(){
//     //     if(event.target.classList.contains('add-manufacturer_submit')){
//     //         const manufacturername = event.target.parentElement.querySelector('.add-manufacturer_name').value;
//     //         const manufacturercountry = event.target.parentElement.querySelector('.add-manufacturer_country').value;
            
//     //         const info = {
//     //             id: 0,
//     //             name: manufacturername,
//     //             country: manufacturercountry
//     //         };
    
//     //         apiActions.postRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
//     //             document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers);
//     //         })
//     //     }
//     // })

// }    


// function editBoxDisplay(){
//     document.getElementById('main').addEventListener('click', function() {
//         if (event.target.classList.contains('edit-button')) {
//             const editbox = event.target.parentElement.querySelector('.edit-box')
//             editbox.style.display = 'block'
//         }
//     })
// }









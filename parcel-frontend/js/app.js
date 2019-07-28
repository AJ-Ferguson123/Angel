import Home from './components/home';
import Manufacturer from './components/manufacturers';
import Collection from './components/collections';
import apiActions from './api/api-actions';
import Watches from './components/watches';





pageBuild();
function pageBuild(){
    home();
    navManufacturers();
    collections();
    watches();

    
}

function home(){
    const homebutton = document.getElementById('nav_home')
    //listen for the home button click
    homebutton.addEventListener('click', function(){
        //when the click happens, display home page
        const main = document.getElementById('info')
        main.innerHTML = Home();
    })
}

function watches(){
    const watchbutton = document.getElementById('nav__watches')
    watchbutton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.innerHTML = Songs();
    })
}

function collections(){
    const collectionbutton = document.getElementById('nav_collections')
    collectionbutton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.innerHTML = Watches();
    })
}
function navManufacturers(){
    const manufacturersbutton = document.querySelector('#nav_manufacturers')
    console.log(manufacturersbutton)
    manufacturersbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44378/api/manufacturer', 
            manufacturers => {
                document.querySelector('#main').innerHTML = Manufacturer(manufacturers)
            }
            
        )
        // document.querySelector('#main-info').innerHTML = "";
    });

    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-manufacturer_submit')) {
            const addmanufacturer = event.target.parentElement.querySelector('.add-manufacturer_name').value;
            const addcountry = event.target.parentElement.querySelector('.add-manufacturer_country').value;
            const addimageURL = event.target.parentElement.querySelector('.add-manufacturer_imageURL').value;
            const adddescription = event.target.parentElement.querySelector('.add-manufacturer_description').value;
            
            const info = {
                id: 0,
                name: addmanufacturer,
                country: addcountry,
                imageURL: addimageURL,
                description: adddescription

             };

    document.getElementById('main').addEventListener('click', function(){
        if (event.target.classList.contains('add-watches_submit')){
            const addwatch = event.target.parentElement.querySelector('.add-watch_name').value;
            const addrefNumber = event.target.parentElement.querySelector('add-wacth_refNumber').value;
            const addmovement = event.target.parentElement.querySelector('.add-watch_movement').value;

            const info = {
                name: addwatch,
                refNumber: addrefNumber,
                movement: addmovement
            }
            }
    })         

    //         apiActions.postRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
    //             document.querySelector('#main').innerHTML = Manufacturer(manufacturers);
    //         })
    //     }
   
    //            
    //         });
    //         document.getElementById('main').addEventListener('click', function() {
    //             if (event.target.classList.contains('add-collection_submit')) {
    //                 const addcollectionName = event.target.parentElement.querySelector('.add-collection_name').value;                                   
    //                 const addimageURL = event.target.parentElement.querySelector('.add-collection_imageURL').value;
    //                 const adddescription = event.target.parentElement.querySelector('.add-collection_description').value;
                    
    //                 const info = {
    //                     id: 0,
    //                     collectionname: addcollection,                        
    //                     imageURL: addimageURL,
    //                     description: adddescription
        
    //                 };

                      
            });
    }
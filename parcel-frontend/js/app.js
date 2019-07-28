import Home from './components/home';
import Manufacturer from './components/manufacturers';
import apiActions from './api/api-actions';





pageBuild();
function pageBuild(){
    home();
    navManufacturers();
    
}

function home(){
    const homebutton = document.getElementById('home')
    //listen for the home button click
    homebutton.addEventListener('click', function(){
        //when the click happens, display home page
        const main = document.getElementById('info')
        main.innerHTML = Home();
        //NOTE to Angel: Test adding get and post request to this block of code, and adding a model and controller for home in separate branch bc its currently working form index.html. 
    })
}

function navManufacturers(){
    const manufacturersbutton = document.querySelector('#nav_manufacturers')
    console.log(manufacturersbutton)
    manufacturersbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/manufacturer', 
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

            apiActions.postRequest('https://localhost:44301/api/manufacturer', info, manufacturers => {
                document.querySelector('#main').innerHTML = Manufacturer(manufacturers);
            })
        }
    });

}
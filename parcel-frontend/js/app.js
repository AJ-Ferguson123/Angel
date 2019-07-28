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
    homebutton.addEventListener('click', function(){
        app.innerHTML = Home();
        
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

}
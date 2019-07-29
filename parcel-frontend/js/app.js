import Home from './components/home';
import Manufacturer from './components/manufacturers';
import Collection from './components/collections';
import apiActions from './api/api-actions';
import Watches from './components/watches';
import SingleManufacturer from './components/singleManufacturer';
import ManufacturerEditSection from './components/manufacturer-edit-section';





pageBuild();
function pageBuild(){
    home();
    navManufacturers();
    editBoxDisplay();

    
}

function home(){
    const homebutton = document.getElementById('nav_home')
    homebutton.addEventListener('click', function(){
        const main = document.getElementById('info')
        main.innerHTML = Home();
        const editsection = document.getElementById('edit-section')
        editsection.innerHTML = '';
    })
}


function navManufacturers(){
    const manufacturersbutton = document.querySelector('#nav_manufacturers')
    manufacturersbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44378/api/manufacturer', 
            manufacturers => {
                document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers)
            }
        )
        document.querySelector('#info').innerHTML = "";
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
            apiActions.postRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
                document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers);
            })
            
        }
    });


    document.getElementById('info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-manufacturer')){
            const editbox = event.target.parentElement.querySelector('.edit-box')
            editbox.style.display = 'block'
        }

        if (event.target.classList.contains('edit-manufacturer_submit')){
            const editmanufacturer_id = event.target.parentElement.querySelector('.manufacturer_id').value;
            const editmanufacturer_name = event.target.parentElement.querySelector('.edit-manufacturer_name').value;
            const editmanufacturer_imageURL = event.target.parentElement.querySelector('.edit-manufacturer_imageURL').value;
            const editmanufacturer_country = event.target.parentElement.querySelector('.edit-manufacturer_country').value;
            const editmanufacturer_description = event.target.parentElement.querySelector('.edit-manufacturer_description').value;
            
            const info = {
                ManufacturerId: editmanufacturer_id,
                Name: editmanufacturer_name,
                ImageURL: editmanufacturer_imageURL,
                Country: editmanufacturer_country,
                Description: editmanufacturer_description
            };
                       
            apiActions.putRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
                    document.querySelector('#info').innerHTML ="";
                    document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers);
                }
            );
        }
    });
    
    
    document.getElementById('edit-section').addEventListener('click', function(){
        if (event.target.classList.contains('manufacturer_name')){
            const manufacturerId = event.target.parentElement.querySelector('.manufacturer_id').value;
            apiActions.getRequest('https://localhost:44378/api/manufacturer/'+ manufacturerId, 
            manufacturer =>{
                document.querySelector('#info').innerHTML = SingleManufacturer(manufacturer)
            })
        }
    })
    
    document.getElementById('main').addEventListener('click', function(){
        if (event.target.classList.contains('delete-manufacturer')){
            const removemanufacturer_id = event.target.parentElement.querySelector('.manufacturer_id').value;

            const info = {
                ManufacturerId: removemanufacturer_id
            };

            apiActions.deleteRequest('https://localhost:44378/api/manufacturer', info, manufacturers => {
                    document.querySelector('#info').innerHTML = "";
                    document.querySelector('#edit-section').innerHTML = ManufacturerEditSection(manufacturers);
                }
            );
        }
    });
}    


function editBoxDisplay(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('edit-button')) {
            const editbox = event.target.parentElement.querySelector('.edit-box')
            editbox.style.display = 'block'
        }
    })
}






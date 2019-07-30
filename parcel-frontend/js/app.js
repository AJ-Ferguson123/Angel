import Home from './components/home';
import Manufacturer from './components/manufacturers';
import Collection from './components/collections';
import apiActions from './api/api-actions';
import Watches from './components/watches';
import SingleManufacturer from './components/singleManufacturer';
import SingleCollection from './components/singleCollection';





pageBuild();
function pageBuild(){
    home();
    navManufacturers();
    navCollections();

    
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
                document.querySelector('#edit-section').innerHTML = Manufacturer(manufacturers)
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
                document.querySelector('#edit-section').innerHTML = Manufacturer(manufacturers);
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
                    document.querySelector('#edit-section').innerHTML = Manufacturer(manufacturers);
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
                    document.querySelector('#edit-section').innerHTML = Manufacturer(manufacturers);
                }
            );
        }
    });
}    


// function editBoxDisplay(){
//     document.getElementById('main').addEventListener('click', function() {
//         if (event.target.classList.contains('edit-button')) {
//             const editbox = event.target.parentElement.querySelector('.edit-box')
//             editbox.style.display = 'block'
//         }
//     })
// }


function navCollections(){
    const collectionsbutton = document.querySelector('#nav_collections')
    collectionsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44378/api/collection', 
            collections => {
                document.querySelector('#edit-section').innerHTML = Collection(collections)
            }
        )
        document.querySelector('#info').innerHTML = "";
    });
        
        document.getElementById('main').addEventListener('click', function() {
            if (event.target.classList.contains('add-collection_submit')) {
            const addcollection = event.target.parentElement.querySelector('.add-collection_name').value;
            const addimageURL = event.target.parentElement.querySelector('.add-collection_imageURL').value;
            const adddescription = event.target.parentElement.querySelector('.add-collection_description').value;
            
            const info = {
                id: 0,
                collectionName: addcollection,
                imageURL: addimageURL,
                description: adddescription
                
            };
            apiActions.postRequest('https://localhost:44378/api/collection', info, collections => {
                document.querySelector('#edit-section').innerHTML = Collection(collections);
            })
            
        }
    });

    document.getElementById('info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-collection')){
            const editbox = event.target.parentElement.querySelector('.edit-box')
            editbox.style.display = 'block'

        }

        if (event.target.classList.contains('edit-collection_submit')){
            const editcollection_id = event.target.parentElement.querySelector('.collection_id').value;
            const editcollection_name = event.target.parentElement.querySelector('.edit-collection_name').value;
            const editcollection_imageURL = event.target.parentElement.querySelector('.edit-collection_imageURL').value;
            const editcollection_description = event.target.parentElement.querySelector('.edit-collection_description').value;
            
            const info = {
                collectionId: editcollection_id,
                collectionName: editcollection_name,
                imageURL: editcollection_imageURL,
                description: editcollection_description
            };
                       
            apiActions.putRequest('https://localhost:44378/api/collection', info, collections => {
                    document.querySelector('#info').innerHTML = "";
                    document.querySelector('#edit-section').innerHTML = Collection(collections);
                }
            );
        }
    });

    document.getElementById('edit-section').addEventListener('click', function(){
        if (event.target.classList.contains('collection_name')){
            const collectionId = event.target.parentElement.querySelector('.collection_id').value;
            apiActions.getRequest('https://localhost:44378/api/collection/'+ collectionId, 
            collection =>{
                document.querySelector('#info').innerHTML = SingleCollection(collection)
            })
        }
    })
    
    document.getElementById('main').addEventListener('click', function(){
        if (event.target.classList.contains('delete-collection')){
            const removecollection_id = event.target.parentElement.querySelector('.collection_id').value;

            const info = {
                collectionId: removecollection_id
            };

            apiActions.deleteRequest('https://localhost:44378/api/collection', info, collections => {
                    document.querySelector('#info').innerHTML = "";
                    document.querySelector('#edit-section').innerHTML = Collection(collections);
                }
            );
        }
    });


}


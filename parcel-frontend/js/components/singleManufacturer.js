export default function singleManufacturer(manufacturer){
    return `
    <img src='${manufacturer.imageURL}' id='main-image' alt='Manufacturer image'></img>
    
    <div id='name'><h3>${manufacturer.name}</h3>
    <div id='button-box'>
    <button class='delete-manufacturer'>Delete Manufacturer</button>
    <button class='add-manufacturer'>Add Manufacturer</button>
        <section class='edit-box'>
            <input class='manufacturer_id' type='hidden' value='${manufacturer.manufacturerId}'>
            <input class='edit-manufacturer_imageURL' type='hidden' value='${manufacturer.imageURL}'>
            <input class='edit-manufacturer_name' type='text' value='${manufacturer.name}'>
            <input class='edit-manufacturer_country' type='text' value='${manufacturer.country}'>
            <textarea class='edit-manufacturer_description'>${manufacturer.description}</textarea>
            <button class='edit-manufacturer_submit'>Submit</button>
        </section>
    </div>
    <p>${manufacturer.description}</p>
    </div>




    `
}
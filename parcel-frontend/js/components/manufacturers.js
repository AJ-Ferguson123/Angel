export default function Manufacturer(manufacturers){
    return `

    <ul>
    ${manufacturers.map(manufacturer => {
        return `
            <li>
            <h3 class='manufacturer_name'>${manufacturer.name}</h3>
            <img src='${manufacturer.imageURL}' id='manufactuer-image' alt='Manufacturer image'></img>
            <h4 class='manufacturer_country'>Country Originated: ${manufacturer.country}</h4>
            <h5>About</h5>
            <p1>${manufacturer.description}</p>
            <input class='manufacturer_id' type='hidden' value='${manufacturer.manufacturerId}'>
            </li>
            `;
        })
        .join("")}
        
        </ul>
        <h6>Select a Manufacturer Name to edit</h6>
        <h6>Add a Manufacturer below</h6>

        <div id=add-manufacturer_commands>

        <section class='add-manufacturer'>
            <input class='add-manufacturer_name' type='text' placeholder='Add manufacturer name...'>
            <input class='add-manufacturer_country' type='text' placeholder='Add country...'>
            <input class='add-manufacturer_imageURL' type='text' placeholder='Add manufacturer image URL...'>
            <input class='add-manufacturer_description' type='text' placeholder='Add manufacturer description...'>
            <button class='add-manufacturer_submit'>Submit</button>
        </section>
    </div>
    `
}



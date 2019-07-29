export default function ManufacturerEditSection(manufacturers){
    return `
    <h3>Select a Manufacturer to edit</h3>
    <ul>
    ${manufacturers.map(manufacturer => {
        return `
            <li>
                <h3 class='manufacturer_name'>${manufacturer.name}</h3>
                <input class='manufacturer_id' type='hidden' value='${manufacturer.manufacturerId}'>
            </li>
        `;
    })
    .join("")}
    
        </ul>
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
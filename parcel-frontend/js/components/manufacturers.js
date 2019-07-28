export default function Manufacturer(manufacturers){
    return `
    <h3>Manufacturers</h3>
    <ul>
    
    ${manufacturers.map(manufacturers => {
        return `
            <li>
                <h3 class='manufacturer_name'>${manufacturer.name}</h3>
                <input class='manufacturer_id' type='hidden' value='${manufacturer.manufacturerId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
        <button class='add-manufacturer'>Add Manufacturer</button>
    `
}
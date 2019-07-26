export default function Manufacturer(manufacturer){
    return`
    <ul>

    ${manufacturer.map(manufacturer => {
        return`
        <li>
             <h3>${manufacturer}</h3>
        </li>
        `;
    })
    .join("")}
    </ul>
    `     
    
}
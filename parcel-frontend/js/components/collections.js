export default function Collection(collections){
    return `
    <h3>Select a Collection to edit</h3>
    <ul>
    ${collections.map(collection => {
        return `
            <li>
                <h3 class='collection_name'>${collection.collectionName}</h3>
                <input class='collection_id' type='hidden' value='${collection.collectionId}'>
            </li>
        `;
    })
    .join("")}
    
        </ul>
    <div id=add-collection_commands>

        <section class='add-collection'>
            <input class='add-collection_name' type='text' placeholder='Add collection name...'>
            <input class='add-collection_description' type='text' placeholder='Add collection description...'>
            <button class='add-collection_submit'>Submit</button>
        </section>
    </div>
    `
}
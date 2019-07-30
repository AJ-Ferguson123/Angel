export default function singleCollection(collection){
    return `
    <img src='${collection.imageURL}' id='main-image' alt='Collection image'></img>
    
    <div id='name'><h3>${collection.collectionName}</h3>
    <div id='button-box'>
    <button class='delete-collection'>Delete Collection</button>
    <section class='edit-box'>
    <input class='collection_id' type='hidden' value='${collection.collectionId}'>
    <input class='edit-collection_imageURL' type='hidden' value='${collection.imageURL}'>
    <input class='edit-collection_name' type='text' value='${collection.collectionName}'>
    <textarea class='edit-collection_description'>${collection.description}</textarea>
    <button class='edit-collection_submit'>Submit</button>
    </section>
    </div>
    </div>
    



    `
}
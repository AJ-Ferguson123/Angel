export default function singleWatch(watch){
    return `
    
    <div id='name'><h3>${watch.name}</h3>
    <div id='button-box'>
    <button class='delete-watch'>Delete Watch</button>
    <button class='edit-watch'>Edit Watch</button>

    <section class='edit-box'>
    <input class='watch_id' type='hidden' value='${watch.watchId}'>
    <input class='collection_id' type='hidden' value='${watch.collectionId}'>
    <input class='edit-watch_imageURL' type='hidden' value='${watch.imageURL}'>
    <input class='edit-watch_name' type='text' value='${watch.name}'>
    <input class='edit-watch_movement' type='text' value=${watch.movement}>
    <button class='edit-watch_submit'>Submit</button>
    </section>
    </div>
    </div>
    



    `
}
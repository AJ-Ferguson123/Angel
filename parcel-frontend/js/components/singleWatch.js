export default function singleWatch(watch){
    return `
    <img src='${watch.imageURL}' id='main-image' alt='Watch image'></img>
    
    <div id='name'><h3>${watch.name}</h3>
    <div id='button-box'>
    <button class='delete-watch'>Delete Watch</button>
    <section class='edit-box'>
    <input class='watch_id' type='hidden' value='${watch.watchId}'>
    <input class='edit-watch_imageURL' type='hidden' value='${watch.imageURL}'>
    <input class='edit-watch_name' type='text' value='${watch.name}'>
    <input class='edit-watch_country' type='text' value='${watch.country}'>
    <textarea class='edit-watch_description'>${watch.description}</textarea>
    <button class='edit-watch_submit'>Submit</button>
    </section>
    </div>
    </div>
    



    `
}
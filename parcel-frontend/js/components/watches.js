export default function Watch(watches){
    return `
    <h3>Select a Watch to edit</h3>
    <ul>
    ${watches.map(watch => {
        return `
            <li>
                <h3 class='watch_name'>${watch.name}</h3>
                <img src='${watch.imageURL}' id='main-image' alt='Watch image'></img>
                <input class='watch_id' type='hidden' value='${watch.watchId}'>
            </li>
        `;
    })
    .join("")}
    
        </ul>
    <div id=add-watch_commands>

        <section class='add-watch'>
            <input class='add-watch_name' type='text' placeholder='Add watch name...'>
            <input class='add-watch_imageURL' type='text' placeholder='Add watch image URL...'>
            <input class='add-watch_movement' type='text' placeholder='Add watch movement...'>
            <button class='add-watch_submit'>Submit</button>
        </section>
    </div>
    `
}
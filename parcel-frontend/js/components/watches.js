export default function Watch(watches){
    return `
    <h3>Select a Watch to edit</h3>
    <ul>
    ${watches.map(watch => {
        return `
            <li>
                <h3 class='watch_name'>${watch.watchName}</h3>
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
            <input class='add-watch_description' type='text' placeholder='Add watch description...'>
            <button class='add-watch_submit'>Submit</button>
        </section>
    </div>
    `
}
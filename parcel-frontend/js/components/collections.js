export default function Collection(collections){
    return `
    <ul>

        ${collections.map(collection => {
            return `
                <li>
                    <h3>${collection}</h3>
                </li>
            `;
        })
        .join("")}
    </ul>

    `
}
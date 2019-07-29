export default function Manufacturer(manufacturers){
    return `
    <section class='add-manufacturer'>
        <input class='add-manufacturer_name' type='text' placeholder='Add manufacturer name...'>
        <input class='add-manufacturer_country' type='text' placeholder='Add country...'>
        <input class='add-manufacturer_imageURL' type='text' placeholder='Add manufacturer image URL...'>
        <input class='add-manufacturer_description' type='text' placeholder='Add manufacturer description...'>
        <button class='add-manufacturer_submit'>Submit</button>
    </section>


    `
}
/*
 * Dummy data
 */

const items = [{
    code: 1,
    id: "001",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Rose_Super_Star.jpg/1200px-Rose_Super_Star.jpg',
    name: 'Rosa',
    scientificName: 'Rosa chinensis Jacq.',
    price: 4.95,
    wateringsPerWeek: 3,
    fertilizer: "fosforado",
    height: "4 cm"
}, {
    code: 2,
    id: "002",
    image: 'https://ecocosas.com/wp-content/uploads/2019/01/lavanda-1.jpg',
    name: 'Lavanda',
    scientificName: 'Lavandula',
    price: 4.95,
    wateringsPerWeek: 3,
    fertilizer: "fosforado",
    height: "5 cm"
}, {
    code: 3,
    id: "003",
    image: 'https://www.hogarmania.com/archivos/201210/azucena-o-lirio-1280x720x80xX.jpg',
    name: 'Azucena',
    scientificName: 'Lilium candidum',
    price: 4.95,
    wateringsPerWeek: 3,
    fertilizer: "fosforado",
    height: "3 cm"
}, {
    code: 4,
    id: "004",
    image: 'https://laopinion.com/wp-content/uploads/sites/3/2021/06/rituales-con-jazmin.jpg?quality=80&strip=all&w=1200',
    name: 'Jasmín',
    scientificName: 'Jasminum',
    price: 4.95,
    wateringsPerWeek: 3,
    fertilizer: "fosforado",
    height: "2 cm"
}, {
    code: 5,
    id: "005",
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/H%C3%ADbrida_de_Narcissus_%27Barrett_Browning%27%2C_Jard%C3%ADn_Bot%C3%A1nico_de_M%C3%BAnich%2C_Alemania%2C_2013-05-04%2C_DD_03.jpg',
    name: 'Narciso',
    scientificName: 'Narcissus',
    price: 4.95,
    wateringsPerWeek: 3,
    fertilizer: "fosforado",
    height: "4.5 cm"
}] 

const fakeFetchItems =() => {
    return items
}

const fakeFetchItem = (id) => {
    for(var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            return(items[i])
        }        
    }
}

export {
    fakeFetchItems,
    fakeFetchItem
}
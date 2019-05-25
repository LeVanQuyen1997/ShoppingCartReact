var initialState=[
    {
        id:1,
        image:'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
        name:'I Phone 7',
        des:'San Pham Do Apple',
        price:500,
        inventory:10,
        rating:4
    },
    {
        id:2,
        image : 'https://s7d2.scene7.com/is/image/SamsungUS/SMG930_gs7_102416?$product-details-jpg$',
        name:'SamSung',
        des:'San Pham Do Samsung',
        price:500,
        inventory:5,
        rating:5
    },
    {
        id:3,
        image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
        name:'Oppo',
        des:'San Pham Do Opo',
        price:500,
        inventory:3,
        rating:4
    },
    {
        id:4,
        image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
        name:'Oppo1',
        des:'San Pham Do Opo',
        price:500,
        inventory:3,
        rating:3
    }
];


const product=(state=initialState,action)=>{
    switch(action.type){
        default: return [...state];
    }
}

export default product;
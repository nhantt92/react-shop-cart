var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-7-plus-128gb-ll-a-quoc-te-didongviet_1.jpg',
        description: 'Apple',
        price: 1000,
        inventory: 15,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 6',
        image: 'https://kimstore.com/pub/media/catalog/product/cache/image/500x500/e9c3970ab036de70892d86c6d221abfe/a/p/apple_iphone_6ss1k.jpg',
        description: 'Apple',
        price: 800,
        inventory: 20,
        rating: 3
    },
    {
        id: 3,
        name: 'Iphone 5',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg',
        description: 'Apple',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 4,
        name: 'Xiaomi Redmi note 4',
        image: 'https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/12/09/goods-img/1502751257226660020.jpg',
        description: 'Xiaomi',
        price: 200,
        inventory: 10,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;
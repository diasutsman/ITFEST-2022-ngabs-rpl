class TheClass {
    /**
     * Class model
     * @param {string} img 
     * @param {string} title 
     * @param {number} stars 
     * @param {number} price 
     * @param {number} crossedPrice 
     */
    constructor(img, title, stars, price, crossedPrice) {
        Object.assign(this, { img, title, stars, price: price.toRupiahFormat(), crossedPrice: crossedPrice.toRupiahFormat() })
        // assign all parameter
    }
}

let classes = [
    new TheClass(
        'img/classes-img/class-1.png',
        'Web developer from zero to hero',
        4,
        75000,
        100000
    ),
    new TheClass(
        'img/classes-img/class-2.png',
        'Belajar UI/UX Design',
        3,
        75000,
        100000
    ),
    new TheClass(
        'img/classes-img/class-3.png',
        'Mobile Developer Pemula sampai Mahir',
        5,
        75000,
        100000
    ),
]
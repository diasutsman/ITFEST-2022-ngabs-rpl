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
        // assign all parameter
        Object.assign(this, { title, img, stars, price: price.toRupiahFormat(), crossedPrice: crossedPrice.toRupiahFormat() })
    }
}

// Array of dummy data
let classes = [
    new TheClass(
        'img/classes-img/class-1.webp',
        'Web developer from zero to hero',
        4,
        75000,
        100000
    ),
    new TheClass(
        'img/classes-img/class-2.webp',
        'Belajar UI/UX Design',
        3,
        75000,
        100000
    ),
    new TheClass(
        'img/classes-img/class-3.webp',
        'Mobile Developer Pemula sampai Mahir',
        5,
        75000,
        100000
    ),
]
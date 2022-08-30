String.prototype.toCamelCase = function () {
    return this.replace(/[-_]\w/g, e => e.slice(-1).toUpperCase())
}

Number.prototype.toRupiahFormat = function () {
    return this.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })
}
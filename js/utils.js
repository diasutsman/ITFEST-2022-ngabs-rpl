String.prototype.toCamelCase = function() {
    return this.replace(/[-_]\w/g, e => e.slice(-1).toUpperCase())
}

/**
 * To use binding, it's simple as add id to that element and call that id in the binding object
 * 
 * For example: binding.nav, binding.hero
 */
const binding = {}
document.querySelectorAll('[id]').forEach(el => {
    binding[el.id.toCamelCase()] = el
})

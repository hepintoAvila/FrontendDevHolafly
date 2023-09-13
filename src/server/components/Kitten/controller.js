
const TABLA = 'kittens';
const TABLASLIDES = 'dbSlides';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../store/dummy');
    }
    function lists() {
        return store.lists(TABLASLIDES);
    }
    function list() {
        return store.list(TABLA);
    }
    function get(id) {
        return store.get(TABLA, id);
    }
    return {
        list,
        get,
        lists,
    };
}
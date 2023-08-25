import Vuex from 'vuex'
import Product from './Modules/product'


const Store = new Vuex.Store({
    modules: {
        Product
    }
})

export default Store
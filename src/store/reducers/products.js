import PRODUCTS from '../../data/dummy-data';

const inititalState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = inititalState, action) => {
    return state;
}
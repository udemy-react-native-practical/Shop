import React from 'react'
import {FlatList} from 'react-native'
import {useSelector} from 'react-redux'

import ProductItem from '../../components/shop/ProductItem'

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    props.navigation.setOptions({ title: 'All Products' })

    return (
        <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => {
                    props.navigation.navigate('ProductDetails', {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    })}
                }
                onAddToCart={() => {}}
            />}
        />
    )
}

export default ProductsOverviewScreen

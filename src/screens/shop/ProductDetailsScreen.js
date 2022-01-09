import React from 'react'
import {
    View,
    ScrollView,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'
import {useSelector} from 'react-redux'

const ProductDetailsScreen = props => {
    //const productId = props.navigation.getParam('productId'); //nav v5
    const {productId, productTitle} = props.route.params;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    props.navigation.setOptions({ title: productTitle })

    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ProductDetailsScreen

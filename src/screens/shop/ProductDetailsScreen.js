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
import Colors from '../../constants/Colors'

const ProductDetailsScreen = props => {
    //const productId = props.navigation.getParam('productId'); //nav v5
    const {productId, productTitle} = props.route.params;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    props.navigation.setOptions({ title: productTitle })

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title="Add To Cart" onPress={() => {}} />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
      marginVertical: 10,
      alignItems: 'center'  
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default ProductDetailsScreen

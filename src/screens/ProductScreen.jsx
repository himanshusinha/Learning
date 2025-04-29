import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, changeItemQuantity} from '../redux/action/Actions';
import {useNavigation} from '@react-navigation/native';

const dummyData = [
  {
    id: '1',
    name: 'XRay Jr Dark Shad Lace-Up',
    price: 2500,
    image:
      'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '2',
    name: 'Sneakers for Men - Red Tape',
    price: 999,
    image:
      'https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found_800x.jpg?v=1667562977',
  },
  {
    id: '3',
    name: 'Sneakers for Men - Provogue',
    price: 449,
    image:
      'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1696401417_4597435.jpg?format=webp&w=480&dpr=1.0',
  },
];

const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart);

  const handleAdd = item => {
    dispatch(addItemToCart({...item, quantity: 1}));
  };

  const increaseQuantity = itemId => {
    dispatch(changeItemQuantity(itemId, 'increase'));
  };

  const decreaseQuantity = itemId => {
    dispatch(changeItemQuantity(itemId, 'decrease'));
  };

  const getQuantity = itemId => {
    const item = cartItems.find(i => i.id === itemId);
    return item?.quantity || 0;
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  const renderItem = ({item}) => {
    const quantity = getQuantity(item.id);

    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
          {quantity === 0 ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAdd(item)}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => decreaseQuantity(item.id)}>
                <Text style={styles.qtyButtonText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.qtyButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: cartItems.length > 0 ? 100 : 20,
          }}
          showsVerticalScrollIndicator={false}
        />
        {cartItems.length > 0 && (
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              items added ({getTotalItems()}) ₹{getTotalPrice()}
            </Text>
            <TouchableOpacity
              style={styles.viewCartButton}
              onPress={() => navigation.navigate('CartScreen')}>
              <Text style={styles.viewCartText}>View Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  detailsContainer: {
    marginLeft: 16,
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 4,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#28a745',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    width: '45%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewCartButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  viewCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

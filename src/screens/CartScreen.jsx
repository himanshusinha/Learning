import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const changeQuantity = (id, type) => {
    dispatch({type: 'CHANGE_QUANTITY', payload: {id, type}});
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => changeQuantity(item.id, 'decrease')}>
            <Text style={styles.qtyButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item?.quantity}</Text>

          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => changeQuantity(item.id, 'increase')}>
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {totalQuantity === 0 ? (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No items in cart</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{paddingBottom: 20}}
          />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>Total Items: {totalQuantity}</Text>
            <Text style={styles.summaryText}>Total Amount: ₹{totalAmount}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  brand: {
    color: '#666',
  },
  price: {
    fontSize: 15,
    bottom: 13,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  summary: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  noItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777',
  },
});

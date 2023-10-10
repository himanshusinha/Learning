import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemToCart} from '../redux/action/Actions';

const CartScreen = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemToCart(index));
  };

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 10,
                borderRadius: 10,
                justifyContent: 'space-between',
                paddingBottom: index === items.length - 1 ? 20 : 0,
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    marginHorizontal: 20,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
                <Text style={{marginHorizontal: 20, fontSize: 18}}>
                  {item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    removeItem(index);
                  }}
                  style={{
                    height: 40,
                    backgroundColor: 'red',
                    marginHorizontal: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginHorizontal: 20,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Remove From Cart
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                style={{width: 100, height: 100, borderRadius: 10}}
                source={{uri: item.image}}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CartScreen;

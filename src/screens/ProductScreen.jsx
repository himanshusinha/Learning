import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addItemToCart} from '../redux/action/Actions';
const data = [
  {
    name: 'Shoes 1',
    price: 'INR 1870',
    image:
      'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Shoes 2',
    price: 'INR 2000',
    image:
      'https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found_800x.jpg?v=1667562977',
  },
  {
    name: 'Shoes 3',
    price: 'INR 2200',
    image:
      'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1696401417_4597435.jpg?format=webp&w=480&dpr=1.0',
  },
  {
    name: 'Shoes 4',
    price: 'INR 2100',
    image:
      'https://www.campusshoes.com/cdn/shop/products/OG-04_OG-04_WHT-BLU_2.jpg?v=1680247409&width=900',
  },
  {
    name: 'Shoes 5',
    price: 'INR 1400',
    image:
      'https://img.tatacliq.com/images/i10/437Wx649H/MP000000016613518_437Wx649H_202302211706361.jpeg',
  },
  {
    name: 'Shoes 6',
    price: 'INR 1870',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20230816/FAo0/64dced07eebac147fcce5645/-473Wx593H-469043783-offwhite-MODEL.jpg',
  },
  {
    name: 'Shoes 7',
    price: 'INR 1500',
    image:
      'https://assets.ajio.com/medias/sys_master/root/20230816/jNff/64dcf126eebac147fcce6e94/-473Wx593H-460800206-grey-MODEL.jpg',
  },
];
const ProductScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItem = item => {
    dispatch(addItemToCart(item));
    navigation.navigate('CartScreen');
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Redux App</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={{
            backgroundColor: '#80F1CF',
            height: 40,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 70,
            alignItems: 'center',
            padding: 10,
          }}>
          <Image
            source={require('../assets/images/shopping-bag.png')}
            style={{width: 20, height: 20}}
          />
          <Text>0</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
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
                paddingBottom: data.length - 1 ? 20 : 0,
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
                    addItem(item);
                  }}
                  style={{
                    height: 40,
                    backgroundColor: 'green',
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
                    Add To Cart
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

export default ProductScreen;

import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Animated,
  LayoutAnimation
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PostDetailComp from '../components/PostDetailComp';
import Button from '../components/Button';
import NavigationBarComponent from '../components/BottomTab';
import {tiktok, facebook, insta, profiles} from '../data';
import {FlatGrid} from 'react-native-super-grid';
import { MaterialCommunityIcons,Entypo,Fontisto,Ionicons, Feather } from '../Icons/Icons';

LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

const Profile = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [profilesArray, setProfilesArray] = useState(profiles);
  const [data, setData] = useState<any>(insta);
  
const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
const fadeAnimRef = useRef(fadeAnim).current;

const handelProfilePress = (index: any) => {
  
  Animated.timing(fadeAnimRef, {
    toValue: 0,
    duration: 1500,
    useNativeDriver: true,
  }).start(() => {
    const updatedArray = [...profilesArray];
    const item = updatedArray.splice(index, 1);
    updatedArray.push(item[0]);
    setProfilesArray(updatedArray);
    const which = profilesArray[index].platform;
    flatListRef.current?.scrollToEnd();
    console.log(which)
    which == 'insta'
      ? setData(insta)
      : which == 'facebook'
      ? setData(facebook)
      : setData(tiktok);
    Animated.timing(fadeAnimRef, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  });
};

  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd();
    }, 50);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', flex: 1}}></View>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View
          style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={30}
            color={'#000000'}
          />
          <Ionicons name="ios-sync-circle-outline" size={30} color={'#000000'} style={{marginLeft:4}} />
          <Feather name="trending-up" size={30} color={'#000000'} style={{marginLeft:4}}/>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 0.7,
            borderRadius: 100,
            overflow: 'hidden'
          }}>
          <FlatList
            ref={flatListRef}
            data={profilesArray}
            horizontal={true}
            inverted={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
       
                <ProfileImageView
                  index={index}
                  item={item}
                  handelProfilePress={handelProfilePress}
                />
                
              );
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 7,
          }}>
          <PostDetailComp value={data.posts} tittle={'Posts'} />
          <PostDetailComp value={data.followers} tittle={'Follower'} />
          <PostDetailComp value={data.following} tittle={'Following'} />
        </View>
      </View>
      <View style={{marginHorizontal: 12, marginTop: 10}}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.text}>{data.profession}</Text>
        <Text style={[styles.text, {color: '#000000'}]}>{data.email}</Text>
        <Text style={[styles.text, {color: '#000000'}]}>
          {data.description}
        </Text>
        <Text style={[styles.text, {color: '#0000EE'}]}>{data.link}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'lightgray',
          borderRadius: 10,
          borderWidth: 1,
          height: 60,
          borderColor: 'lightgray',
          marginHorizontal: 12,
          marginTop: 14,
        }}></View>
      <View style={styles.btnView}>
        <Button text={'Planmode'} />
        <Button text={'Dark'} />
        <Button text={'Hide icons'} />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: 12,
            marginTop: 16,
          }}>
          <Fontisto name="nav-icon-grid" size={24} color={'#000000'} />
          <TouchableOpacity>
            <Entypo name="video" size={30} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-sync-circle-outline" size={30} color={'gray'} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
  <FadeAnimation duration={3500} fadeAnim={fadeAnim}>
  <FlatGrid
  itemDimension={120}
  data={data.images}
  style={styles.gridView}
  spacing={-10}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => {
    return (
      <Animated.View
        style={[
          styles.itemContainer,
          {
            opacity: fadeAnimRef,
            transform: [
              {
                scale: fadeAnimRef.interpolate({
                  inputRange: [0, 3],
                  outputRange: [0, 3],
                }),
              
              },
            ],
          },
        ]}
      >
        <Image
          resizeMode="cover"
          style={{ height: 110, width: 120 }}
          source={{ uri: item }}
        />
      </Animated.View>
    );
  }}
/>
  </FadeAnimation>
  
</View>

      </View>

      <View style={styles.bottomTab}>
        <NavigationBarComponent />
      </View>
    </SafeAreaView>
  );
};
const ProfileImageView = ({index, item, handelProfilePress}: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handelProfilePress(index);
      }}
      activeOpacity={0.5}
      style={{
        backgroundColor: 'white',
        width: 112,
        height: 112,
        marginRight: index !== 0 ? -70 : 0,
        borderRadius: 70,
        padding: 6,
      }}>
      <Image
        source={{uri: item.profileImage}}
        style={{
          borderRadius: 70,
          backgroundColor: 'black',
          height: 100,
          width: 100,
        }}
      />
      {index == profiles.length - 1 && (
        <View
          style={{
            backgroundColor: '#fff',
            height: 30,
            width: 30,
            left: 75,
            top: 5,
            position: 'absolute',
            borderRadius: 20,
          }}>
          <Image
            source={{uri: item.profileImage}}
            // source={require('../Icons/insta.png')}
            style={{height: 30, width: 30, borderRadius: 20,borderWidth:2,}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};


const FadeAnimation = ({ children, fadeAnim }:any) => {
  const [isVisible, setIsVisible] = useState(true);



  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
    lineHeight: 20,
  },
  bottomTab: {
    justifyContent: 'flex-end',
  },
  gridView: {
    // flex: 1,
    // width:'100%',
    // backgroundColor:'red'
  },
  itemContainer: {
    flex: 1,
    // padding: 5,
    margin:2,
    
  },
});










 
    




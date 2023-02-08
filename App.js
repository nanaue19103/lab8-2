import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: 'TRAN VIET HUNG',
    address: 'CO NHUE',
    phone: '555-555-5555',
    email: 'hung@gmail.com',
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://via.placeholder.com/100x100.png',
        }}
      />
      <Text>Name: {user.name}</Text>
      <Text>Address: {user.address}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Email: {user.email}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('EditProfile', { user, setUser })}
      />
    </View>
  );
};

const EditProfileScreen = ({ navigation, route }) => {
  
  const { user, setUser } = route.params || {};
  if (!user || !setUser) {
    return (
      <View style={styles.container}>
        <Text>No user data found</Text>
      </View>
    );
  }
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setAddress(text)}
        value={address}
        placeholder="Address"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholder="Phone"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <Button
        title="Save"
        onPress={() => {
          setUser({ name, address,phone, email,
          });
          navigation.goBack();
        }}
        />
      </View>
    );
    
  };
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
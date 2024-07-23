import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from '../screens/posts';
import PostDetails from '../screens/post-details';
import {Post} from '../types';
export type RootStackParamList = {
  Posts: undefined;
  PostDetails: {post: Post};
};
const Stack = createStackNavigator<RootStackParamList>();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="Posts">
      <Stack.Screen
        options={{headerShown: false}}
        name="Posts"
        component={Posts}
      />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
}
export default HomeNavigation;

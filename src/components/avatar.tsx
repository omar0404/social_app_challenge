import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Avatar = ({name}: {name: string}) => (
  <View style={style.avatar}>
    {name && (
      <Text style={style.avatarText}>
        {name.split(' ')[0][0]}
        {name.split(' ')[1][0]}
      </Text>
    )}
  </View>
);
const style = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

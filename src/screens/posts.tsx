import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useGetPostsQuery} from '../services/posts';

import {NavigationProp} from '@react-navigation/native';
import {Avatar} from '../components/avatar';
import {Post} from '../types';

const Posts = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList, 'Posts'>;
}) => {
  const {data: posts, isLoading, isError, error} = useGetPostsQuery();

  const onPostPress = (post: Post) => {
    navigation.navigate('PostDetails', {post});
  };

  if (isLoading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (isError) {
    return (
      <View style={style.errorView}>
        <Text style={style.errorText}>Something went wrong</Text>
      </View>
    );
  }
  return (
    <View style={style.container}>
      <FlatList
        data={posts}
        renderItem={({item: post}) => (
          <TouchableOpacity
            onPress={() => onPostPress(post)}
            style={style.card}
            key={post.id}>
            <View style={style.cardHeader}>
              <Avatar name={post.user?.name} />
              <Text style={style.title}>{post.title}</Text>
            </View>
            <Text style={style.body}>{post.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  card: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  title: {fontWeight: 'bold', flex: 1},
  body: {marginTop: 10, color: 'gray'},
  errorView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {fontWeight: 'bold'},
});
export default Posts;

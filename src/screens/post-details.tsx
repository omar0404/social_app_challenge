import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../components/avatar';

import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation';
import PostComments from '../components/post-comments';

type PostDetailsProps = {
  route: RouteProp<RootStackParamList, 'PostDetails'>;
};

const PostDetails: React.FC<PostDetailsProps> = ({route}) => {
  const {post} = route.params;
  return (
    <View style={style.container}>
      <View style={style.postHeader}>
        <Avatar name={post.user.name} />
        <Text style={style.title}>{post.title}</Text>
      </View>

      <Text style={style.body}>{post.body}</Text>
      <PostComments id={post.id} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  postHeader: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  title: {
    color: 'gray',
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
    marginVertical: 10,
  },
});
export default PostDetails;

import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useGetCommentsQuery} from '../services/posts';
import {Avatar} from '../components/avatar';

const PostComments = ({id}: {id: number}) => {
  const {data: comments, isLoading} = useGetCommentsQuery(id);
  return (
    <View style={style.commentsSection}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View>
            <Text style={style.commentSectionTitle}>
              Comments ({(comments || []).length})
            </Text>
          </View>
          {(comments || []).map(comment => (
            <View key={comment.id} style={style.comment}>
              <View style={style.commentAuthorSection}>
                <Avatar name={comment.name} />
                <View>
                  <Text style={style.commentAuthor}>{comment.name}</Text>
                  <Text style={style.commentBody}>{comment.body}</Text>
                </View>
              </View>
            </View>
          ))}
        </>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  commentsSection: {
    borderTopWidth: 0.3,
    borderColor: 'gray',
    paddingTop: 20,
  },
  commentSectionTitle: {
    color: 'black',
  },
  comment: {
    width: '100%',
    padding: 10,
    borderRadius: 3,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  commentAuthorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  commentBody: {
    color: 'gray',
    marginTop: 5,
  },
  commentAuthor: {
    fontWeight: 'bold',
  },
});
export default PostComments;

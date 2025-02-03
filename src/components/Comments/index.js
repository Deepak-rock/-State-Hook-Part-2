import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => (
  <CommentsContainer>
    <CommentsTitle>Comments</CommentsTitle>
    <Form>
      <NameInput type="text" placeholder="Your name" />
      <CommentTextInput placeholder="Your comment" rows="6" />
      <CommentButton type="submit">Comment</CommentButton>
    </Form>
  </CommentsContainer>
)

export default Comments

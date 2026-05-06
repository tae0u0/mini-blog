import styled from "styled-components";
import PostListItem from './PostListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function CommentList(props) {
    const {comments } = props;

    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return (
                    <CommentListItem
                        key={comment.id}
                        post={comment}
                    />
                );
            })}
        </Wrapper>
    );
}

export default CommentList;
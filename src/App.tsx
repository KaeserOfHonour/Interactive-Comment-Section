import { v4 as uuid } from "uuid";
import Comment from "./components/Comment/Comment";
import CommentInput from "./components/CommentInput/CommentInput";
import CommentSection from "./components/CommentSection/CommentSection";
import comments from "./data.json";
import "./scss/styles.scss";

function App() {
    return (
        <main className="center">
            <CommentSection>
                {comments.comments.map((comment) => (
                    <Comment
                        key={uuid()}
                        avatar={comment.user.image.webp}
                        name={comment.user.username}
                        date={comment.createdAt}
                        count={comment.score}
                        text={comment.content}
                    />
                ))}

                <CommentInput />
            </CommentSection>
        </main>
    );
}

export default App;

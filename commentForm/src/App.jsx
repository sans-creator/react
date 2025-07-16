import { useState } from "react";
import CommentsForm from "./CommentsForm";
import Comments from "./Comments";

export default function App() {
    const [comments, setComments] = useState([]);

    const addComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    return (
        <div>
            <h2>Feedback Section</h2>
            <CommentsForm onAddComment={addComment} />
            <Comments comments={comments} />
        </div>
    );
}

export default function Comments({ comments }) {
    if (comments.length === 0) {
        return <p>No comments yet.</p>;
    }

    return (
        <div>
            <h4>All Comments</h4>
            <ul>
                {comments.map((cmt, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        <strong>{cmt.username}</strong> (Rating: {cmt.rating})<br />
                        {cmt.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
}

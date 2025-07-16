import { useState } from "react";

export default function CommentsForm({ onAddComment }) {
    const [formData, setFormData] = useState({
        username: '',
        comment: '',
        rating: ''
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddComment(formData);
        setFormData({ username: '', comment: '', rating: '' });
    };

    return (
        <div>
            <h4>Comments</h4>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br /><br />

                <textarea
                    name="comment"
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    name="rating"
                    placeholder="Rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

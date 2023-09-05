import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from 'axios';

const ArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleContentChange = (value) => {
        setContent(value);
    };
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    // simulate API call to publish article
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        const response = await axios.post(
             // Replace with your actual API endpoint
             'http://localhost:8080/articles/publish',
                formData
        );
        console.log('Article published', response.data);
        // Reset form fields after successful submission
        setTitle('');
        setContent('');
        setImage(null);
        
    } catch (error) {
        console.error('Error publishing article:', error);
    }
};
    return (
        <div>
            <h2>Publish Article</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div>
                    <label>Article Text:</label>
                    <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div>
                    <label>Upload Image</label>
                    <input type="file" accept="image/*" onChange={handleImageChange}></input>
                </div>
                <button type="submit">Publish</button>
            </form>
        </div>
    );
}

export default ArticleForm;
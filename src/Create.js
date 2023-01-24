import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const handleSubmit = (e) =>{
        e.preventDefault(); // preventDefault eventin o anki yaptığı olayı engeller. onSubmit ile sayfayı yenilemesini engeller.
        const blog = {title, body, author};
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("Added a new blog");
        });
        // history.go(-1); // işlemin ardından 1 sayfa geri gider
        history.push("/"); // "/" ana sayfadır. history.push() ile paramtre girilen yere gideriz.
    };
    const history = useHistory(); // üzerinde geçmişte geri gitmek için kullanırız

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Blog title:
                </label>
                <input 
                type="text" 
                required
                value={title} // title'a state ile boş değer atadık. İnputa değer giremeyiz
                onChange={(e) => {setTitle(e.target.value)}} // inputa değer girebilmek için değişiklik olduğunda gerçekleşen eventin hedef değerini veririz
                />
                <label>
                    Blog body:
                </label>
                <textarea 
                required
                value={body}
                onChange={ (e) => {setBody(e.target.value)}}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={ (e) => {setAuthor(e.target.value)}}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div> 
    
    );
}
 
export default Create;
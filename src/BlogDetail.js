import {useHistory, useParams} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const {kimlik} = useParams(); // app.jsde belirttiğimiz kimlik'i useParams olarak tanımladık ki farklı kimliklerde farklı sayfalar çalıştırsın
    const {data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + kimlik); 
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            {/* <h2>Blog Details - {kimlik}</h2> adres /blogs/2 ise sayfada Blog Details - 2 yazar */}
            {isLoading && <div>Loading</div>} {/* loading durumunda  */}
            {error && <div>{ error }</div>} {/* error durumunda  */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2> <br />
                    <p><strong>Written by {blog.author}</strong></p> <br />
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
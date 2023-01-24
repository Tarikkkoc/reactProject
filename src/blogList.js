import { Link } from "react-router-dom";

const BlogList = (props) => { // props ekledik.
    const blogs = props.blogs; // props'u blogs'tan gelen props olarak tanımladık.
    const title = props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> {/* tıklandığında idsi 1 olduğu için blog/1'e gider. */}
                    
                    <h1>{blog.title}</h1> 
                    <p>Oluşturan: {blog.author}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
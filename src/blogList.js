const BlogList = (props) => { // props ekledik.
    const blogs = props.blogs; // props'u blogs'tan gelen props olarak tanımladık.
    const title = props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1> 
                    <p>Oluşturan: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
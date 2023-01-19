import {useState, useEffect} from 'react';
import BlogList from './blogList';
const Home = () => {
const [blogs, setBlogs] = useState(null); // içeriğini null olarak gösterdik.
const[isLoading, setIsLoading] = useState(true) // başlangıç için true'ya eşitledik.



useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => { // datayı almak için response oluşturulur.
        return res.json();
        // return "tarik"; // console.log(data) yaplılınca bu fonskiyounun returnlendiği nesne kastedilir. 16.satır için log
        // res dönüyor. dönen res'i javascript nesnesine dönüyor.
    })
    .then(data => { // dataları sağlarız
        // console.log(data);
        setBlogs(data);
        setIsLoading(false); // datalar alındıkran sonra değeri false'a çevirir.
    })
}, []) 
    return ( 
        <div className="home">
            {isLoading && <div>Loading...</div>} {/* datalar alınırken yazdığımızı verir. */} 
           {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>} {/* blogsu datadan aldığımız için nloglist comp.da map işlemi yapamayacak bu yüzden blogs && şartı koyduk. */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Emre")} title={"Emre's Blogs"}/>  */}  
        </div>
     );
}
 
export default Home;
import {useState, useEffect} from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';
const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs'); // adresi girdik useFetch.js'de url olarak tanımlı.
// diğer comp'da blogs yerine data tanımladık.

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            {isLoading && <div>Loading...</div>} {/* datalar alınırken yazdığımızı verir. */} 
           {blogs && <BlogList blogs={blogs} title={"All Blogs"}/>} {/* blogsu datadan aldığımız için nloglist comp.da map işlemi yapamayacak bu yüzden blogs && şartı koyduk. */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Emre")} title={"Emre's Blogs"}/>  */}  
        </div>
     );
}
 
export default Home;
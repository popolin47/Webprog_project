import { useState,useEffect } from "react";
//use to keep value
// it can change the value by do  not use any mre variable
// import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
    //var name= 'Jin';
   
    const [name, setName]=useState('hgjg');
    const [age, setAge]=useState(5);
    const handleClick = (e) => {
        console.log('hello, ninjas',e);
    }
    const handleClickagain = () => {
        setName('cha')
        setAge(563);
        //console.log(name);
    }
  const {data:blog, isPending, Error}= useFetch(' http://localhost:8000/blogs') //will calldata to blog
  const [blogs, setBlogs] = useState([ 
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 }]);
    /*const handleDelete= (id) =>{
        const newBlogs = blogs.filter(jin=> jin.id !== id );
        setBlogs(newBlogs);
    }*/
    
     //run every time we change something. //name cahnge it will run the function
    return ( 
        <div className="HOME">
            {/* { Error &&  <div>{ Error }</div>}
            { isPending && <div>Loading...</div>}
           {blogs && <Bloglist blogs={blogs} title="All blog" ></Bloglist>}
         */}
        </div>);
}
 
export default Home;
/*<h1>Home</h1>
            <button onClick={handleClick}>Click me</button>
            <h2></h2>
            <p> {name } is { age} years old</p>
            
            <button onClick={handleClickagain}>Click me again</button>*/

//map in java have to has key to call
//link blogs to other page
//<Bloglist blog={blogs} title="All Blogs" />
//seperate to Bloglists
/*<Bloglist blogs={blogs} titles="All Blogs" handleClickDelete={handleClickDelete}/>
<Bloglist blog={blogs.filter((b)=> b.author === 'mario' )} title="Mario's blog" /> const handleClickDelete = (id) => {
       const newBlogs=blogs.filter(blog=> blog.id != id);*/
       /*Bloglist blogs={blogs} title="All blog" handleDelete={handleDelete}></Bloglist>
       <h1>{name}</h1>
       <button onClick={()=>setName('mebyme')}>change name</button>*/

       //{blogs && <Bloglist blogs={blogs} title="All blog" handleDelete={handleDelete}></Bloglist>} if will read left first after that if it is true it will read right
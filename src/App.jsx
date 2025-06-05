import { func } from "prop-types";
import { useState, useEffect } from "react"


export default function App(){

  const [blogPostData, setBlogPostData] = useState({
    title : "",
    body : ""
  });

  console.log(blogPostData)
  return(
    <>
    <form action=""
      onSubmit={(e)=>{
        e.preventDefault();
        if(blogPostData.title && blogPostData.body){
          fetch('https://jsonplaceholder.typicode.com/posts',{
            method : "POST",
            body : JSON.stringify({
              userId : 1, 
              title : blogPostData.title,
              body : blogPostData.body
            })
          })
        }
      }}
    >
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id = 'title' 
          value = {blogPostData.title} 
          onChange={(e)=>{
            setBlogPostData((currentBlogPostData) => ({
              ...currentBlogPostData,
              title : e.target.value,
            }))
          }}  
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input 
          type="text" 
          id = "body"
          value = {blogPostData.body}
          onChange={(e)=>{
            setBlogPostData((currentBlogPostData)=>({
              ...currentBlogPostData,
              body : e.target.value,
            }))
          }}
        />
      </div>
      <button>Create Post</button>
    </form>
   </>
  )
}


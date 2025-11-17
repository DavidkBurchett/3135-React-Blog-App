import React, { useEffect, useState } from "react"
import { CommentForm } from "./CommentForm"
import './BlogPost.css'
import { Like } from "./Like"
import { useParams } from "react-router"
import axios from 'axios'
import { useUsername } from "../authWrapper/AuthContext"

export function BlogPost () {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState();
  const [authorData, setAuthorData] = useState();
  const username = useUsername();

  useEffect(() => {
    const fetchData = async() => {
      try{
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.post_id}`
        );
        setPostData(postRes.data)

        const authorRes = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
        );
        setAuthorData(authorRes.data)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

    return (
      <div> 
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
        <h1> {postData.title} </h1>
        <p> {postData.body} </p>
        <div class="info">
          <p> {authorData.name} </p>
        </div>

          {username ? 
            <>
              <CommentForm />
              <Like />
            </> : 
            <p>Please login before leaving a comment!</p>}
        
        </div>
      )}
      </div>
    )

  }  
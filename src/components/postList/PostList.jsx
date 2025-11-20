import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Link } from "react-router";
import "./postlist.css"

export function PostList() {
    return (
        <>
            <Header />
            <div class = "info3"> 
                <div class="postlist">
                    <h3> <Link to="/posts/1">Post 1</Link> </h3>
                    <h3> <Link to="/posts/2">Post 2</Link> </h3>
                    <h3> <Link to="/posts/3">Post 3</Link> </h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import './Homepage.css'

export function Homepage() {
    return (
        <>
            <Header />

            <div class = "info2">
            <h1> Welcome to our Blog!</h1>
            <p> Welcome to our blog's homepage! This is your central hub for everything we create, from in-depth posts to active community discussions. In the top-right corner, you will find quick links to our Contact page and our full collection of blog posts, each filled with insights and plenty of comments from readers. Make sure to log in so you can join the conversations and get full access to everything our blog offers.</p>
            </div>
            <Footer />
        </>
    )
}
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import { PageNotFound } from "../pages/PageNotFound";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:postId' element={<Post />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

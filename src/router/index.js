import About from "../pages/About";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:postId", element: <Post /> },
  { path: "/about", element: <About /> },
];

export const publicRoutes = [{ path: "/login", element: <Login /> }];

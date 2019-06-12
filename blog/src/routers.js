import ShowBlogs from "./components/ShowBlogs"
import AddBlog from "./components/AddBlog"
import SingleBlog from "./components/SingleBlog"

export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog,name:"add"},
    {path:"/blog/:id",component:SingleBlog}

]
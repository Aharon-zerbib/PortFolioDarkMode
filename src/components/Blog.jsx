import { MyBlog } from "../pages/MyBlog";
import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/my-blog"); 
  };

  return(
    <section className="mt-24 w-full max-w-3xl mx-auto" >
  <h2 className="text-lg font-medium text-black dark:text-white" >Blog</h2>
  <div className="mt-4 space-y-4">
    <div className="p-4 rounded-lg transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"onClick={click}>
      <p className="font-medium">Comment l'IA change notre façon de concevoir</p>
      <p className="text-gray-500 dark:text-gray-400">
        Découvrez comment l’IA révolutionne le développement avec une seule ligne de code.
      </p>
    </div>
  </div>
</section>
  )
}
export default Blog;
import BlogCard from "./blogPageCard/blogPageCard";
import BlogPost from "./blogPost/blogPost"
import style from "./BlogPageComponent.module.scss"
import BlogCategory from "./blogCategory/blogCategory";

const BlogPageComponent = () => {

    const blogCards = [
    {
        img: "src/assets/blog/img1.jpg",
        iconTitle:"Wood",
        title: "Going all-in with millennial design",
    },
    {
        img: "src/assets/blog/img2.jpg",
        iconTitle:"Handmade",
        title: "Exploring new ways of decorating",
    },
    {
        img: "src/assets/blog/img3.jpg",
        iconTitle:"wood",
        title: "Handmade pieces that took time to make",
    }
]

const blogPost = [
    {
        img: "src/assets/blog/post1.jpg",
        title: "Going all-in with millennial design",
        date:"03 Aug 2022"
    },
    {
        img: "src/assets/blog/post2.jpg",
        title: "Exploring new ways of decorating",
        date:"03 Aug 2022"
    },
    {
        img: "src/assets/blog/post3.jpg",
        title: "Handmade pieces that took time to ",
        date:"03 Aug 2022"
    },
     {
        img: "src/assets/blog/post4.jpg",
        title: "Modern home in Milan",
        date:"03 Aug 2022"
    },
     {
        img: "src/assets/blog/post5.jpg",
        title: "Colorful office redesign",
        date:"03 Aug 2022"
    },
]
  return (

    <div className={style.container} >
         <div> 
         {blogCards.map((card,index) => (
         <BlogCard key={index} blogCard={card} />
         ))}
         </div> 

    

         <div>
             <BlogCategory />

            <div className={style.BlogPostDiv} >
                 <h2>Recent Posts</h2>
              {blogPost.map((post,index) =>(
              <BlogPost key={index} blogPost={post} />
              ))}
             </div>
    
            

         </div>
    </div>
  )
}

export default BlogPageComponent
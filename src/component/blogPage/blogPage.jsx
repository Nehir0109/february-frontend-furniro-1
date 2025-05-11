

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
        title: "Handmade pieces that took time to make",
        date:"03 Aug 2022"
    },
     {
        img: "src/assets/blog/post4.jpg",
        title: "Handmade pieces that took time to make",
        date:"03 Aug 2022"
    },
     {
        img: "src/assets/blog/post5.jpg",
        title: "Handmade pieces that took time to make",
        date:"03 Aug 2022"
    },
]




export const BlogPage = () => {
return (

<section className={style.wrapperBlogPage} >

{blogCards.map((card,index) => (
<blogPageCard key={index} blogCard={card} />
))}

<blogCategory/>

{blogPost.map((post,index) =>(
 <blogPost key={index} blogPost={post} />
))}

</section>
);
};
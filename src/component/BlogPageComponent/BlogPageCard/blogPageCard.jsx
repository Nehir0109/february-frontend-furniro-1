import style from "./blogPageCard.module.scss";

const BlogCard = ({ blogCard }) => {
    return (
        <div className={style.blogCard}>
        <img   src={blogCard.img} className={style.imgCard} />
        <div className= {style.iconBlog}  >
            <div className={style.icon}>
                <img src="src/assets/blog/user.png" alt="" />
                <span className= {style.admin} >admin</span>
            </div>
            <div className= {style.iconTwo}>
                <img src="src/assets/blog/takvim.png" alt="" />
                <span className={style.admin} >14 oct 2022</span>
            </div>
            <div className={style.iconThre} >
                <img src="src/assets/blog/etiket.png" alt="" />
                <span className={style.admin} >{blogCard.iconTitle}</span>
            </div>
        </div>
        <h2>{blogCard.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        <span className={style.reedMode} >Read more</span>
        <div className={style.line}> </div>
        </div>
        
    );
    };
    
    export default BlogCard;
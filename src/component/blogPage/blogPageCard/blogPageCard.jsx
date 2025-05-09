import style from "./blogPageCard.module.scss";

const BlogCard = ({ blogCard }) => {
    return (
        <div className={style.blogCard}>
        <img src={blogCard.img} />
        <div className="iconBlog" >
            <div className="icon">
                <img src="src/assets/blog/user" alt="" />
                <span className="admin" >admin</span>
            </div>
            <div className="iconTwo">
                <img src="src/assets/blog/takvim" alt="" />
                <span className="admin" >14 oct 2022</span>
            </div>
            <div className="iconThre" >
                <img src="src/assets/blog/etiket" alt="" />
                <span className="admin" >{blogCard.iconTitle}</span>
            </div>
        </div>
        <h2>{blogCard.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        <span>read more</span>
        <div className={style.write}> </div>
        </div>
        
    );
    };
    
    export default BlogCard;
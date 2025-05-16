import style from "./BlogPost.module.scss" 

const blogPost = ({blogPost}) => {
    return (
       
         
        <div className={style.Post} >
          
             <div className={style.connetc} >
                <img src={blogPost.img} alt="" />
                <div className={style.postConnet} >
                <p>{blogPost.title}</p>
                <span>{blogPost.date}</span>
                </div>
            </div>
            
        </div>
       
    )
}

export default blogPost ;
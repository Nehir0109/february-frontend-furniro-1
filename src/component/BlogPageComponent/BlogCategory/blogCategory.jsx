import style from "./blogCategory.module.scss" 
const BlogCategory = () =>{

    return (
        <div className={style.category} >
            <input type="text"></input>
            <h2>Categories</h2>
            <div className={style.categoryName} >
                <span>Crafts</span>
                <span>Design</span>
                <span>Handmade</span>
                <span>Interior</span>
                <span>Wood</span>
            </div>
            <div className={style.categoryNumber}>
                <span>2</span>
                <span>8</span>
                <span>7</span>
                <span>1</span>
                <span>6</span>
            </div>
        </div>
   
    );
    
};

export default BlogCategory;
 
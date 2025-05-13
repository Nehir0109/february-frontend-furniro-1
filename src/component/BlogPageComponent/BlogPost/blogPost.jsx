
const blogPost = ({blogPost}) => {
    return (
        <div>
            <h2>Recent Posts</h2>
            <div>
                <img src={blogPost.img} alt="" />
                <div>
                <h3>{blogPost.title}</h3>
                <span>{blogPost.date}</span>
                </div>
            </div>
        </div>
    )
}

export default blogPost ;
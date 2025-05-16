import BlogPageComponent from "@/component/BlogPageComponent/BlogPageComponent";
import PageHeader from "@/component/PageHeader/PageHeader";
import "./style.scss";

const BlogPage = () => {
  return (
    <div>
      <PageHeader />
      <BlogPageComponent />
    </div>
  );
};

export default BlogPage;

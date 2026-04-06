import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";


const BlogPage = async () => {
  try {
    const posts = await getPosts();

    if (!posts || posts.length === 0) {
      return <div className={styles.container}>No posts found.</div>;
    }

    return (
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
  } catch (err) {
    console.error("ERROR LOADING POSTS:", err);
    return <div className={styles.container}>Failed to load posts.</div>;
  }
};

export default BlogPage;
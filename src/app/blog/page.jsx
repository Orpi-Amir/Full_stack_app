import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  try {
    const posts = await getPosts();

    if (!posts || posts.length === 0) {
      return (
        <div className={styles.container}>
          <div className={styles.noPostsMessage}>No posts found.</div>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <div className={styles.post} key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.error("ERROR LOADING POSTS:", err);
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          Failed to load posts. Please try again later.
        </div>
      </div>
    );
  }
};

export default BlogPage;
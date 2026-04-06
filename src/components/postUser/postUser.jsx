import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

const PostUser = async ({ userId }) => {
  try {
    const user = await getUser(userId);

    if (!user) {
      return (
        <div className={styles.container}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>Unknown</span>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    );
  } catch (err) {
    console.error("ERROR LOADING USER:", err);
    return (
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>Unknown</span>
      </div>
    );
  }
};

export default PostUser;
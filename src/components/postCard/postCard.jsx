import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = ({ post }) => {
  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "Unknown";

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post.img || "https://images.unsplash.com/photo-1501785888041-af3ef285b470"}
            alt={post.title || "Post image"}
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>{formattedDate}</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc && post.desc.length > 150
            ? `${post.desc.substring(0, 150)}...`
            : post.desc}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
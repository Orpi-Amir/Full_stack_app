import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
 

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  
  const post = await getPost(slug);


  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Post Image"
          fill
          className={styles.img}
          sizes="100vw"
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          <div className={styles.avatarContainer}>
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Author Avatar"
              width={50}
              height={50}
              className={styles.avatar}
            />

            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
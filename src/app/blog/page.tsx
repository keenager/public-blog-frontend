import { BlogPostType } from "@/types/BlogTypes";
import PostCard from "./PostCard";
import MainTitle from "@/components/common/MainTitle";

export default async function BlogPage() {
  const res = await fetch("http://localhost:1337/api/blog-posts", {
    cache: "no-cache",
  });
  const postList: BlogPostType[] = (await res.json()).data;
  console.log(postList);
  return (
    <>
      <MainTitle>블로그</MainTitle>
      <section className="my-7 flex flex-col justify-center gap-8 md:grid md:grid-cols-2">
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}

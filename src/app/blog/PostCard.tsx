import Card from "@/components/common/Card";
import TextLink from "@/components/common/TextLink";
import { BlogPostType } from "@/types/BlogTypes";
import Link from "next/link";

export default function PostCard({
  post: { attributes: info },
}: {
  post: BlogPostType;
}) {
  const slug = "";
  const createDate = info.createdAt.split("T")[0];
  const snippet = info.content.slice(0, 20) + "...";
  return (
    <Card>
      {/* 상단(태그, 날짜) */}
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <span className="text-sm">{createDate}</span>
      </div>
      {/* 제목 */}
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={`/blog/${slug}`}>{info.title}</Link>
      </h2>
      {/* 스니펫 */}
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {snippet}
      </p>
      {/* 하단(글쓴이, 링크) */}
      <div className="flex items-center justify-between">
        <span className="font-medium dark:text-white">RedTraining</span>
        <TextLink href={`/blog/${slug}`} style="inline-flex items-center">
          Read more &rarr;
        </TextLink>
      </div>
    </Card>
  );
}

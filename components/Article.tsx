import React from "react";
import Image from "next/image";
import { ArticleType } from "@/type/article";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface ArticleProps {
     post: ArticleType;
   }

const Article: React.FC<ArticleProps> = ({post}) => {
  const imageUrl = post.image.fields.file.url.startsWith("//")
  ? `https:${post.image.fields.file.url}`
  : post.image.fields.file.url;
     return (
          <article className="flex max-w-xl flex-col items-start justify-between">
          <Image src={imageUrl} alt={post.title}/>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="">
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{documentToReactComponents(post.desc)}</p>
          </div>
        </article>
     )
}

export default Article;
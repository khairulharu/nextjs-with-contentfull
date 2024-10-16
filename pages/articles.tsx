import Link from "next/link";
import * as contentful from "contentful";
import { ArticleType } from "@/type/article";
import Article from "@/components/Article";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

interface ArticlesPageProps {
  articles: ArticleType[];
}

const Articles: React.FC<ArticlesPageProps> = ({ articles }) => {
  return (
    <section>
      <Link
        href="/article"
        className="rounded-full bg-slate-900 text-white px-8 py-4"
      >
        Article
      </Link>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles.map((article, index) => {
              return (
               <Article post={article} key={index}/>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: "articles",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const articles = response.items.map((item: any) => ({
    title: item.fields.title,
    desc: item.fields.desc,
    image: item.fields.image,
  }));

  return {
    props: {
      articles,
    },
  };
}

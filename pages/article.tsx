import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as contentful from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

interface ArticleProps {
  title: string;
  desc: Document;
  image: { fields: { file: { url: string } } }; // Assuming image is a Contentful asset with a file field
}



const Articles: React.FC<ArticleProps> = ({title, desc, image}) => {
  const imageUrl = image.fields.file.url.startsWith("//")
  ? `https:${image.fields.file.url}`
  : image.fields.file.url;
  return (
    <section  className="max-w-screen-xl mx-auto p-20">
      <div className="flex justify-items-start">
        <Link
          href="/"
          className="rounded-full bg-slate-900 text-white px-8 py-4"
        >
          Home
        </Link>
      </div>
      <div className="p-4">
          <h1 className="font-bold text-2xl py-6">{title}</h1>
          <Image
          src={imageUrl}
          alt={title}
          width={736}
          height={736}
          className="w-full"
          />
          <div className="py-12">{documentToReactComponents(desc)}</div>
      </div>
    </section>
  );
};

export default Articles;

export async function getStaticProps () {
  const result = await client.getEntry("13xzAX5pCQ2bwgUgRioFwQ")

  return {
    props: {
      title: result.fields.title,
      desc: result.fields.desc,
      image: result.fields.image,
    }
  }
}
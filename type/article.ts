import { Document } from "@contentful/rich-text-types";
export type ArticleType = {
     title: string;
     desc: Document;
     image: { fields: { file: { url: string } } };
}
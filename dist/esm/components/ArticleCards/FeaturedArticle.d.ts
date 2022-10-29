/// <reference types="react" />
import { IArticleHeaderData } from "../../shared/interfaces";
interface IProp {
    article: IArticleHeaderData;
    path: string;
}
declare const FeaturedArticle: ({ article, path }: IProp) => JSX.Element;
export default FeaturedArticle;

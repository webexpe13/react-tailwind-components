/// <reference types="react" />
import { ImageSize } from "../../shared/enums";
interface IArticleImage {
    src: string;
    caption?: string;
    size?: ImageSize;
    alt?: string;
    className?: string;
}
declare const Image: ({ src, caption, size, alt, className }: IArticleImage) => JSX.Element;
export default Image;

/// <reference types="react" />
import { IAuthor } from "../../shared/interfaces";
interface iAvatar {
    author?: IAuthor;
    className?: string;
    name?: string;
}
declare const Avatar: ({ author, className, name }: iAvatar) => JSX.Element;
export default Avatar;

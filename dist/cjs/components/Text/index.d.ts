/// <reference types="react" />
import { TextAlign } from "../../shared/enums";
interface IProps {
    children?: any;
    color?: string;
    textAlign?: TextAlign;
    className?: string;
    title?: boolean;
    subtitle?: boolean;
    p?: boolean;
    quote?: boolean;
    id?: string;
}
declare const Text: ({ children, color, textAlign, className, title, subtitle, p, quote, id }: IProps) => JSX.Element;
export default Text;

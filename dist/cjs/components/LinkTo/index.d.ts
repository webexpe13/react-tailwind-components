/// <reference types="react" />
interface iLinkTo {
    href: string;
    passHref?: boolean;
    newTab?: boolean;
    children?: any;
    external?: boolean;
    className?: string;
    onClick?: any;
}
declare const LinkTo: ({ href, passHref, newTab, external, children, className, onClick }: iLinkTo) => JSX.Element;
export default LinkTo;

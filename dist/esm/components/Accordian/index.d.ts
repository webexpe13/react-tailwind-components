/// <reference types="react" />
interface iAccordian {
    title: string;
    children: any;
    keepOpen?: boolean;
}
declare const Accordian: ({ title, children, keepOpen }: iAccordian) => JSX.Element;
export default Accordian;

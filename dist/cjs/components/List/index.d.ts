/// <reference types="react" />
interface iListProps {
    children?: any;
    className?: string;
    disk?: boolean;
    number?: boolean;
}
declare const List: ({ children, className, disk, number, }: iListProps) => JSX.Element;
export default List;

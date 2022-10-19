import { ListType } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from "./List.module.scss";

interface iListProps {
  children?: any;
  className?: string;
  disk?: boolean;
  number?: boolean;
}

const List = ({
  children,
  className,
  disk,
  number,
}: iListProps) => {
  return disk ? (
    <ul
      className={combineClasses(
        classes.list,
        ListType.disc,
        "pl-[30px]",
        className
      )}
    >
      {children}
    </ul>
  ) : number ? (
    <ul
      className={combineClasses(
        classes.list,
        ListType.number,
        "pl-[30px]",
        className
      )}
    >
      {children}
    </ul>
  ) : (
    <ul
      className={combineClasses(
        classes.list,
        ListType.none,
        "pl-[30px]",
        className
      )}
    >
      {children}
    </ul>
  );
};

export default List;

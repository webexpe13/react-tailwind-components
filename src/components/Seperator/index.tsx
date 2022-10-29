import { combineClasses } from "../../utils/utils";
import classes from './Seperator.module.scss';

interface iProps {
    line?: boolean;
    dots?: boolean;
    className?: string
}

const Seperator = ({ line = false, dots = false, className }: iProps) => {
    return (
        <>
            {
                line ? <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black my-[50px]', className)}></div> :
                    dots ? <div className={combineClasses(classes.section_seperator_dots, 'my-[50px]', className)}>
                        {
                            [...Array(5)].map((i) => (
                                <span key={Math.random()} className="dark:bg-white"></span>
                            ))
                        }
                    </div> : 
                    <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black my-[50px]', className)}></div>
            }

        </>
    )
}
export default Seperator
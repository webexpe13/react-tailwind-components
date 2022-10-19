import {Link} from "react-router-dom"
import { combineClasses, removePagesFromPath } from "../../utils/utils"

interface iLinkTo { 
    href: string, 
    passHref?: boolean, 
    newTab?: boolean, 
    children?: any, 
    external?: boolean, 
    className?: string,
    onClick? : any
}

const LinkTo = ({ href, passHref = true, newTab = false, external = false, children, className, onClick }: iLinkTo) => {
    return (
        <>
            {
                newTab || external ?    
                    <a href={removePagesFromPath(href)} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                        {children}
                    </a> :
                    <Link to={removePagesFromPath(href)}>
                        <a className={combineClasses(className, 'cursor-pointer hover:text-blue-500')} onClick={onClick}>
                            {children}
                        </a>
                    </Link>
            }
        </>
    )
}

export default LinkTo
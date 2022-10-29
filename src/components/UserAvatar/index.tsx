import { IAuthor } from "../../shared/interfaces";
import { combineClasses } from "../../utils/utils";

interface iAvatar {
  author?: IAuthor;
  className?: string;
  name?: string;
}

const Avatar = ({ author, className, name }: iAvatar) => {
  return (
    <div
      className={combineClasses(
        `flex items-center justify-center shadow-xl rounded-full overflow-hidden bg-blue-500 shrink-0`,
        className
      )}
    >
      {author ? (
        author?.profilePic ? (
          <img src={author.profilePic} alt={author.name} width="100%" />
        ) : (
          <p className="text-center font-medium text-white">
            {author?.name[0]}
          </p>
        )
      ) : name ? (
        <p className="text-center font-medium text-white">{name[0]}</p>
      ) : (
        <p className="text-center font-medium text-white">U</p>
      )}
    </div>
  );
};

export default Avatar;

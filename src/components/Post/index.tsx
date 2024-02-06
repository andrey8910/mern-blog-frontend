import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import clsx from 'clsx';
import { PostSkeleton } from './Skeleton';
import styles from './Post.module.scss';
import {ReactChild, ReactFragment, ReactPortal} from "react";

interface IUser{
    avatarUrl: string,
    fullName: string,
}
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
interface IPostProps {
    children?: ReactNode,
    id: number,
    title: string,
    imageUrl: string,
    user: IUser,
    createdAt: string,
    viewsCount: number,
    commentsCount: number,
    tags: string[],
    isFullPost?: boolean | undefined,
    isLoading?: boolean | undefined,
    isEditable: boolean | undefined
}

export const Post = (props: IPostProps) => {
    const {
        children,
        id,
        title,
        imageUrl,
        viewsCount,
        commentsCount,
        tags,
        isFullPost,
        isEditable,
        isLoading
    } = props;

    if (isLoading) {
        return <PostSkeleton />;
    }

    const onClickRemove = () => {};

    return (
        <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
            {isEditable && (
                <div className={styles.editButtons}>
                    <a href={`/posts/${id}/edit`}>
                        <IconButton color="primary">
                            <EditIcon />
                        </IconButton>
                    </a>
                    <IconButton onClick={onClickRemove} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
            {imageUrl && (
                <img
                    className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                    src={imageUrl}
                    alt={title}
                />
            )}
            <div className={styles.wrapper}>
                {/*<UserInfo {...user} additionalText={createdAt} />*/}
                <div className={styles.indention}>
                    <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
                        {isFullPost ? title : <a href={`/posts/${id}`}>{title}</a>}
                    </h2>
                    <ul className={styles.tags}>
                        {tags.map((tag: string) => (
                            <li key={tag}>
                                <a href={`/tag/${tag}`}>#{tag}</a>
                            </li>
                        ))}
                    </ul>
                    {children && <div className={styles.content}>{children}</div>}
                    <ul className={styles.postDetails}>
                        <li>
                            <EyeIcon />
                            <span>{viewsCount}</span>
                        </li>
                        <li>
                            <CommentIcon />
                            <span>{commentsCount}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
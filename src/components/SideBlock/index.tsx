import styles from "./SideBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {ReactChild, ReactFragment, ReactPortal} from "react";

interface ISideBlockProps {
    title: string,
    children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

export const SideBlock = (props : ISideBlockProps ) => {
    const {title, children} = props;
    return (
        <Paper classes={{ root: styles.root }}>
            <Typography variant="h6" classes={{ root: styles.title }}>
                {title}
            </Typography>
            {children}
        </Paper>
    );
};
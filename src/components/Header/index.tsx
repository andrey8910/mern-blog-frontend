import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from './Header.module.scss';

export const Header = () => {
    const isAuth = false;

    const onClickLogout = () => {};
    return (
        <header className={styles.header}>
            <Container maxWidth='lg'>
                <div className={styles.inner}>
                    <a className={styles.logo} href="/">
                        <div>MERN-BLOG</div>
                    </a>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <a href="/posts/create">
                                    <Button variant="contained">Create Post</Button>
                                </a>
                                <Button onClick={onClickLogout} variant="contained" color="error">
                                    LogIn
                                </Button>
                            </>
                        ) : (
                            <>
                                <a href="/login">
                                    <Button variant="outlined">LogIn</Button>
                                </a>
                                <a href="/register">
                                    <Button variant="contained">Create Account</Button>
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
}
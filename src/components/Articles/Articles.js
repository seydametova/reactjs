import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';

import "./Articles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { selectArticlesError, selectArticlesList, selectArticlesLoading } from '../../store/articles/selectors';
import { getArticles } from '../../store/articles/actions';


export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticlesList);
    const isLoading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);

    const requestArticles = async () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        requestArticles();
    }, []);

    return (
        <>
            <h3 className="Articles-header">ARTICLES</h3>
            {isLoading ? (
                <CircularProgress/> 
            ) : (
                <>
                    <div className="Articles">
                        <Button 
                            onClick={requestArticles}
                            type="submit"
                            variant="outlined"
                            color="primary"
                        >
                            REQUEST
                        </Button>
                        {!!error && <h4 className="Error-header">ERROR: {error}</h4>}
                    </div>
                    <ul>
                        {articles.map((art) => (
                            <li key={art.id}>{art.title}</li>
                        ))}
                    </ul>
                
                </>
            )}
        </>
    )
};
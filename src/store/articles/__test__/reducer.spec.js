import 
{
    initialState,
    articlesReducer,
} from '../reducer';
import { REQUEST_STATUS } from "../../../utils/constants";
import {
    getArticlesLoading,
    getArticlesSuccess,
    getArticlesFailure,
    getArticles,
    REQUEST_ARTICLES_LOADING,
    REQUEST_ARTICLES_SUCCESS,
    REQUEST_ARTICLES_FAILURE
} from '../actions';


describe('news reducer', () => {
    let initialStateTest;
    beforeEach(() => {
        initialStateTest = JSON.parse(JSON.stringify(initialState));
    })

    test('request articles loading', () => {
        const expected = {
            ...initialStateTest,
            request: {
                ...initialStateTest.request,
                status: REQUEST_STATUS.LOADING
            }
        }

        const action = getArticlesLoading();

        const received = articlesReducer(initialStateTest, action);

        expect(received).toEqual(expected);
    });

    test('request articles success', () => {
        const articles = [
            {id: "1", title: "test"}
        ]

        const expected = {
            ...initialStateTest,
            articlesList: articles,
            request: {
                error: '',
                status: REQUEST_STATUS.SUCCESS
            }
        }

        const action = getArticlesSuccess(articles);

        const received = articlesReducer(initialStateTest, action);

        expect(received).toEqual(expected);
    });

    test('request articles failure', () => {
        const err = 'error';

        const expected = {
            ...initialStateTest,
            articlesList: [],
            request: {
                error: err,
                status: REQUEST_STATUS.FAILURE
            }
        }

        const action = getArticlesFailure(err);

        const received = articlesReducer(initialStateTest, action);

        expect(received).toEqual(expected);
    });

    test('unknown action', () => {
        const action = {
            type: 'unknown'
        };

        const received = articlesReducer(initialStateTest, action);

        expect(received).toEqual(initialStateTest)
    })
});
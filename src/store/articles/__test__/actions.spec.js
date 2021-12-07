import {
    getArticlesLoading,
    getArticlesSuccess,
    getArticlesFailure,
    getArticles,
    REQUEST_ARTICLES_LOADING,
    REQUEST_ARTICLES_SUCCESS,
    REQUEST_ARTICLES_FAILURE
} from '../actions';

describe('getArticlesLoading', () => {
    test('should return obj with certain type', () => {
        const expected = {
            type: REQUEST_ARTICLES_LOADING,
        };

        const received = getArticlesLoading();

        expect(received).toEqual(expected);
    });
});

describe('getArticlesSuccess', () => {
    test('should return obj with type and payload', () => {
        const payload = [];

        const expected = {
            type: REQUEST_ARTICLES_SUCCESS,
            payload
        };

        const received = getArticlesSuccess(payload);

        expect(received).toEqual(expected);
    });
});

describe('getArticlesFailure', () => {
    test('should return obj with type and payload', () => {
        const payload = [];

        const expected = {
            type: REQUEST_ARTICLES_FAILURE,
            payload
        };

        const received = getArticlesFailure(payload);

        expect(received).toEqual(expected);
    });
});



describe('getArticles', () => {
    test('dispatches getArticlesLoading', () => {
        const mockDispatch = jest.fn();

        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesLoading());

    });

    // Skipped тест
    test.skip('dispatches success action on successful fetch', async () => {
        const result = { articles: [] };
        fetch.mockResponseOnce(JSON.stringify(result));
        const mockDispatch = jest.fn();
        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
    });

    test('dispatches failure action on error in fetch', async () => {
        fetch.mockRejectOnce(new Error('test'));
        const mockDispatch = jest.fn();
        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure('test'));
    });
});
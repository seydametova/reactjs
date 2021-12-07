import {render } from '@testing-library/react';
import { Messages } from '../Messages';

describe('Messages tests', () => {
    test('renders author and text', () => {
        const messages = render(<Messages messages={[{ text: 'messagetext', author: 'author', id: '1' }]} />)

        const msgText = messages.getByText('messagetext');
        const authorText = messages.getByText('author:');

        expect(msgText).toBeInTheDocument();
        expect(authorText).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const messages = render(<Messages messages={[{ text: 'messagetext', author: 'author', id: '1' }]} />)

        expect(messages).toMatchSnapshot();
    });
})
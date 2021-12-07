import { render } from "@testing-library/react";
import { Form } from "../Form";

describe('Form tests', () => {
    test('render button text', () => {
        const form = render(<Form buttonText={'Send'}/>)

        const buttonTextForm = form.getByText('Send');

        expect(buttonTextForm).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const form = render(<Form buttonText={'Send'}/>)

        expect(form).toMatchSnapshot();
    })
});

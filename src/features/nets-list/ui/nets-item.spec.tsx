import { render, screen } from '@testing-library/react';
import { NetsItem } from './nets-item';
import userEvent from '@testing-library/user-event';

describe('nets item', () => {
    it('should call delete callback', async () => {
        const onDelete = jest.fn();

        render(
            <NetsItem
                net={{
                    id: 'test-id',
                    title: 'test-title',
                    description: 'test description',
                }}
                onDelete={onDelete}
            />,
        );

        await userEvent.click(screen.getByText('Delete'));

        expect(onDelete).toHaveBeenCalled();
    });
});

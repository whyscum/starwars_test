import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

const testChar = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    gender: 'male',
    birth_year: '19BBY',
}

describe('Card component', () => {
    it('render character name', () => {
        render(<Card char={testChar} onClick={() => {}} />)
        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    })

    it('render height and mass', () => {
        render(<Card char={testChar} onClick={() => {}} />)
        expect(screen.getByText('172')).toBeInTheDocument()
        expect(screen.getByText('77')).toBeInTheDocument()
        expect(screen.getByText(/height/)).toBeInTheDocument()
        expect(screen.getByText(/mass/)).toBeInTheDocument()
    })

    it('render birth year and gender', () => {
        render(<Card char={testChar} onClick={() => {}} />)
        expect(screen.getByText('19BBY')).toBeInTheDocument()
        expect(screen.getByText('male')).toBeInTheDocument()
    })

    it('calls onClick handler', () => {
        const onClickMock = jest.fn()
        render(<Card char={testChar} onClick={onClickMock} />)
        fireEvent.click(screen.getByRole('button'))
        expect(onClickMock).toHaveBeenCalledWith(testChar)
    })
})

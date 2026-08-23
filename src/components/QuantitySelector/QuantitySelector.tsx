import './QuantitySelector.scss';
import { MinusIcon, PlusIcon } from '../../utils/icons';
import React, { useState } from 'react';

interface QuantitySelectorProps {
    quantity: number;
    onChange: (quantity: number) => void;
}

function QuantitySelector({ quantity, onChange }: QuantitySelectorProps){
    const [inputValue, setInputValue] = useState(String(quantity).padStart(2, '0'));

    const handleIncrease = () => {
        const newQuantity = quantity + 1;

        onChange(newQuantity);
        setInputValue(String(newQuantity).padStart(2, '0'));
    };

    const handleDecrease = () => {
        const newQuantity = Math.max(1, quantity - 1);

        onChange(newQuantity);
        setInputValue(String(newQuantity).padStart(2, '0'));
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputBlur = () => {
        const value = Number(inputValue);

        if(!inputValue || Number.isNaN(value) || value < 1) {
            setInputValue('01');
            onChange(1);
            return;
        }

        onChange(value);
        setInputValue(String(value).padStart(2, '0'));
    };

    const handleInputKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            event.currentTarget.blur();
        }
    };

    return (
        <div className='quantity-selector'>
            <button type='button' onClick={handleDecrease} aria-label='Diminuir quantidade'>
                <img src={MinusIcon} alt="" />
            </button>
            <input 
                type='text' 
                inputMode='numeric' 
                value={inputValue} 
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                aria-label='Quantidade' 
            />

            <button type='button' onClick={handleIncrease} aria-label='Aumentar quantidade'>
                <img src={PlusIcon} alt="" />
            </button>
        </div>
    )
}

export default QuantitySelector;
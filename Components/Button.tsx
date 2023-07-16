import React from 'react';

interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, secondary, onClick, fullWidth, large }) => {
    return (
        <div>Button</div>
    )
}

export default Button
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

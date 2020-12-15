import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'hooks/useOnClickOutside';
import * as Styled from './Dropdown.styles';

const Dropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleOptionClick = (value) => {
    setIsOpen(false);
    onChange(value);
  };

  const selectedOption = options.find(opt => opt.value === value);
  const { label: selectedOptionLabel } = selectedOption || {};

  return (
    <Styled.Dropdown ref={dropdownRef}>
      <Styled.TriggerButton onClick={() => setIsOpen(!isOpen)}>
        <Styled.SelectedOptionText isPlaceholder={Boolean(selectedOption)}>
          {selectedOptionLabel || placeholder}
        </Styled.SelectedOptionText>
        <p>{isOpen ? '▲' : '▼'}</p>
      </Styled.TriggerButton>
      {isOpen && (
        <Styled.OptionsList>
          {options.map((opt) => (
            <Styled.OptionItem 
              key={`dropdown-opt-${opt.value}`} 
              onClick={() => handleOptionClick(opt.value)}
              isSelected={opt.value === value}
            >
              {opt.label}
            </Styled.OptionItem>
          ))}
        </Styled.OptionsList>
      )}
    </Styled.Dropdown>
  )
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Dropdown;
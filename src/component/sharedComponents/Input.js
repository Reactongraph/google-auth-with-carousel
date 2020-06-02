import React from 'react'

const InputContainer = ({
  onKeyPress,
  Id,
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  maxLength,
  disable,
  min
}) => (
  <input
    id={Id ? Id : ''}
    type={type ? type : 'text'}
    name={name}
    min={type ? (type === 'number' ? min : '') : ''}
    value={value}
    className={className}
    onChange={onChange}
    placeholder={placeholder}
    maxLength={maxLength ? maxLength : 100000}
    disabled={disable ? disable : false}
    onKeyPress={onKeyPress ? onKeyPress : null}
    autoFocus={true}
  />
)

export default InputContainer

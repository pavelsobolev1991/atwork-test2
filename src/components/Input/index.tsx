import './input.scss';
import { name } from '../../modules/ProfileForm/constants';
import InputMask from 'react-input-mask';
import { ClassAttributes, InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { FieldErrors } from 'react-hook-form';

type InputMaskProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>;
type InputProps = {
  fieldName: string;
  register: any;
  errors: any;
};

const Input: React.FC<InputProps> = ({ fieldName, register, errors }) => {
  return (
    <div className="mainInputContainer">
      <div className="inputContainer">
        <label className="label">{name[fieldName]}</label>
        {fieldName === 'phone' ? (
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar="_"
            {...register(fieldName, { required: true })}
          >
            {(inputProps: InputMaskProps) => (
              <input
                {...inputProps}
                placeholder={name[fieldName]}
                className="input"
              />
            )}
          </InputMask>
        ) : (
          <input
            {...register(fieldName, { required: true })}
            placeholder={name[fieldName]}
            className="input"
          />
        )}
      </div>
      {errors?.type === 'required' && (
        <span className="error">Поле обязательно для заполнения</span>
      )}
    </div>
  );
};

export default Input;

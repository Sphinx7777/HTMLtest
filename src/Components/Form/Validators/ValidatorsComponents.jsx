import React from "react";
import s from './../Login.module.scss';


export const InputComponent = (
	{input, label, type, placeholder, child, maxLength, autoFocus, meta: {error, warning, touched}}) => {
	return (
		<>
			<div
				className={s.inputLabel + ' ' + (touched && error ? s.errorInputLabel : '')}>{touched && error ? error : label}</div>
			<input className={s.inputField + ' ' + (touched && error ? s.errorInputField : '')}
						 {...input} autoFocus={autoFocus} placeholder={touched && error ? error : placeholder} maxLength={maxLength}
						 type={type}/>{child}

			{/*{touched &&
			((error && <span className={s.inputError}>{error}</span>) ||
				(warning && <div className={s.inputWarning}>{warning}  </div>))}*/}
		</>
	)
};



import React from "react";
import s from './../Login.module.scss';
import warning_sign from "../../../icons/warning_sign.png";


export const InputComponent = (
	{input, type, placeholder, child, className, maxLength, autoFocus, meta: {error, warning, touched}}) => {
	return (
		<>
			<input className={s.inputField + ' ' + (touched && error ? s.errorInputField : '') + ' ' + s.reg}
						 {...input} autoFocus={autoFocus} placeholder={touched && error ? error : placeholder} maxLength={maxLength}
						 type={type}/>{child}
			{touched &&
			((error &&
					<div className={className}>
						<img className={s.warning} src={warning_sign} alt=""/>
						<span className={s.error}>{error}</span>
					</div>
				) ||
				(warning && <div className={s.inputWarning}>{warning}</div>))}
		</>
	)
};


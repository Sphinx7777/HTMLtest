import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./Validators/ValidatorsComponents";
import {email, emptyField, maxLengthCreator, minLengthCreator} from "./Validators/CheckComponent";

const maxlength30 = maxLengthCreator(30);
const maxlength50 = maxLengthCreator(50);
const minlength4 = minLengthCreator(4);


const LoginRegisterForm = (
	{
		handleSubmit,
		submitting,
		submitRegData,
		pristine,
		reset,
		setRegData
	}) => {

	const enterSubmit = (event) => {
		if (event.key === 'Enter') {
			handleSubmit(submitRegData)
		}
	};

	return (
		<div className={s.login}>
			<form onSubmit={handleSubmit(submitRegData)}
						onKeyPress={enterSubmit}>
				<div className={s.regEmail}>
					Email
				</div>
				<div className={s.loginEmail + ' ' + s.reg}>
					<Field
						name="email"
						type="email"
						maxLength='51'
						className={s.regEmailError}
						component={InputComponent}
						validate={[emptyField, maxlength50, email]}
					/>
				</div>
				<div className={s.regUserName}>
					User Name
				</div>
				<div className={s.loginName + ' ' + s.reg}>
					<Field
						name="name"
						type="text"
						maxLength='31'
						component={InputComponent}
						className={s.regNameError}
						validate={[emptyField, maxlength30]}
					/>
				</div>
				<div className={s.regPassword}>
					Password
				</div>
				<div className={s.loginPass + ' ' + s.reg}>
					<Field
						name="password"
						type="password"
						maxLength='31'
						className={s.regPassError}
						component={InputComponent}
						validate={[emptyField, minlength4, maxlength30]}
					/>
				</div>
				<button className={s.loginRegisterBtn}
								type="submit"
								disabled={pristine || submitting}
					/*onClick={()=>setTimeout(reset,0)}*/>
					Register
				</button>
			</form>
		</div>
	)
};

export default reduxForm({
	form: 'loginRegisterForm',
})(LoginRegisterForm)





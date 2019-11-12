import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./Validators/ValidatorsComponents";
import {emptyField, maxLengthCreator, minLengthCreator} from "./Validators/CheckComponent";
import longer_enter_password from "../../icons/longer_enter_password.png";

const maxlength30 = maxLengthCreator(30);
const minlength4 = minLengthCreator(4);


const LoginForm = (
	{handleSubmit,
		submitting,
		reset,
		pristine,
		setLogData
	}) => {

	const enterSubmit = (event) => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	return (
		<div className={s.login}>
			<form onSubmit={handleSubmit}
						onKeyPress={enterSubmit}>
				<div className={s.loginName}>
					<Field
						name="name"
						type="text"
						placeholder='User Name'
						maxLength='31'
						className={s.logNameError}
						component={InputComponent}
						validate={[emptyField, maxlength30]}
					/>
				</div>
				<div className={s.loginPass}>
					<Field
						name="password"
						type="password"
						placeholder='Password'
						maxLength='31'
						className={s.logPassError}
						component={InputComponent}
						validate={[emptyField, minlength4, maxlength30]}
					/>
				</div>
				<div className={s.loginCheck}>
					<div className={s.check}>
						<Field
							name="rememberMe"
							type="checkbox"
							child='Remember My password'
							component={InputComponent}
						/>
						<img className={s.longer_enter_password}
								 src={longer_enter_password}
								 alt=""
						/>
					</div>
				</div>
				<button className={s.loginBtn}
								type="submit"
								disabled={pristine || submitting}
					/*onClick={()=>setTimeout(reset,0)}*/>
					Login
				</button>
			</form>
		</div>
	)
};

export default reduxForm({
	form: 'loginForm',
})(LoginForm)





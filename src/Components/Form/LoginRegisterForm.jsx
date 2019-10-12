import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";

import {InputComponent} from "./Validators/ValidatorsComponents";
import {emptyField, maxLengthCreator, minLengthCreator} from "./Validators/CheckComponent";
import reg_btn from "../../icons/reg_btn.png";


const maxlength30 = maxLengthCreator(30);
const maxlength50 = maxLengthCreator(50);
const minlength4 = minLengthCreator(4);


const LoginRegisterForm = ({handleSubmit, submitting, submitRegData, error}) => {


	return (
		<div className={s.login}>
			<form onSubmit={handleSubmit(submitRegData)} onKeyPress={(event) => {
				if (event.key === 'Enter') {
					handleSubmit(submitRegData)
				}
			}}>
				<div className={s.regEmail}>Email</div>
				<div className={s.loginEmail}>
					<Field
						name="email"
						type="email"
						component={InputComponent}
						maxLength='51'
						validate={[emptyField, maxlength50]}
					/>
				</div>
				<div className={s.regUserName}>User Name</div>
				<div className={s.loginName}>
					<Field
						name="name"
						type="text"
						component={InputComponent}

						maxLength='31'
						validate={[emptyField, maxlength30]}
					/>
				</div>
				<div className={s.regPassword}>Password</div>
				<div className={s.loginPass}>
					<Field
						name="password"
						type="password"
						component={InputComponent}

						maxLength='31'
						validate={[emptyField, minlength4, maxlength30]}
					/>
				</div>
				{/*{error && <span className={s.loginFormError}>{error}</span>}*/}
				<button className={s.loginRegisterBtn} type="submit" disabled={submitting}>
					<img className={s.reg_btn} src={reg_btn} alt=""/>
				</button>
			</form>
		</div>
	)
};

export default reduxForm({
	form: 'loginRegisterForm',
})(LoginRegisterForm)





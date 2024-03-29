import React, {useState} from 'react';
import s from './App.module.scss';
import LoginForm from "./Components/Form/LoginForm";
import LoginRegisterForm from "./Components/Form/LoginRegisterForm";
import compose from "./icons/compose.png";
import form_Bac from "./icons/form_Bac.png";
import or from "./icons/or.png";

const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));


export const App = () => {

	const [logData, setLogData] = useState(null);
	const [regData, setRegData] = useState(null);
	console.log(logData);
	console.log(regData);

	const onSubmit = (data) => {
		setLogData(data);
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};
	const submitRegData = (data) => {
		setRegData(data);
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};

	return (
		<>
			<div className={s.formWrapper}>
				<img className={s.formBac}
						 src={form_Bac}
						 alt=""
				/>
				<div className={s.form}>
					<div className={s.formHeader}>
						<img className={s.compose}
								 src={compose}
								 alt=""
						/>
					</div>
					<div className={s.formContent}>
						<div className={s.formContentLeft}>
							<img
								src={or}
								alt=""
							/>
							<LoginForm {...{onSubmit,setLogData}} />
						</div>
						<div className={s.formContentRight}>
							<div className={s.register}>
								Register
							</div>
							<LoginRegisterForm {...{submitRegData,setRegData}} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};



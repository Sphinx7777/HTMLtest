import React, {useState} from 'react';
import s from './App.module.scss';
import LoginReduxForm from "./Components/Form/LoginReduxForm";
import LoginRegisterForm from "./Components/Form/LoginRegisterForm";


export const App = ()=>{

	const [logData, setLogData] = useState(null);
	const [regData, setRegData] = useState(null);
	console.log(logData);
	console.log(regData);

	const onSubmit = (data) => {
		setLogData(data)
	};
	const submitRegData = (data) => {
		setRegData(data)
	};


	return (
		<>
			<div className={s.formWrapper}>
				<img className={s.twitterM} src={'/icons/twitter.ico'} alt=""/>
				<img className={s.twitterL} src={'/icons/twitter.ico'} alt=""/>
				<img className={s.twitterS} src={'/icons/twitter.ico'} alt=""/>
				<img className={s.faceBookS} src={'/icons/facebook.ico'} alt=""/>
				<img className={s.faceBookM} src={'/icons/facebook.ico'} alt=""/>
				<img className={s.telegram} src={'/icons/telegram.ico'} alt=""/>
				<img className={s.instagram} src={'/icons/instagram.ico'} alt=""/>
				<img className={s.linkedin} src={'/icons/linkedin.ico'} alt=""/>
				<img className={s.youtube} src={'/icons/youtube.ico'} alt=""/>
				<div className={s.headerTitleBac}>Login To Your Account / Register New</div>
				<div className={s.form}>
					<div className={s.formHeader}>
						<div className={s.note}><img src={'/icons/note.ico'} alt=""/></div>
						<div className={s.headerTitle}>Login To Your Account / Register New</div>
					</div>
					<div className={s.formContent}>
						<div className={s.formContentLeft}>
							<div className={s.round}>
								<span className={s.roundLine}> </span>
								<div className={s.ringW}>/</div>
							</div>
							<LoginReduxForm onSubmit={onSubmit}/>
						</div>
						<div className={s.formContentRight}>
							<div className={s.reg}>Register</div>
							<LoginRegisterForm submitRegData={submitRegData}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};



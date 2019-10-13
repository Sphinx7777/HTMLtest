export const emptyField = value =>
	value && value.length >= 1 ? undefined : 'Required field';


export const maxLengthCreator = maxLength => values =>
	values && values.length > maxLength ? `Max ${maxLength} symbols` :
		undefined;

export const minLengthCreator = minLength => values =>
	values && values.length < minLength ? `Minimum ${minLength} symbols` :
		undefined;


export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined;

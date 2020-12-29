/**
 *
 * @param form - форма из рефа (useRef)
 * @param tagName - название тэга элемента, который нужно получить
 * @returns элемент, в зависимости от переданного тэга
 */
import {TAG_NAMES} from '../constants/tags';


export const getFormElement = (form, tagName) => Array.from(form?.current?.elements)
    .find(element => {
	  switch (tagName) {
		  case TAG_NAMES.BUTTON:
			  return element?.tagName === tagName && !element?.value;
		  case TAG_NAMES.INPUT:
		  default:
			  return element?.tagName === tagName
				&& !element?.value
				&& element?.hasAttribute('required');
	  }

    });

/**
 *
 * @param {array} inputs - массив полей, который будет передаваться в форму (вычисление значения поля)
 * @returns {*}
 */
export const getFormInitialValues = inputs =>
    Object.assign({}, ...inputs?.map(item => ({[item.name]: item?.value || ''})));


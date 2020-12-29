/**
 * Принимает в себя объект, в котором приравнивает значения к ключам
 * @param obj
 * @return - {key: key}
 */
export const equateValuesToKey = obj => Object.keys(obj).forEach(key => {obj[key] = key;});

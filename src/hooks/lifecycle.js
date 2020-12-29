/*eslint-disable*/
import {useEffect} from 'react';


export const useComponentDidMount = func => useEffect(func, []);
export const useComponentDidUpdate = (func, deps) => useEffect(func, deps);

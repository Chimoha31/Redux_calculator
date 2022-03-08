import {combineReduvers} from 'redux';
import calculator from './calculator';

const reducer = combineReduvers({calculator});

export default reducer;
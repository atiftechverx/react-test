import {combineReducers} from 'redux';
import ReducerForm01 from './ReducerForm01';
import ReducerForm02 from './ReducerForm02';


const allReducers = combineReducers({
    form01: ReducerForm01,
    form02: ReducerForm02
});

export default allReducers

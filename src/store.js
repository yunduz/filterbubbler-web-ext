import {createStore} from 'redux';
import {createBackgroundStore} from 'redux-webext';
import {ADD_CLASSIFICATION, SET_URL, ANALYZE_CONTENT} from './constants';
import reducers from './reducers';
import {addClassification, setUrl, analyzeContent} from './actions';
import {actions as formActions} from 'redux-form';
import {actionTypes as formActionTypes} from 'redux-form';

const store = createStore(reducers)

const actions = {}
actions[formActionTypes.REGISTER_FIELD] = formActions.registerField
actions[formActionTypes.SUBMIT] = formActions.sumbit
actions[formActionTypes.SET_SUBMIT_SUCCEEDED] = formActions.setSubmitSucceeded
actions[formActionTypes.TOUCH] = formActions.touch
actions[formActionTypes.CHANGE] = formActions.change
actions[formActionTypes.BLUR] = formActions.blur
actions[formActionTypes.FOCUS] = formActions.focus

export default createBackgroundStore({
    store,
    actions: actions
})

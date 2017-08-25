
export default function (state = {form02: {dob: {error: '', val: ''}, gender: {error: '', val: ''}, where_did: {error: '', val: ''} }}, action) {

  console.log('Form02 Reducer start...')
    switch (action.type) {
        case 'FORM02_SUBMITTED':
            console.log(state.form02)
            localStorage['form02'] = JSON.stringify(state.form02);
            return action.payload;
            break;
    }
    return state;

}

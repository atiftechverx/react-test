
export default function (state = {form01: {email: {error: '', val: ''}, password: {error: '', val: ''}, confirm_password: {error: '', val: ''} }}, action) {
  console.log('Form01 Reducer start...')
    switch (action.type) {
        case 'FORM01_SUBMITTED':
            console.log(state)
            localStorage['form01'] = JSON.stringify(state.form01);
            return action.payload;
            break;
    }
    return state;

}

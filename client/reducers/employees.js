import {
  REQUEST_EMPLOYEES,
  REQUEST_EMPLOYEES_SUCCESS,
  REQUEST_EMPLOYEES_ERROR,
} from '../actions/actionCreators';

/*
  I'm getting employees from the defaultState (set up in store.js).
  If I were using a RESTful API, as we were fetching employees we might change
  state of isFetching to true. We could check if that was true and conditionally
  load a spinner.

  Upon successful retrival, we would set the isFetching flag back to false. Once
  we know that isFetching is fale and employees has entries (another check), we
  would load our component that lists all employees. In our example, this is
  UserPage.js.

  We would have an error action type. This way we could display whatever
  error message might come back.
*/

function employees(state = [], action) {
  switch(action.type) {
    case REQUEST_EMPLOYEES :
      // return Object.assign({}, state, {
      //   isFetching: true,
      //   error: ''
      // });
    case REQUEST_EMPLOYEES_SUCCESS :
      // return Object.assign({}, state, {
      //   isFetching: false,
      //   employees: action.employees
      // });
    case REQUEST_EMPLOYEES_ERROR :
      // return Object.assign({}, state, {
      //   isFetching: false,
      //   error: "There was an error requesting users."
      // });
    default:
      return state;
  }
}

export default employees;

// import fetch from 'ismorphic-fetch';

export const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES';
export const REQUEST_EMPLOYEES_SUCCESS = 'REQUEST_EMPLOYEES_SUCCESS';
export const REQUEST_EMPLOYEES_ERROR = 'REQUEST_EMPLOYEES_ERROR';

export function requestEmployees() {
  return {
    type: REQUEST_EMPLOYEES
  }
}

export function requestEmployeesSuccess(employees) {
  return {
    type: REQUEST_EMPLOYEES_SUCCESS,
    employees
  }
}

export function requestEmployeesError(error) {
  return {
    type: REQUEST_EMPLOYEES_ERROR,
    error
  }
}

export function asyncRequestEmployees(results) {
  return dispatch => {
    dispatch(requestEmployees());

    // Here's an example of how we might call an API.

    // fetch('https://someapi.com/api/users')
    //   .then(function(response){
    //     if (response.status >= 400) {
    //         dispatch(requestEmployeesError(response));
    //     }
    //     dispatch(requestEmployeesSuccess(response));
    //
    //   })

    // let response = fetch('https://someapi.com/api/users');

    dispatch(requestEmployeesSuccess(response));

  }
}

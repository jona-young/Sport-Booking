import { axiosInstance } from "./axiosApi.js";


//Pulls profile from DRF API on localStorage user_id
export const getProfile = (onProfileUpdate) => {
  const user_id = localStorage.getItem('user_id')

  axiosInstance.get(`/profile/${user_id}/`)
      .then((response) => {
        console.log(response.data)
        onProfileUpdate(response.data)
      }).catch ((error) => {
        console.log(error.response)
        throw error;
  })
}

export const handleChange = (
  e,
  onUsernameUpdate,
  onPasswordUpdate,
  onEmailUpdate,
  onFnameUpdate,
  onLnameUpdate
) => {
  const name = e.target.name;
  const value = e.target.value;

  if (name === "username") {
    onUsernameUpdate(value);
  } else if (name === "password") {
    onPasswordUpdate(value);
  } else if (name === "email") {
    onEmailUpdate(value);
  } else if (name === "fname") {
    onFnameUpdate(value);
  } else if (name === 'lname') {
    onLnameUpdate(value);
  }
};

export const handleLoginSubmit = (e, username, password, history, onErrorUpdate) => {
  e.preventDefault();

    axiosInstance.post('/token/obtain/', {
      username: username,
      password: password
    }).then((response) => {
      axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      //Pulls the user id with the goal to access user profile in django api
      const tokenParts = response.data.access.split('.');
      const encodedPayload = tokenParts[1];
      const rawPayload = atob(encodedPayload);
      const user = JSON.parse(rawPayload);
      localStorage.setItem('user_id', user.user_id);

      history.push("/tennis-book");
      return response;
    }).catch (error => {
      console.log('error response ', error)
      if (error.response.status === 401) {
        onErrorUpdate("Either the username or password you entered was incorrect. Please try again.")
      } else if (error.request) {
        onErrorUpdate(error.request)
      } else {
        onErrorUpdate("An unknown error has occured.")
      }
    })

}

export const handleRegisterSubmit = (e, username, password, email, fname, lname, history, onErrorUpdate) => {
  e.preventDefault();

    axiosInstance.post('/user/create/', {
      username: username,
      email: email,
      password: password,
      first_name: fname,
      last_name: lname
    }).then((response) => {
      history.push("/tennis-book");
      return response;
    }).catch (error => {
    if (error.response) {
      console.log(error.response)
      if (error.response.data.password) {
        onErrorUpdate("Your password does not meet the required minimum 8 characters!")
      } else if (error.response.status === 500) {
        onErrorUpdate("You username is already in use. Please choose a different username.")
      }
    } else if (error.request) {
      onErrorUpdate(error.request)
    } else {
      onErrorUpdate("An unknown error has occured.")
    }
  })
}


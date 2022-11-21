import errMsg from "../../functions/errMsg.mjs";

/**
 * user log in. needs valid email and password. 
 * @param {text} email valid email
 * @param {text} password enter valid password
 * @param {url to api login endpoint} APIUrl url to api login endpoint
 */
export default async function login(email, password, APIUrl) {  
  const errMsgContainer = document.querySelector(".error-msg-login"); 

  const fetchOptions = {
    method: 'POST',
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  }

  try {
    const response = await fetch(APIUrl, fetchOptions);
    const result = await response.json();
    const responseError = result.errors;
    console.log(responseError)
  
    errMsg(errMsgContainer, responseError);

    // if(result.status)
    
  } catch(error){
    console.log(error)
    errMsgContainer.innerText += error;
  }
}
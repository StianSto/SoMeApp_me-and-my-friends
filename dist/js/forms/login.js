/**
 * user log in. needs valid email and password. 
 * @param {text} email valid email
 * @param {text} password enter valid password
 * @param {url to api login endpoint} APIUrl url to api login endpoint
 */
export default async function login(email, password, APIUrl) {  
  const errMsg = document.querySelector(".error-msg-login")
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

    const responseError = result.errors[0].message;
    if(typeof responseError === "string") { 
      errMsg.classList.remove("d-none")
      errMsg.innerText = "! " + responseError; 
    }
    
  } catch(error){
    console.log(error)
    errMsg.innerText += error;
  }
}
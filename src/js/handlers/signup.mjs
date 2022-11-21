/**
 * register user
 * @param {string} name no punctuation symbols except "_"
 * @param {string} email must be a valid noroff email
 * @param {string} password 
 * @param {string} APIUrl 
 */

export default async function signUp(name, email, password, APIUrl) {  
  const errMsg = document.querySelector(".error-msg-signup")
  errMsg = ""
  try {
    const response = await fetch(APIUrl, {
      method: 'POST',
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    const responseError = result.errors;

    console.log(responseError)
  
    if(responseError.length > 0) { 
      errMsg.classList.remove("d-none");
      
      responseError.forEach(err => {
        errMsg.innerText += "! " + err.message; 
      })
    }


  } catch(error){
    console.log(error)
    errMsg.innerText += error;
  }
}
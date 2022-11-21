/**
 * handles error messages. input element to hold message. will display and hide messages.  
 * @param {object} element 
 * @param {string} msg 
 */
export default function errMsg(element, msgArr) {
  element.innerText = "";
    element.classList.add("d-none");
    
    if(msgArr.length > 0) { 
      element.classList.remove("d-none");
      msgArr.forEach(({ message }) => element.innerText += "! " + message )
    }
}
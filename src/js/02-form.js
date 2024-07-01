// saving data at local storage
function localStorageSavedData(key, value) {
    const dataToJSON = JSON.stringify(value);
    localStorage.setItem(key, dataToJSON);
  }

// restoring data from local storage
  function localStorageRestoredData(key) {
      const jsonData = localStorage.getItem(key);
      
// error processing with *JSON format
    try {
      const parsedData = JSON.parse(jsonData);
      return parsedData;
    } catch {
      return jsonData;
    }
  }
  
//   preparing form data object
  const formData = {
    email: "",
    message: "",
  };
  
// adding event-listener for local storage states
const feedbackFormElement = document.querySelector('.feedback-form');
//   name of local storage
  const feedbackFormState = "feedback-form-state";
  
//   feedbackFormElement.addEventListener('submit', event => {
//     event.preventDefault();
  
//     let usermail = feedbackFormElement.elements.email.value;
//     let usermessage = feedbackFormElement.elements.message.value;
  
//     usermail = usermail.trim();
//     usermessage = usermessage.trim();
  
//     if (usermail === '' || usermessage === '') {
      
//       alert('Fill please all fields');
  
//     } else {
      
//       console.log(formData);
  
      
//       localStorage.removeItem(feedbackFormState);
  
//       formData.email = '';
//       formData.message = '';
  
//       feedbackFormElement.reset();
//     }
//   });
  
//   feedbackFormElement.addEventListener('input', event => {
    
//     let usermail = feedbackFormElement.elements.email.value;
//     let usermessage = feedbackFormElement.elements.message.value;
  
//     usermail = usermail.trim();
//     usermessage = usermessage.trim();
  
   
//     formData.email = usermail;
//     formData.message = usermessage;
  
    
//     localStorageSavedData(feedbackFormState, formData);
//   });
  
  
//   const dataFromLS = localStorage.getItem(feedbackFormState);
  
//   if (dataFromLS !== null) {
    
//     const parseData = JSON.parse(dataFromLS);
  
//     feedbackFormElement.elements.email.value = parseData.email;
//     feedbackFormElement.elements.message.value = parseData.message;
  
//     formData.email = parseData.email;
//     formData.message = parseData.message;
//   }
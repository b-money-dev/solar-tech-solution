const contactForm = document .getElementById("contactForm");
const formMessage = document .getElementById("formMessage");
contactForm.addEventListener("submit",async function(event){
       //stop the page from refreshing
        event.preventDefault();
       //Show sending message
       formMessage.textContent = "Sending message......";
       //Collect the form information
       const formData = new FormData(contactForm);
       try{
              const response = await fetch(
                     "https://formsubmit.co/ajax/ezekwembonaventur@gmail.com",

                     {
                            method: "POST",
                            body: formData
                            }
                     );
                     const data = await response.json();
                     if (data.success == "true"){
                            //Success message
                            formMessage.textContent = "Message sent successfully";
                            //clear the form
                            contactForm.reset();
                     }else{
                            formMessage.textContent = 
                            "Something went wrong. Please try again";
                     }
       }catch (error){
              formMessage.textContent = 
              "Unable to send message. Please try again";
              console.error(error);
       }
});
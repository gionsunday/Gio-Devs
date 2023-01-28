window.addEventListener('load', () =>{
    const nameIn = document.querySelector('#name');
    const emailIn  = document.querySelector('#email');
    const messageIn = document.querySelector('#message');
    const sendBtn  = document.querySelector('#form-submit');
   const form = document.querySelector('#contact')

   form.addEventListener('submit', async (e) =>{
       e.preventDefault()
 
      const name = nameIn.value;
      const email = emailIn.value;
      const message = messageIn.value;

      if(!name || !email || !message){
        alert('Please provide your details!')
      }
      else{
        sendBtn.textContent = "Sending Message..."
        nameIn.value =""
        emailIn.value =""
        messageIn.value =""
        try {
            await axios.post('/api/sendmessage', {
                name:name, email:email, message:message
            }).then(()=>{
              
            sendBtn.textContent = "Message Sent. Thank You!"
            sendBtn.classList.add('success')
            })
            setTimeout(()=>{
              sendBtn.classList.remove('success')
              sendBtn.textContent = "Send Message"
            
            },3000)
        } catch (error) {
            console.log(error)
        }
      }
    })
    

})
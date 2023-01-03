import './ContactSection.css'

export default function ContactSection() {
    return (
        <section id="contact-section">
             <div className='background-signs'>
                <h1>CONTACT</h1>
            </div>
           <div className='contact-container'>
                <div className='contact-label'>
                    <p>
                    Would you like us to work together? Please leave a message using the form below or contact me directly
                    at <a href='damianr.wick@gmail.com'><strong>damianr.wick@gmail.com</strong></a>.
                    </p>
                </div>
                <form>
                    <div className='contact-form-first-row'>
                        <span>
                            <label for="name">Name</label>
                            <input type='text' name='name' id='name'/>
                        </span>
                        <span>
                            <label for="email">Email</label>
                            <input type='text' name='email' id='email'/>
                        </span>
                    </div>  
                    <label for="subject">Subject</label>
                    <input type='text' name='subject' id='subject'/>
                    <label for="message">Message</label>
                    <textarea type='text' name='message' id='message'/>
                    <input type='submit' className='btn form-btn'/>
                </form>

            </div> 
            
        </section>
    )
}
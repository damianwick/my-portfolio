import './ContactSection.css'

export default function ContactSection() {
    return (
        <section id="contact-section">
             <div className='background-signs'>
                <h1>CONTACT</h1>
                <h1>CONTACT</h1>
            </div>
           <div className='contact-container'>
                <div className='contact-label'>
                    <p>
                    Would you like us to work together? Please leave a message using the form below or contact me directly
                    at <a href='mailto:damianr.wick@gmail.com'><strong>damianr.wick@gmail.com</strong></a>.
                    </p>
                </div>
                <form>
                    <div className='contact-form-first-row'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' id='name'/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type='text' name='email' id='email'/>
                        </div>
                    </div>  
                    <label htmlFor="subject">Subject</label>
                    <input type='text' name='subject' id='subject'/>
                    <label htmlFor="message">Message</label>
                    <textarea type='text' name='message' id='message'/>
                    <input type='submit' value="Submit" className='btn form-btn'/>
                </form>
            </div> 
        </section>
    )
}
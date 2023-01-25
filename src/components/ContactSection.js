
import { useForm, ValidationError } from '@formspree/react'
import './ContactSection.css'

export default function ContactSection() {
    const [state, handleSubmit] = useForm("xrgvezda");
    if (state.succeeded) {
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
                <div className='sent-message-container'>
                    <h2>Thank you for your message!</h2>
                </div>

            </div> 
        </section>
    )
    }

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
                <form onSubmit={handleSubmit}>
                    <div className='contact-form-first-row'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' id='name'/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' id='email'/>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>  
                    <label htmlFor="subject">Subject</label>
                    <input type='text' name='subject' id='subject'/>
                    <label htmlFor="message">Message</label>
                    <textarea type='text' name='message' id='message'/>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type='submit' disabled={state.submitting} className='btn form-btn'>
                        Submit
                    </button>
                </form>
            </div> 
        </section>
    )
}
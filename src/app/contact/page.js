"use client"
import 'bootstrap/dist/css/bootstrap.css'
import Contactar from './contact'
import "./contact.css"

export default function page() {

  return (
    <>
    <h1>Contact Form</h1>
  <div className='center'><>
      <form action="/submit" method="post" id="contactForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required="" />
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit mobile number"
          required=""
        />
        <label htmlFor="company">Company Name:</label>
        <input type="text" id="company" name="company" required="" />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          rows={4}
          required=""
          defaultValue={""}
        />
        <button type="submit">Submit</button>
      </form>
    </></div>
    <Contactar />
</>


  )
};















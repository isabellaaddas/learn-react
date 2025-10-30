import "./../css/Contact.css";
import {useState} from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f59db15-e060-4245-857e-8a98c984a6ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main id="contact" className="main-content">
        <div>
            <form onSubmit={onSubmit}>
                <label for="name">Name:</label><br/>
                <input type="text" name="name" required/><br/><br/>

                <label for="email">Email:</label><br/>
                <input type="email" name="email" required/><br/><br/>

                <label for="message">Message:</label><br/>
                <textarea name="message" required></textarea><br/><br/>

                <button type="submit">Submit Form</button>

            </form>

            <br/>
            <span>{result}</span>
        </div>
    </main>
    
  );
};

export default Contact;
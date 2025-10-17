// app/contact/page.js
export default function ContactPage() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
        <div className="form-group mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Send</button>
      </form>
    </div>
  );
}
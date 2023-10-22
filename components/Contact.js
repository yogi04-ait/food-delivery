import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-page p-6">
      <h2 className="text-2xl font-bold mb-4">We're All Ears!</h2>
      <p className="mb-4">
        At Foodie Fast, we believe that communication is key. Whether you have a
        question, feedback, or simply want to share your favorite dish, we're
        here to listen.
      </p>

      <section className="mb-6 p-4 ">
        <h3 className="text-xl font-semibold mb-2">Reach Out Directly</h3>
        <p className="mb-2">
          For immediate assistance or specific queries about your order, connect
          with our 24/7 customer support.
        </p>
        <p className="mb-1">
          📞 Phone:{" "}
          <a href="tel:+919582829255" className="text-blue-500 hover:underline">
            9582829255
          </a>
        </p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:yogesh_aithani@outlook.com"
            className="text-blue-500 hover:underline"
          >
            yogesh_aithani@outlook.com
          </a>
        </p>
      </section>

      <section className="mb-6  p-4 ">
        <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
        <p className="mb-2">
          Own a restaurant or interested in collaborating? Let's bring flavors
          to more households together.
        </p>
        <p>
          📧 Partnerships:{" "}
          <a
            href="mailto:yogesh_aithani@outlook.com"
            className="text-blue-500 hover:underline"
          >
            yogesh_aithani@outlook.com
          </a>
        </p>
      </section>

      <section className="mb-6 p-4">
        <h3 className="text-xl font-semibold mb-2">Media & Press</h3>
        <p className="mb-2">
          For media inquiries, press releases, and PR opportunities.
        </p>
        <p>
          📧 Media Relations:{" "}
          <a
            href="mailto:yogesh_aithani@outlook.com"
            className="text-blue-500 hover:underline"
          >
            yogesh_aithani@outlook.com
          </a>
        </p>
      </section>

      <section className="mb-6 ">
        <h3 className="text-xl font-semibold mb-2">Feedback & Suggestions</h3>
        <p className="mb-2">
          Your thoughts help us evolve and serve you better. Drop us a line and
          let us know how we can improve.
        </p>
        <p>
          📝 Feedback :{" "}
          <a
            href="mailto:yogesh_aithani@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Leave Feedback
          </a>
        </p>
      </section>

      <section className="mb- p-4 ">
        <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
        <address className="italic">
          Foodie Fast
          <br />
          C-6, Tower 11 , East Kidwai Nagar
          <br />
          New Delhi, 110023
          <br />
          India
        </address>
      </section>

      <section className="mb-6 p-4 ">
        <h3 className="text-xl font-semibold mb-2">Stay Connected!</h3>
        <p className="mb-4">
          Follow us on our social media channels to get the latest updates,
          offers, and a daily dose of food inspiration.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/yogesh-aithani-064b591a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Linkedin
          </a>

          <a
            href="https://twitter.com/Knowledge_Hive_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
        </div>
      </section>

      <p className="mt-6 text-center">
        Your satisfaction and opinions matter the most. Let's create delightful
        food memories together!
      </p>
    </div>
  );
};

export default ContactUs;

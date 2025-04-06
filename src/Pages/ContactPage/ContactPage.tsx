
import Form from "../../components/Form/Form";

const ContactPage = () => {
  return (
    <div className="container w-full min-h-screen flex flex-col justify-center pb-10">
      <div className="">
        <h1 className="text-5xl font-bold text-center px-2 py-5">
          InvestIQ Contact Information
        </h1>
        <div className="py-10 text-center font-medium">
          <p>
            Please contact us regarding any issues you are facing on our
            website.
          </p>
          <p>
            We will have one of our talented team members look at the issue for
            you!
          </p>
        </div>
        <div className="flex md:flex-row flex-col mx-auto justify-center items-center gap-5">
          <div className="card bg-neutral p-4">
            <h2 className="font-bold text-xl mb-2">Company Information:</h2>
            <ul className="mb-2">
              <li>
                Company Name: <strong>InvestIQ</strong>
              </li>
              <li>
                Address:{" "}
                <strong>
                  {" "}
                  <a
                    href="https://www.google.com/maps/place/JPMorgan+Chase+%26+Co./@40.7558739,-74.5523647,10z/data=!3m1!5s0x89c258fdccd1457b:0x969f5c102ec5a04b!4m10!1m2!2m1!1sJP+Morgan+Chase!3m6!1s0x89c258fdb81ebd15:0xdcadf01277ce9f6b!8m2!3d40.7558739!4d-73.9755825!15sCg9KUCBNb3JnYW4gQ2hhc2UiA4gBAZIBFWZpbmFuY2lhbF9pbnN0aXR1dGlvbuABAA!16s%2Fg%2F11f01j98c0?entry=ttu"
                    className="underline"
                  >
                    Google Maps{" "}
                  </a>
                </strong>
              </li>
              <li>
                Phone Number: <strong>+01 000 000 000</strong>
              </li>
              <li>
                Email Address:<strong> email@admin.com </strong>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Operating Hours: </strong>
              </li>
              <li>Monday: 09:00 : 17:00</li>
              <li>Tuesday: 09:00 : 17:00</li>
              <li>Wednesday: 09:00 : 17:00</li>
              <li>Thursday: 09:00 : 17:00</li>
              <li>Friday: 09:00 : 17:00</li>
              <li>Saturday: closed</li>
              <li>Sunday: closed</li>
            </ul>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

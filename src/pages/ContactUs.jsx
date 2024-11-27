import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../Components/ui/card";
import InActive from "../Components/InActive";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Button } from "../Components/ui/button";
import useActiveStatus from "../utils/useActiveStatus";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const activeStatus = useActiveStatus();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    });
    alert("Message sent successfully!");
    navigate("/");
  };

  return activeStatus ? (
    <div className="bg-white h-auto p-6 md:p-24 flex justify-center w-full items-center">
      <div className="flex justify-center">
        <Card className="h-auto p-4 bg-black text-white w-3/4">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription className="text-white">
              We'd love to hear from you! Fill out the form below and we'll get
              back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  aria-label="Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium "
                >
                  Mobile Number
                </label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  placeholder="Enter your Mobile Number"
                  aria-label="Mobile Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium ">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  aria-label="Message"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <p className="text-sm text-white">
              Have questions? Feel free to reach out anytime. We're here to
              help!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  ) : (
    <InActive />
  );
};

export default ContactUs;

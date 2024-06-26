import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import BigImageCard from "../../components/BigImageCard/BigImageCard";
import Button from "../../components/Button/Button";
import PeopleThinkCard from "../../components/PeopleThinkCard/PeopleThinkCard";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import "./AboutUs.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[^0-9]*$/, "Name must not contain numbers."),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const peopleThinkCardContents = [
  {
    avatar: "images/home/person1.png",
    personName: "Natasha",
    description: "Kyiv, Ukraine",
    info: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    avatar: "images/home/person2.jpg",
    personName: "Raymond Galario",
    description: "UK, London",
    info: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    avatar: "images/home/person3.jpg",
    personName: "Benny Roll",
    description: "USA, New York",
    info: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
  },
];

const wwdContents = [
  {
    header: "What We Do",
    desc: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    buttonText: "Our Concept",
    image: "images/about_us/wwd-img.png",
  },
  {
    header: "The End Result",
    desc: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    buttonText: "Our Portfolio",
    image: "images/about_us/endresult-img.png",
    direction: "rtl",
  },
];

const AboutUs = () => {
  return (
    <>
      <TitleBanner
        titleText={"About us"}
        backgroundImage={"images/about_us/contact-banner-bg.png"}
      />
      <ToastContainer />
      <div className="aboutus--container">
        <div className="aboutus--wwd" />
        <div className="aboutus--quote">
          <h2>
            I like an interior that defies labeling. I don&apos;t really want
            someone to walk into a room and know that I did it
          </h2>
          <h3>BUNNY WILLIAMS</h3>
        </div>
        <div className="aboutus--big-image-cards--container">
          {wwdContents.map((card) => (
            <BigImageCard
              header={card.header}
              desc={card.desc}
              buttonText={card.buttonText}
              image={card.image}
              direction={card.direction}
              key={card.image}
            />
          ))}
        </div>
        <div className="aboutus--what-people-thinks--container">
          <h3>What people think about us</h3>
          <div className="aboutus--what-people-thinks-cards--container">
            {peopleThinkCardContents.map((card) => (
              <PeopleThinkCard
                avatar={card.avatar}
                personName={card.personName}
                description={card.description}
                info={card.info}
                key={card.avatar}
              />
            ))}
          </div>
        </div>
        <div className="aboutus--contactform--container">
          <h2>Creative project? Let&apos;s have a productive talk.</h2>
          <div className="aboutus--contactform--form">
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                toast.success(
                  "Thank you for contacting us, we'll get back to you!"
                );
                actions.resetForm();
              }}
            >
              <Form>
                <div className="contact--form--field-pair">
                  <div className="contact--form--field-container">
                    <Field name="name" placeholder="Name" />
                    <div>
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="contact--form--field-container">
                    <Field name="email" type="email" placeholder="Email" />
                    <div>
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <div className="contact--form--field--message">
                  <Field name="message" placeholder="Your message" />
                  <div>
                    <ErrorMessage name="message" />
                  </div>
                </div>
                <Button
                  buttonText={"Send now"}
                  buttonColor={"#292F36"}
                  isSubmitType={true}
                  style={{
                    marginTop: "30px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

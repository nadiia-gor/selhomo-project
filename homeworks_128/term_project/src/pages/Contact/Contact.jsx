import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import 'yup-phone-lite';
import Button from '../../components/Button/Button';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import './Contact.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.string().required('Required'),
  phone: Yup.string()
    .phone('PL', 'Please enter a valid polish phone number')
    .required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  return (
    <>
      <TitleBanner
        backgroundImage={'src/pages/Contact/images/title-banner-bg.png'}
      />
      <ToastContainer />
      <div className="contact--container">
        <h1>We love meeting new people and helping them</h1>
        <div className="contact--infos--form">
          <div className="contact--infos">
            <div className="contact--infos--items">
              <div className="contact--infos--item">
                <img src="src/pages/Contact/images/icons/mail.svg" />
                <a href="https://gmail.com">info@selhono.com</a>
              </div>
              <div className="contact--infos--item">
                <img src="src/pages/Contact/images/icons/phone.svg" />
                <a href="tel:13784001234">+1 (378) 400-1234</a>
              </div>
              <div className="contact--infos--item">
                <img src="src/pages/Contact/images/icons/web.svg" />
                <a href="#">www.selhono.com</a>
              </div>
            </div>
            <div className="contact--infos--icons">
              <a href="https://facebook.com">
                <img
                  src="src/assets/images/icons/facebook.svg"
                  alt="facebook"
                />
              </a>
              <a href="https://twitter.com">
                <img src="src/assets/images/icons/twitter.svg" alt="twitter" />
              </a>
              <a href="https://linkedin.com">
                <img
                  src="src/assets/images/icons/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a href="https://instagram.com">
                <img
                  src="src/assets/images/icons/instagram.svg"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          <div className="contact--form">
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: '',
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
                <div className="contact--form--field-pair">
                  <div className="contact--form--field-container">
                    <Field name="subject" placeholder="Subject" />
                    <div>
                      <ErrorMessage name="subject" />
                    </div>
                  </div>
                  <div className="contact--form--field-container">
                    <Field name="phone" type="tel" placeholder="Phone" />
                    <div>
                      <ErrorMessage name="phone" />
                    </div>
                  </div>
                </div>
                <div className="contact--form--field-textarea">
                  <Field
                    name="message"
                    component="textarea"
                    placeholder="Your message"
                  />
                  <div>
                    <ErrorMessage name="message" />
                  </div>
                </div>
                <Button
                  className="contact--form--button"
                  buttonText={'Send now'}
                  buttonColor={'#292F36'}
                  isSubmitType={true}
                />
              </Form>
            </Formik>
          </div>
        </div>
        <div
          className="contact--map-container"
          style={{ borderRadius: '10px' }}
        >
          <MapContainer
            center={[52.231853437451996, 21.006003323983016]}
            zoom={15}
            scrollWheelZoom={false}
            style={{
              width: '80%',
              height: '400px',
              margin: '50px auto 50px auto',
              borderRadius: '15px',
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[52.231853437451996, 21.006003323983016]}>
              <Popup>We are here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;

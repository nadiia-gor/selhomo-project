import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as Yup from 'yup';
import 'yup-phone-lite';
import TitleBanner from '../../components/TitleBanner';

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
    <div className="contact--container">
      <TitleBanner
        backgroundImage={'src/pages/Contact/images/title-banner-bg.png'}
      />
      <h1>We love meeting new people and helping them</h1>
      <div className="contact--infos">
        <div className="contact--infos--items">
          <div className="contact--infos--item">info@selhono.com</div>
          <div className="contact--infos--item">+1 (378) 400-1234</div>
          <div className="contact--infos--item">www.selhono.com</div>
        </div>
        <div className="contact--infos--icons">
          <img src="src\assets\images\icons\facebook.svg" />
          <img src="src\assets\images\icons\twitter.svg" />
          <img src="src\assets\images\icons\linkedin.svg" />
          <img src="src\assets\images\icons\instagram.svg" />
        </div>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="contact--form--field-container">
            <Field name="name" placeholder="Name" novalidate />
            <ErrorMessage name="name" />
          </div>
          <div className="contact--form--field-container">
            <Field name="email" type="email" placeholder="Email" novalidate />
            <ErrorMessage name="email" />
          </div>
          <div className="contact--form--field-container">
            <Field name="subject" placeholder="Subject" novalidate />
            <ErrorMessage name="subject" />
          </div>
          <div className="contact--form--field-container">
            <Field name="phone" type="tel" placeholder="Phone" novalidate />
            <ErrorMessage name="phone" />
          </div>
          <div className="contact--form--field-container">
            <Field
              name="message"
              component="textarea"
              placeholder="Your message"
            />
          </div>
          <ErrorMessage name="message" />
          <button type="submit">Send now</button>
        </Form>
      </Formik>
      <MapContainer
        center={[52.231853437451996, 21.006003323983016]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: '500px', height: '500px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.231853437451996, 21.006003323983016]}>
          <Popup>We are here :)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
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
      <div className="contact--container">
        <h1>We love meeting new people and helping them</h1>
        <div className="contact--infos--form">
          <div className="contact--infos">
            <div className="contact--infos--items">
              <div className="contact--infos--item">
                <img src="src/pages/Contact/images/icons/mail.svg" />
                <p>info@selhono.com</p>
              </div>
              <div className="contact--infos--item">
                <img src="src/pages/Contact/images/icons/phone.svg" />
                <p>+1 (378) 400-1234</p>
              </div>
              <div className="contact--infos--item">
                <img src="src/pages/Contact/images/icons/web.svg" />
                <p>www.selhono.com</p>
              </div>
            </div>
            <div className="contact--infos--icons">
              <img src="src\assets\images\icons\facebook.svg" />
              <img src="src\assets\images\icons\twitter.svg" />
              <img src="src\assets\images\icons\linkedin.svg" />
              <img src="src\assets\images\icons\instagram.svg" />
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
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <div className="contact--form--field-pair">
                  <div className="contact--form--field-container">
                    <Field name="name" placeholder="Name" novalidate />
                    <div>
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="contact--form--field-container">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      novalidate
                    />
                    <div>
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <div className="contact--form--field-pair">
                  <div className="contact--form--field-container">
                    <Field name="subject" placeholder="Subject" novalidate />
                    <div>
                      <ErrorMessage name="subject" />
                    </div>
                  </div>
                  <div className="contact--form--field-container">
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      novalidate
                    />
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
                  buttonText={'Send now'}
                  buttonColor={'#292F36'}
                  style={{
                    marginTop: '30px',
                    marginLeft: 'auto',
                    marginRight: '0',
                  }}
                />
              </Form>
            </Formik>
          </div>
        </div>
        <MapContainer
          center={[52.231853437451996, 21.006003323983016]}
          zoom={15}
          scrollWheelZoom={false}
          style={{
            width: '80%',
            height: '400px',
            margin: '50px auto 50px auto',
          }}
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
    </>
  );
};

export default Contact;

import "./Contact.css";
import MapView from "../../components/Map/MapView";

function Contact() {
  return (
    <div className="content">
      <h1>Contacteer ons</h1>
      <div>
        <h4>Telefoon</h4>
        <a className="link-primary" href="tel:+32493697964">
          +32493697964
        </a>
      </div>
      <div>
        <h4>E-mail</h4>
        <a className="link-primary" href="mailto:Speedycarecontact@gmail.com">
          Speedycarecontact@gmail.com
        </a>
      </div>
      <div>
        <h4>Adres</h4>
        <a
          className="link-primary"
          href="https://www.google.com/maps/search/?api=1&query=Kapellestraat+29,+9890+Gavere"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kapellestraat 29 9890 Asper
        </a>
      </div>
  
        <MapView />
    
    </div>
  );
}

export default Contact;

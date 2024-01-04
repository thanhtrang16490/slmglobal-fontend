
import FormContact from '../component/form.contact';
<link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />


const ContactPage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, marginRight: '1rem', padding: '108px' }}>
                <FormContact />
            </div>
            <div style={{ flex: 1, backgroundColor: 'blue', color: 'white', padding: '10rem', fontFamily: 'Bai Jamjuree, sans-serif' }}>
                <h1 style={{ fontSize: '60px', fontWeight: '500' }}>Contact Us</h1>
                <p style={{ fontSize: '18px', fontWeight: '300' }}>Please contact us if you would like to arrange a free 20-minute call. We will be delighted if we can consult to know your requirements exactly and suggest the best solutions in some industrial sectors: Iron and Steel Casting, Ground Mounting Screw, Rubber and Silicone, Extruded Aluminum, and Fabrication Service, made in Vietnam.</p>
            </div>
        </div>
    );
};

export default ContactPage;
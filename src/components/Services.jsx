import { useState } from 'react';
import '../styles/services.scss';
import { toast } from 'react-toastify';

const Services = () => {
  const allServices = [
    "तुलादान | Tulaadaan",
    "भंडारा | Bhandaara",
    "नवग्रह पूजन | Navagrah Poojan",
    "रूद्र अभिषेक | Roodr Abhishek",
    "महामृत्युंजय जाप | Mahaamrtyunjay Jaap",
    "हवन | Havan",
    "भागवत | Bhaagavat",
    "रामायण | Raamaayan"
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);

      // Remove whitespaces from the selected service
      const formattedService = formData.service.replace(/\s+/g, '');

      // Make a POST request to the server
      const response = await fetch('https://dhokeshvar-dham.onrender.com/api/v1/services/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, service: formattedService }),
      });

      console.log(response);

      // Check if the request was successful
      if (response.ok) {
        toast.success('Data submitted successfully');
      } else {
        toast.error('Failed to submit data');
      }
    } catch (error) {
      toast.error('Error:', error);
    } finally {
      setLoading(false);
    }

    // Reset the form after submission
    setFormData({ name: '', phone: '', service: '' });
  };

  return (
    <div className='services'>
      <div className="allServices">
        <h3>हमारी सेवाएँ | Our Services</h3>
        <ul>
          {allServices.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
      </div>

      <div className="services-form">
        <h3>सेवा के लिए आवेदन करें | Apply for Service</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </label>
          <label>
            Service:
            <select name="service" value={formData.service} onChange={handleInputChange} required>
              <option value="" disabled>Select a service</option>
              {allServices.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Loader */}
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default Services;

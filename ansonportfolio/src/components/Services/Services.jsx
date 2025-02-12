import React, { useState } from 'react'; // Import useState
import './Services.css';
import { UilWindowGrid, UilArrowRight, UilPen, UilTimesCircle, UilCheckCircle, UilArrow } from '@iconscout/react-unicons';

const serviceData = [
  {
    icon: UilWindowGrid,
    title: 'UI/UX Designer',
    services: [
      'Develop the user interface',
      'Create user experience strategies',
      'Design prototypes',
      'Conduct usability testing',
      'Collaborate with developers',
    ],
  },
  {
    icon: UilArrow,
    title: 'Frontend Developer',
    services: [
      'Build responsive websites',
      'Implement web design',
      'Optimize performance',
      'Ensure cross-browser compatibility',
      'Write clean, maintainable code',
    ],
  },
  {
    icon: UilPen,
    title: 'Backend Developer',
    services: [
      'Develop server-side applications',
      'Database management',
      'API design and integration',
      'Optimize server performance',
      'Ensure data security',
    ],
  },
];

const Services = () => {
  // State to track which service card's modal is open (if any)
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index); // Open the modal for a specific service card
  };

  const closeModal = () => {
    setActiveModal(null); // Close the modal
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <p className="section__subtitle">What I offer.</p>
      <div className="services_container container grid">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            services={service.services}
            openModal={openModal}
            closeModal={closeModal}
            activeModal={activeModal}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ index, icon: Icon, title, services, openModal, closeModal, activeModal }) => {
  return (
    <div className="services_content">
      <div>
        <Icon className="services_icon" />
        <h3 className="services_title">{title}</h3>
      </div>
      <span
        className="button button--flex button--small button--link services_button"
        onClick={() => openModal(index)} // Pass index to identify the clicked card
      >
        View more
        <UilArrowRight className="button_icon" />
      </span>
      <div className={`services_model ${activeModal === index ? 'active' : ''}`}>
        <div className="services_model-content">
          <h4 className="services_model-title">{title}</h4>
          <UilTimesCircle className="services_model-close" onClick={closeModal} />
          <ul className="services_model-services">
            {services.map((service, idx) => (
              <li key={idx} className="services_modal-service">
                <UilCheckCircle className="services_model-icon" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

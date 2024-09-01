import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import ScheduleCall from './ScheduleCall';
import './App.css';

import SvgCoWorking from './images/undraw_online_banking_re_kwqh.svg';
import SvgSpeedTest from './images/undraw_speed_test_re_pe1f.svg';
import SvgOnTheWay from './images/undraw_on_the_way_re_swjt.svg';
import SvgAcceptRequest from './images/undraw_accept_request_re_d81h.svg';
import SvgStandOut from './images/undraw_stand_out_-1-oag.svg';
import SvgTimeManagement from './images/undraw_time_management_re_tk5w.svg';
import SvgStability from './images/undraw_stability_ball_b-4-ia.svg';
import SvgCreditCardPayments from './images/undraw_credit_card_payments_re_qboh.svg';
import SvgCancel from './images/undraw_cancel_re_pkdm.svg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  useEffect(() => {
    const sectionIds = ['home', 'services', 'benefits', 'pricing', 'faq', 'contact-us'];
    
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 60% of the section is visible
    };
  
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  
    return () => {
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust threshold as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2 // Trigger when at least 50% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('highlight');
        } else {
          entry.target.classList.remove('highlight');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const benefitItems = document.querySelectorAll('.benefit-item');
    const pricingCards = document.querySelectorAll('.pricing-card');

    benefitItems.forEach(item => observer.observe(item));
    pricingCards.forEach(card => observer.observe(card));

    return () => {
      benefitItems.forEach(item => observer.unobserve(item));
      pricingCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = `${sectionId.slice(1)}`; // Navigate to the homepage and target the section
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  const toggleService = (index) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  const servicesContent = [
    {
      title: "Prototype & MVP Development",
      description: `Time is of the essence when launching a new product. Our <strong>Prototype & MVP Development</strong> services are geared toward helping you bring your ideas to life quickly, allowing you to test the market and gather valuable feedback. We collaborate closely with you to define the core features that deliver the most value, ensuring your <strong>MVP</strong> is lean yet impactful. With a focus on rapid development and iteration, we help you navigate the early stages of product development with confidence, setting the stage for future growth and success.`
    },
    {
      title: "Frontend Development",
      description: `Our <strong>Frontend Development</strong> team is dedicated to crafting stunning user interfaces that not only look good but also feel intuitive and engaging. We leverage the latest <strong>React/React Native</strong> and <strong>Vue.js</strong> frameworks to deliver <strong>pixel-perfect designs</strong> that are fully responsive across all devices. Whether it’s a dynamic single-page application or a complex, multi-faceted website, our focus is on creating a <strong>seamless user experience</strong> that keeps your audience captivated and coming back for more.`
    },
    {
      title: "Backend Development",
      description: `The backbone of any great application is a rock-solid backend. Our <strong>Backend Development</strong> services ensure your digital products are powered by a robust, secure, and scalable infrastructure. We specialise in building <strong>custom APIs</strong>, <strong>microservices</strong>, and <strong>serverless architectures</strong> that can handle high traffic and large data volumes with ease. With proficiency in <strong>Node.js</strong>, <strong>SQL and No-SQL Databases</strong>, <strong>Firebase</strong>, <strong>Redis</strong>, and <strong>RESTful API's</strong>, we ensure your backend is built to support your business today and scale for tomorrow.`
    },
    {
      title: "Full-Stack Development",
      description: `Our <strong>Full-Stack Development</strong> service is designed to take your project from concept to completion with a cohesive approach. By managing both the frontend and backend development, we ensure that every aspect of your application works in harmony. Our expertise in <strong>JavaScript</strong>, <strong>TypeScript</strong>, and <strong>Python</strong> allows us to create powerful, end-to-end solutions that are fast, secure, and user-centric. With our full-cycle development process, we turn your ideas into market-ready products that stand out in the digital landscape.`
    },
    {
      title: "Growth and Maintenance",
      description: `Your digital product's journey doesn’t end at launch. Our <strong>Growth and Maintenance</strong> services are designed to keep your application running smoothly and evolving to meet new challenges. We provide ongoing <strong>performance optimisation</strong>, <strong>feature updates</strong>, and <strong>security patches</strong> to ensure your product stays ahead of the competition. By continuously monitoring and improving your application, we help you capitalie on new opportunities, maximise uptime, and deliver a consistently high-quality user experience.`
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqContent = [
    {
      question: "Why not hire a full-time developer?",
      answer: `Hiring a full-time senior full-stack developer can cost upwards of £130,000 annually, plus benefits—and finding one who's readily available can be challenging. On top of that, you might not always have enough work to keep them busy.
  
      With our monthly subscription, you only pay when you need us, giving you the flexibility to pause and resume services as your workload fluctuates.`
    },
    {
      question: "How long does each task typically take?",
      answer: `Most tasks are completed within 2-3 business days. More complex tasks might take longer, while simpler ones could be done even sooner.
  
      If a task is too large or complex, we may break it down into smaller parts, tackling each one individually. We'll keep you informed if that happens.`
    },
    {
      question: "Can you work in our Github repository?",
      answer: `Absolutely. We can create a new repository for your project, fork an existing one, or work directly in your repository once you grant us access.
  
      During onboarding, you can specify exactly where you'd like us to add our code once your subscription starts.`
    },
    {
      question: "How does 24/7 support work?",
      answer: `You’ll have direct access to our work coordinators and founder via Slack. They’re also developers and can help answer any questions about the ongoing work or anything else. If needed, you can also arrange a call with them.`
    },
    {
      question: "What happens if I need to pause the service?",
      answer: `If you don’t have enough work to keep us busy for a full month, you can pause your subscription once your current tasks are complete. The remaining days in your billing cycle will be available when you decide to resume.
  
      Billing cycles last 31 days. So, if you pause on day 20, you’ll have 11 days of service left when you restart.`
    },
    {
      question: "What is the satisfaction guarantee?",
      answer: `If you're not satisfied with our service during the first month, just let us know through Slack, and we’ll process a full refund and close your account.
  
      Please note that this guarantee only applies to the first billing cycle.`
    }
  ];  

  return (
    <Router>
      <div className="App">
        <Header activeSection={activeSection} handleNavClick={handleNavClick} />        
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <section id="home" className="main-content fade-in">
                  <h1>
                    Transform your digital vision from <br/>
                    <span className="highlighted fade-in"> 
                      <span className="gradient-text">
                        <span role="img" aria-label="thoughtbubble">💭</span>concept
                      </span>
                    </span> 
                    {" "}to{" "}
                    <span className="highlighted fade-in">
                      <span className="gradient-text">
                        <span role="img" aria-label="tick">🗸</span>completion.
                      </span>
                    </span>
                  </h1>
                  <p className='fade-in'>Without the hassle of building and managing an in-house team.</p>
                  <div className="buttons fade-in">
                    <Link to="/schedule-call">
                      <button className="primary-btn"><span>Schedule a Call</span></button>
                    </Link>
                    <button
                      className="secondary-btn"
                      onClick={(e) => handleNavClick(e, '#services')}
                    >
                      <span>Digital Services</span>
                    </button>                  
                  </div>
                </section>

                <section className="stats-bar fade-in">
                  <div className="stats-container">
                    <div className="stat-item">
                      <div className="stat-number">&lt; 24</div>
                      <p>Hour Onboarding</p>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">100%</div>
                      <p>Compliance with Global Data Security Standards</p>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">99.9%</div>
                      <p>Uptime Guarantee</p>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">24/7</div>
                      <p>Support Availability</p>
                    </div>
                  </div>
                </section>

                <section id="services" className="services-section fade-in">
                  <h2>O u r &nbsp; S e r v i c e s</h2>
                  <h3>
                    Digital solutions that will <span className="gradient-text">exceed your original vision</span>
                  </h3>
                  <div className="services-list">
                    {servicesContent.map((service, index) => (
                      <div
                        key={index}
                        className={`service-item ${openServiceIndex === index ? 'open' : ''}`}
                        onClick={() => toggleService(index)}
                      >
                        <div className="service-title-container">
                          <h3>{service.title}</h3>
                          <span className="toggle-sign">{openServiceIndex === index ? '−' : '+'}</span>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="benefits" className="benefits-section fade-in">
                  <h2>B e n e f i t s</h2>
                  <h3>
                    Why Choose <span className="gradient-text">Out-of-House?</span>
                  </h3>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <img src={SvgCancel} alt="Pause or Cancel Anytime" />
                      <h4>Pause or Cancel Anytime</h4>
                      <p>Pause your subscription when work slows down and resume where you left off whenever you're ready.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgCreditCardPayments} alt="Transparent Fixed Monthly Rates" />
                      <h4>Transparent Fixed Monthly Rates</h4>
                      <p>No hidden fees or surprise charges—just straightforward, transparent pricing so you know exactly what you’re paying for.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgStability} alt="Flexible & Scalable Services" />
                      <h4>Flexible & Scalable Services</h4>
                      <p>Easily scale your services up or down as your project evolves, ensuring you get exactly what you need, when you need it.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgTimeManagement} alt="&lt; 24 Hour Onboarding" />
                      <h4>&lt; 24 Hour Onboarding</h4>
                      <p>Get started quickly with our streamlined onboarding process. In under 24 hours, you’ll be set up and ready to get things done.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgStandOut} alt="100% Unique" />
                      <h4>100% Unique</h4>
                      <p>Every piece of work delivered is created just for you. We guarantee that all work is 100% unique and owned by you.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgAcceptRequest} alt="Unlimited Requests Within Scope" />
                      <h4>Unlimited Requests Within Scope</h4>
                      <p>Submit as many requests as needed within the agreed scope of your project. Each request is managed effectively to ensure smooth progress.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgOnTheWay} alt="High-Quality Deliverables" />
                      <h4>High-Quality Deliverables</h4>
                      <p>Excellence is the standard. Each deliverable meets the highest standards of performance and craftsmanship.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgSpeedTest} alt="Rapid Iterations" />
                      <h4>Rapid Iterations</h4>
                      <p>Tasks are typically fulfilled within 2-3 business days, keeping your project moving forward at a pace that matches your ambitions.</p>
                    </div>
                    <div className="benefit-item">
                      <img src={SvgCoWorking} alt="Money Back Guaranteed" />
                      <h4>Not Happy? Money Back</h4>
                      <p>If you don't like the work, within the first month of work, get all your money back. Guaranteed.</p>
                    </div>
                  </div>
                </section>

                <section id="pricing" className="pricing-section fade-in">
                  <h2>P r i c i n g</h2>
                  <h3>Make your digital vision <span className="gradient-text">happen today.</span></h3>
                  <div className="pricing-options">
                    <div className="pricing-card">
                      <h3>End-to-End Development</h3>
                      <div className="pricing-tagline">
                        <p>Transform Your Vision into Reality</p>
                        <p>Custom solutions tailored to your business needs.</p>
                      </div>
                      <p className="price-point">Custom Pricing</p>
                      <Link to="/schedule-call">
                        <button><span>Get Started</span></button>
                      </Link>
                      <Link to="/schedule-call">
                        <span>Book a call</span>
                      </Link>
                      <div className="pricing-details">
                        <p><strong>What's included:</strong></p>
                        <ul>
                          <li>Dedicated project manager</li>
                          <li>Comprehensive full-stack development</li>
                          <li>Regular demos & updates</li>
                          <li>100% unique, tailor-made solutions</li>
                          <li>24/7 support availability</li>
                          <li>High-quality, scalable deliverables</li>
                          <li>Flexible and scalable services</li>
                          <li>Compliance with global data security standards</li>
                          <li>Transparent pricing with no hidden fees</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-card">
                      <h3>Maintenance & Growth</h3>
                      <div className="pricing-tagline">
                        <p>Grow Your Software, Secure Your Future</p>
                        <p>Perfect for maintaining and enhancing your existing solutions.</p>
                      </div>
                      <p className="price-point">£3,000 - £9,000/m</p>
                      <Link to="/schedule-call">
                        <button><span>Get Started</span></button>
                      </Link>
                      <Link to="/schedule-call">
                        <span>Book a call</span>
                      </Link>
                      <div className="pricing-details">
                        <p><strong>What's included:</strong></p>
                        <ul>
                          <li>Scalable services as your business grows</li>
                          <li>Pause or cancel anytime</li>
                          <li>Transparent fixed monthly rates</li>
                          <li>Regular feature updates and security patches</li>
                          <li>Unlimited requests within scope</li>
                          <li>Rapid response times</li>
                          <li>Dedicated account management</li>
                          <li>Ongoing performance optimisation</li>
                          <li>Compliance with global data security standards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faq" className="faq-section fade-in">
                  <h2>F r e q u e n t l y &nbsp; A s k e d &nbsp; Q u e s t i o n s</h2>
                  <div className="faq-list">
                    {faqContent.map((faq, index) => (
                      <div
                        key={index}
                        className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="faq-title-container">
                          <h3>{faq.question}</h3>
                          <span className="toggle-sign">{openFaqIndex === index ? '−' : '+'}</span>
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="contact-us" className="contact-us-section">
                  <div className="contact-us-container">
                    <div className="contact-us-header">
                      <div className="contact-grid fade-in">
                        <div className="contact-title">Contact</div>
                        <span className="contact-highlighted">
                          <Link to="/schedule-call">
                            <button className="contact-btn">Contact Us</button>
                          </Link>
                          <div className="contact-gradient-text">us</div>
                        </span>
                        <div className="contact-subtitle">Schedule a call to discuss your digital vision</div>
                      </div>
                    </div>
                    <div className="contact-us-details">
                      <div className="company-info">
                        <h3 className="company-name">&#123;out-of-house.dev&#125;</h3>
                        <p className="company-slogan">Bringing Your Digital Vision to Life,<br />Without the In-House Hassle.</p>
                      </div>
                      <div className="company-details">
                        <p><strong>E m a i l</strong></p>
                        <p>support@out-of-house.com</p>
                        <p><strong>P h o n e &nbsp; n u m b e r</strong></p>
                        <p>+44 07742 952173</p>
                        <p><strong>L o c a t i o n</strong></p>
                        <p>United Kingdom</p>
                      </div>
                      <div className="company-socials">
                        <p><strong>C o m p a n y</strong></p>
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">WhatsApp</a>
                      </div>
                    </div>
                  </div>
                </section>
                <footer className="terms-conditions">
                  <div className="terms-container">
                    <Link to="/terms-and-conditions">
                      <p className="terms-conditions-link">Terms and conditions</p>
                    </Link>
                    <p>&#123;out-of-house.dev&#125;. All Rights Reserved. © Copyright 2024</p>
                    <Link to="/privacy-policy">
                      <p className="terms-conditions-link">Privacy policy</p>
                    </Link>
                  </div>
                </footer>
              </div>
            }
          />
          <Route path="/schedule-call" element={<ScheduleCall />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

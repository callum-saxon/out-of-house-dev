import React from 'react';
import Header from './Header'; // Import the Header component

const PrivacyPolicy = () => {
    const handleNavClick = (e, sectionId) => {
      e.preventDefault();
      window.location.href = `/${sectionId}`;
    };

  return (
    <div className="content-container">
      <Header handleNavClick={handleNavClick} />
      <h1 className="page-title gradient-text">Privacy Policy</h1>
      <div className="content-body">
        <p>`&#123;out-of-house.dev&#125;` is committed to protecting your privacy. This privacy policy explains how we collect, use, and share your personal data when you use our website.</p>
        
        <h2>1. What Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when you register, express an interest in our services, or contact us.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to provide, operate, and maintain our services, to improve and personalise your experience, and to communicate with you.</p>
        
        <h2>3. Legal Basis for Processing</h2>
        <p>We process your personal data based on your consent, the necessity to perform a contract, or compliance with a legal obligation.</p>
        
        <h2>4. Your Data Protection Rights</h2>
        <p>You have the right to access, rectify, or erase your personal data. You also have the right to restrict or object to the processing of your data, and the right to data portability.</p>
        
        <h2>5. Data Retention</h2>
        <p>`&#123;out-of-house.dev&#125;` will retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. After the retention period, your data will be securely deleted or anonymised.</p>

        <h2>6. Sharing Your Personal Information</h2>
        <p>`&#123;out-of-house.dev&#125;` will not disclose, sell, rent, or exchange the personal information you provide to us, and our computer system will automatically block any automation option that would violate the protection of your privacy.</p>

        <p>`&#123;out-of-house.dev&#125;` will only disclose the information provided by the user if required to do so by law or court order, to cooperate in judicial investigations, and to enforce or protect intellectual property or contractual rights.</p>

        <p>`&#123;out-of-house.dev&#125;` does not transfer personal data outside the UK. All data is processed and stored within the UK.</p>

        <h2>7. Cookies and Tracking Technologies</h2>
        <p>We may use cookies and similar tracking technologies to collect information about your interactions with our website. This helps us improve our website and deliver a better user experience. You will be asked for your consent to use cookies where required by law. You can adjust your browser settings to refuse cookies if you prefer.</p>

        <h2>8. Protecting Your Information</h2>
        <p>To prevent unauthorised access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, managerial, and administrative procedures to safeguard and secure the information we collect online. However, while we intend to protect your personal information, you should also take steps to protect your information by accessing it from a secure device.</p>

        <h2>9. Children's Data</h2>
        <p>`&#123;out-of-house.dev&#125;` does not knowingly collect or process personal data from children under the age of 16. If we become aware that we have inadvertently collected personal data from a child, we will take steps to delete the information as soon as possible.</p>

        <h2>10. Your Rights</h2>
        <p>If you are a registered member of `&#123;out-of-house.dev&#125;`, you may review and update your data using your username and password. Likewise, and in accordance with current legislation, you may request the exercise of your right to access, rectify, or delete your personal information.</p>

        <h2>11. Contacts and Assistance</h2>
        <p>If you have any questions about your privacy when using our website, please contact us at info@out-of-house.dev.</p>

        <p>Our privacy office will work with you to resolve any questions about this policy.</p>

        <h2>12. Changes to This Privacy Policy</h2>
        <p>`&#123;out-of-house.dev&#125;` will inform users through authorised channels of any modifications to the terms and conditions and to this privacy statement. In the event of a material change, all customers whose personal information we have stored will be notified by email.</p>

        <h2>13. Glossary</h2>
        <p>**USER:** Any natural or legal person who is registered and active in the `&#123;out-of-house.dev&#125;` portal.</p>

        <p>**PRIVACY:** The right to protect personal information from intrusions and to keep it confidential.</p>

        <p>**IP ADDRESS:** A series of numbers associated with a device, usually a computer, by which it can be identified within a network.</p>

        <p>**COOKIES:** Small pieces of information stored by your browser on your computer's hard drive that temporarily contain personal information.</p>

        <p>**AUTOMATION OPTIONS:** These are options that allow you to see or hide system features.</p>

        <p>**PERSONAL INFORMATION:** A concept used in information security. It refers to information that can be used to identify, contact, or locate a specific person, or can be used in conjunction with other sources of information to do so.</p>

        <p>**COPYRIGHT:** The branch of law that regulates the subjective rights of the author over the creations that present individuality resulting from their intellectual activity, which are usually stated as literary, musical, theatrical, artistic, scientific, and audiovisual works.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

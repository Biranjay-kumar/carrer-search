import React, { useState } from "react";

const FAQs = [
  {
    question: "How do I apply for a job?",
    answer:
      "To apply for a job, visit the job listing page, click on the 'Apply' button, and follow the instructions to submit your application. You may need to upload your resume and cover letter.",
  },
  {
    question: "What documents are required for application?",
    answer:
      "Typically, you will need a resume, cover letter, and sometimes references. Check the specific job listing for any additional requirements.",
  },
  {
    question: "How can I track my application status?",
    answer:
      "Once you apply, you can track the status of your application by logging into your account on our website. You will see updates and notifications regarding your application.",
  },
  {
    question: "What should I include in my resume?",
    answer:
      "Your resume should include your contact information, a summary of your qualifications, work experience, education, and relevant skills. Tailor it to the job you are applying for.",
  },
  {
    question: "How do I prepare for a job interview?",
    answer:
      "Research the company, practice common interview questions, and prepare questions to ask the interviewer. Dress appropriately and be on time for the interview.",
  },
  {
    question: "What is the typical interview process?",
    answer:
      "The interview process usually includes a phone screening, one or more in-person interviews, and sometimes a skills assessment. The exact process may vary by company.",
  },
  {
    question: "How can I improve my chances of getting hired?",
    answer:
      "Enhance your resume, apply for jobs that match your skills and experience, network with industry professionals, and prepare thoroughly for interviews.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      <div>
        {FAQs.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              className="w-full text-left py-3 px-4 text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

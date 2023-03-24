CREATE TABLE faqs(
    faq_id SERIAL PRIMARY KEY,
    question VARCHAR(200),
    reponse VARCHAR(300),
    category VARCHAR(30)
);
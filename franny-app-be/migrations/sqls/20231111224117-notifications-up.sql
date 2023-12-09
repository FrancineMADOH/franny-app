
CREATE TABLE notifications(
    notif_id SERIAL PRIMARY KEY,
    date_created TIMESTAMP NOT NULL DEFAULT now(),
    date_resolved TIMESTAMP,
    notif_state VARCHAR(255) NOT NULL DEFAULT 'new',
    client_number VARCHAR(15) NOT NULL,
    comment TEXT
);

ALTER TABLE notifications ADD COLUMN perso_name VARCHAR(100);
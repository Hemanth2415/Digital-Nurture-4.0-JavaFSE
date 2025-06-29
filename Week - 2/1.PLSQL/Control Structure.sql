CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    is_vip CHAR(1) DEFAULT 'N'
);

CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    interest_rate NUMBER,
    due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES (1, 'Alice', 65, 12000, 'N');
INSERT INTO customers VALUES (2, 'Bob', 45, 8000, 'N');
INSERT INTO customers VALUES (3, 'Charlie', 70, 5000, 'N');

INSERT INTO loans VALUES (101, 1, 8.5, SYSDATE + 10); 
INSERT INTO loans VALUES (102, 2, 7.2, SYSDATE + 40);  
INSERT INTO loans VALUES (103, 3, 9.0, SYSDATE + 20); 
COMMIT;

BEGIN
    FOR rec IN (SELECT l.loan_id, l.interest_rate, c.age FROM loans l
                JOIN customers c ON l.customer_id = c.customer_id) 
    LOOP
        IF rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - 1
            WHERE loan_id = rec.loan_id;
        END IF;
    END LOOP;
    COMMIT;
END;


BEGIN
    FOR rec IN (SELECT customer_id, balance FROM customers) LOOP
        IF rec.balance > 10000 THEN
            UPDATE customers
            SET is_vip = 'Y'
            WHERE customer_id = rec.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;


BEGIN
    FOR rec IN (
        SELECT l.loan_id, c.name, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.loan_id || 
                             ' for ' || rec.name || 
                             ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;

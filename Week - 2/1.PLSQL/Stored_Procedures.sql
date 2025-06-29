CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    account_type VARCHAR2(20),
    balance NUMBER
);

CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    department VARCHAR2(50),
    salary NUMBER
);

INSERT INTO accounts VALUES (1, 101, 'savings', 10000);
INSERT INTO accounts VALUES (2, 102, 'current', 5000);
INSERT INTO accounts VALUES (3, 101, 'savings', 20000);

INSERT INTO employees VALUES (1, 'John', 'HR', 50000);
INSERT INTO employees VALUES (2, 'Jane', 'Finance', 60000);
INSERT INTO employees VALUES (3, 'Mike', 'HR', 55000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'savings';

    COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_pct IN NUMBER
) IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * bonus_pct / 100)
    WHERE department = dept_name;

    COMMIT;
END;
/


CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) IS
    insufficient_balance EXCEPTION;
    current_balance NUMBER;
BEGIN

    SELECT balance INTO current_balance
    FROM accounts
    WHERE account_id = from_account
    FOR UPDATE;

    IF current_balance < amount THEN
        RAISE insufficient_balance;
    END IF;

    UPDATE accounts
    SET balance = balance - amount
    WHERE account_id = from_account;

    UPDATE accounts
    SET balance = balance + amount
    WHERE account_id = to_account;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Funds transferred successfully from Account ' 
                         || from_account || ' to Account ' 
                         || to_account || '. Amount: ' || amount);

EXCEPTION
    WHEN insufficient_balance THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient balance in Account ' || from_account || '.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Unexpected Error: ' || SQLERRM);
END;
/


EXEC ProcessMonthlyInterest;

EXEC UpdateEmployeeBonus('HR', 10);

EXEC TransferFunds(1, 2, 2000);

SELECT *from ACCOUNTS;
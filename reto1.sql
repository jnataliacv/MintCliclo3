CREATE TABLE tool(
    ID NUMBER(10) NOT NULL,
    BRAND VARCHAR2(20) NULL,
    MODEL NUMBER NULL,
    CATEGORY_ID NUMBER(10) NULL,
    NAME VARCHAR2(4000) NULL,
    PRIMARY KEY(ID)
);

CREATE SEQUENCE tool_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER tool_seq_tr 
    BEFORE INSERT ON tool FOR EACH ROW
    WHEN(NEW.ID IS NULL)
BEGIN
    SELECT tool_seq.NEXTVAL INTO :NEW.ID FROM DUAL;
END;

SELECT * FROM TOOL;

BEGIN
INSERT INTO TOOL(ID, BRAND, MODEL, CATEGROY_ID, NAME) 
VALUES(:ID, :BRAND, :MODEL, :CATEGORY_ID,:NAME);
:status_code := 201;
END;

BEGIN
UPDATE TOOL
SET ID = :ID, BRAND = :BRAND, MODEL = :MODEL, CATEGORY_ID = :CATEGORY_ID, NAME = :NAME;
:status_code := 201;
END;

BEGIN
DELETE FROM TOOL WHERE ID = :ID;
    :status_code := 204;
END;

----------------------------------------------------------------------------------------------
##CREACION DE TABLA CLIENTE
----------------------------------------------------------------------------------------------
CREATE TABLE cliente (
    ID NUMBER NOT NULL, 
    NAME VARCHAR(4000) NULL, 
    EMAIL VARCHAR2(20) NULL,
    AGE NUMBER(10) NULL,  //en el ejercicio se especifica AGE NUMBER sin embargo es muy cambiante por lo que fecha de nacimiento es mejor
    PRIMARY KEY(ID)
    );

CREATE SEQUENCE cliente_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER clientes_seq_tr
    BEFORE INSERT ON cliente FOR EACH ROW
    WHEN (NEW.ID IS NULL)
BEGIN
    SELECT client_seq.NEXTVAL INTO :NEW.ID FROM DUAL;
END;

SELECT * FROM cliente;

BEGIN
    INSERT INTO cliente(ID, NAME, EMAIL, AGE) 
    VALUES(:id, :name, :email, :age);
    :status_code:=201;
END;

BEGIN
    UPDATE cliente SET ID=:id , NAME=:name, EMAIL=:email, AGE=:age
    WHERE ID=:id;
    :status_code := 201;
END;

BEGIN
    DELETE FROM cliente WHERE ID=:id;
    :status_code: =204;
END;

----------------------------------------------------------------------------------------------------------
##CREACION DE TABLA MESSAGE
----------------------------------------------------------------------------------------------------------

CREATE TABLE MESSAGE(
    ID NUMBER NOT NULL,
    MESSAGETEXT VARCHAR2(4000) NOT NULL
);

SELECT * FROM MESSAGE;

BEGIN
    INSERT INTO MESSAGE(ID, MESSAGETEXT) 
    VALUES(:id, :messagetext);
    :status_code:=201;
END;

BEGIN
    UPDATE message SET ID=:id , MESSAGETEXT=:messagetext
    WHERE ID=:id;
    :status_code := 201;
END;

BEGIN
    DELETE FROM message WHERE ID=:id;
    :status_code: =204;
END;








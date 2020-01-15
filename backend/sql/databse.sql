
CREATE TABLE IF NOT EXISTS persons(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    jobtitle STRING NULL,
    fullname STRING NOT NULL,
    gender STRING NULL ,
    address TEXT NULL ,
    phone1 STRING NULL ,
    phone2 STRING NULL ,
    email STRING NULL ,
    file TEXT NULL ,
    createdAt date,
    updatedAt date
);


CREATE TABLE IF NOT EXISTS categories(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name STRING NOT NULL,
    description TEXT NULL ,
    typecategory STRING NOT NULL,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS departments(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name STRING NOT NULL,
    description TEXT NULL ,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS roles(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name STRING NOT NULL,
    description TEXT NULL ,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS files(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    filename STRING NOT NULL,
    type STRING NOT NULL,
    filedir STRING NOT NULL,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS dollars(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    date DATEONLY NOT NULL,
    value DOUBLE NOT NULL,
    person_id INTEGER REFERENCES persons NOT NULL,
    active BOOLEAN,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS accounts(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name STRING NOT NULL,
    description TEXT NULL ,
    category_id INTEGER  NOT NULL,
    person_id INTEGER REFERENCES persons NOT NULL,
    initialbalance DOUBLE NOT NULL,
    actualbalance DOUBLE NOT NULL,
    coin STRING NULL ,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS teams(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name STRING NOT NULL,
    description TEXT NULL ,
    project_id INTEGER REFERENCES projects NOT NULL,
    person_id INTEGER REFERENCES persons NOT NULL,
    rol_id INTEGER REFERENCES roles NOT NULL,
    file_id INTEGER REFERENCES files ,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS budgets(

    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    code STRING(50) NULL,
    name STRING NOT NULL CHECK (name <> ''),
    description TEXT NULL ,
    excercise STRING NULL,
    account_id INTEGER REFERENCES accounts NOT NULL,
    person_id INTEGER REFERENCES persons NOT NULL,
    buddgetstart DOUBLE NOT NULL,
    buddgeupdate DOUBLE NOT NULL,
    buddgetfinal DOUBLE NOT NULL,
    balance DOUBLE NOT NULL,
    returns DOUBLE ,
    deviation DOUBLE NOT NULL,
    status STRING NOT NULL,
    approval  BOOLEAN    ,                 
    approvalby_id INTEGER  NOT NULL,
    dateapproval DATEONLY NOT NULL,
    createdAt date,
    updatedAt date

);

CREATE TABLE IF NOT EXISTS projects(

    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    code STRING(50) NULL,
    name STRING(255) NOT NULL CHECK (name <> ''),
    description TEXT NULL ,
    category_id INTEGER  NOT NULL,
    startdate DATEONLY NOT NULL,
    enddate DATEONLY NOT NULL,
    department_id INTEGER NULL,
    status STRING NOT NULL,
    location TEXT NULL ,
    budget_id  INTEGER  NOT NULL,
    team_id INTEGER  NOT NULL,
    priority STRING NOT NULL,
    color STRING NOT NULL,
    createdAt date,
    updatedAt date
);

CREATE TABLE IF NOT EXISTS tasks(

    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name STRING NOT NULL,
    code STRING(50) NULL,
    description TEXT NULL ,
    status STRING NOT NULL,
    priority STRING NOT NULL,
    startdate DATEONLY NOT NULL,
    complete  INTEGER  NOT NULL,
    duration  INTEGER  NOT NULL,
    cost DOUBLE NOT NULL,   
    category_id INTEGER REFERENCES categories NOT NULL,
    account_id INTEGER REFERENCES accounts NOT NULL,
    dollars_id INTEGER REFERENCES dollars NULL,
    team_id INTEGER REFERENCES teams NOT NULL,
    files_id INTEGER REFERENCES files NULL,
    responsable_id INTEGER REFERENCES persons NOT NULL,
    approvalby_id INTEGER REFERENCES persons NOT NULL,
    approval  BOOLEAN,                 
    dateapproval DATEONLY NOT NULL,
    notes TEXT NULL ,                  
    color STRING NOT NULL,
    createdAt date,
    updatedAt date
);



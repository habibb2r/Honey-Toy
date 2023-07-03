import { Helmet } from "react-helmet";


const Blog = () => {
    return (
        <div className="container flex flex-col gap-5">
            <Helmet>
                <title>Honey Toy | Blog</title>
            </Helmet>
            <div className="border-solid border-2 border-indigo-600 rounded-2xl p-4">
                <h1 className="font-semibold">1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <h3>Ans: Access Token: An access token is a credential that is issued by an authentication server after a user successfully authenticates. It is a string of characters that represents the authorization granted to the client (such as a web or mobile application) to access specific resources on behalf of the authenticated user.  <br/>
                Refresh Token: A refresh token is also issued by the authentication server alongside the access token. Its purpose is to obtain a new access token without requiring the user to reauthenticate. 
                Access Token Storage: The access token is typically stored in a secure storage mechanism like an HTTP-only cookie or a browser's local storage. Using an HTTP-only cookie can help mitigate the risk of cross-site scripting (XSS) attacks. <br/>

                Refresh Token Storage: Refresh tokens should be stored in a more secure location, such as an HTTP-only cookie with the "Secure" flag set, or in a secure client-side storage mechanism, such as browser's local storage or a native keychain.
                </h3>
            </div>
            <div className="border-solid border-2 border-indigo-600 rounded-2xl p-4">
                <h1 className='font-semibold'>2) Compare SQL and NoSQL databases?</h1>
                <h3>Data Model:<br/>

                SQL: SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using foreign keys.<br/>
                NoSQL: NoSQL databases use various data models, including key-value, document, columnar, and graph. They provide more flexibility in handling unstructured or semi-structured data. NoSQL databases can store and retrieve data in a schema-less manner, allowing for dynamic and evolving data structures. <br/>
                Scalability:<br/>

                SQL: SQL databases are typically designed for vertical scalability, where you add more resources (CPU, memory) to a single machine to handle increased load. Scaling horizontally across multiple machines can be complex.<br/>
                NoSQL: NoSQL databases are designed for horizontal scalability, allowing you to distribute data across multiple servers. They often provide built-in sharding and replication mechanisms to handle large-scale distributed systems.<br/>
                Query Language:<br/>

                SQL: SQL databases use the standardized SQL language for querying and manipulating data. SQL provides powerful declarative querying capabilities, with features like joins, aggregations, and complex filtering.<br/>
                NoSQL: NoSQL databases have varying query languages depending on the specific database type. Some use SQL-like query languages, while others provide API-based access for data retrieval and manipulation.
                Schema Flexibility:<br/>

                SQL: SQL databases enforce a predefined schema, meaning the structure of the data must be defined before storing it. Adding or modifying schema requires altering the table structure, which can be restrictive in certain scenarios.
                NoSQL: NoSQL databases offer flexible schemas, allowing you to store and modify data without a predefined schema. This makes them well-suited for dynamic or evolving data models.
                Transactions and ACID Compliance:<br/>

                SQL: SQL databases traditionally provide strong transactional support and enforce ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and reliability.
                NoSQL: NoSQL databases vary in terms of transactional support and ACID compliance. Some NoSQL databases sacrifice full ACID properties in favor of scalability and performance. However, some NoSQL databases offer limited transactional capabilities.<br/>
                Use Cases:

                SQL: SQL databases are commonly used in applications where data integrity, complex queries, and ACID compliance are critical, such as financial systems, e-commerce platforms, and relational data-driven applications. <br/>
                NoSQL: NoSQL databases are suitable for use cases that involve handling large amounts of unstructured or semi-structured data, real-time data, rapid scaling, and flexible data models. They are often used in web applications, content management systems, social networks, and IoT applications.</h3>
            </div>
            <div className="border-solid border-2 border-indigo-600 rounded-2xl p-4">
                <h1 className='font-semibold'>3) What is express js? What is Nest JS?</h1>
                <h3> <br/>
                Express.js:
                            Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. Express.js offers a lightweight and unopinionated approach, allowing developers to have fine-grained control over their application's structure and behavior. It focuses on providing a foundation for handling HTTP requests, routing, middleware, and view rendering. Express.js is known for its simplicity and extensive ecosystem of middleware and plugins, making it highly customizable and suitable for various use cases. <br/>
                            Nest.js:
                            Nest.js is a progressive, TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js, leveraging its features while adding additional structure, modularity, and extensibility. Nest.js takes inspiration from Angular's architectural patterns, providing a similar experience and a familiar syntax for developers transitioning from front-end to back-end development. It emphasizes the use of decorators, dependency injection, and modules to build robust and maintainable applications.
                </h3>
            </div>
            <div className="border-solid border-2 border-indigo-600 rounded-2xl p-4">
                <h1 className='font-semibold'>4) What is MongoDB aggregate and how does it work?</h1>
                <h3>In MongoDB, the aggregate operation is a powerful and flexible way to perform data processing and analysis on collections. It allows you to perform complex data manipulations, transformations, and aggregations, similar to SQL's GROUP BY clause or SQL's aggregate functions (such as SUM, COUNT, AVG, etc.).

                The aggregate operation in MongoDB works by taking a collection of documents as input and applying a series of pipeline stages to process and transform the data. Each stage represents a specific operation or transformation that is applied to the input data, and the output of one stage becomes the input for the next stage.</h3>
            </div>
        </div>
    );
};

export default Blog;
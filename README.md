



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Technology Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#built-with">API reference</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

## About The Project

A log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using full-text search or specific field filters.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Production URLS
  ### Backend (Hit this cURL to ingest log in the system):
```
  curl --location 'http://134.209.148.126:3000/' \
  --header 'Content-Type: application/json' \
  --data '{
      "metadata": {
          "parentResourceId": "server-6543"
      },
      "level": "info",
      "message": "Processing request",
      "resourceId": "server-5678",
      "timestamp": "2023-09-15T08:05:00.000Z",
      "traceId": "def-uvw-7069",
      "spanId": "span-789",
      "commit": "6a7b8cd"
  }'

 ```

 ### Query Interface GUI
 ```
 http://134.209.148.126:2020/
 ```



<!-- ABOUT THE PROJECT -->



## Technology Stack
- *Server Environment* - NodeJS
- *Framework* - ExpressJS
- *Database* - MongoDB
- *Cloud database service* - MongoDB Atlas
- *Backend Deployment* - DigitalOcean
- *Containerization* - Docker
- *Frontend* - React

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh 
    git clone https://github.com/dyte-submissions/november-2023-hiring-0xVegeta.git
   ```
2. Navigate to the project's directory and install all the relevant dev-dependencies as well as dependencies

   ```sh
   npm install
   cd frontend
   npm install
   ```
3. Start both frontend and backend servers
   ```js
    npm run dev
   ```

## API Reference


| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| POST | / |  Add a new log to database|
| GET | /query | Fetches logs on the basis of query string |



# Note
This is just a basic implementation of elasticsearch using in JavaScript Project.
Data using is from Kaggle: [here](https://www.kaggle.com/datasets/bilalyussef/google-books-dataset)



# JavaScript-Elasticsearch Usage Guide

## Clone Source Code from GitHub

To get started, clone the source code from the GitHub repository using the following command:

```bash
git clone https://github.com/DannyEggy/javascript-elasticsearch.git
```

## Install Docker

Firstly, you need to install Docker before running the application. Install Docker from [here](https://docs.docker.com/get-docker/).

## Run Elasticsearch Cluster

After installing Docker, run the following command to start an Elasticsearch Cluster:

```bash
docker run --rm -p 9200:9200 -p 9300:9300 -e "xpack.security.enabled=false" -e "discovery.type=single-node" -e "http.cors.enabled=true" -e "http.cors.allow-origin=http://127.0.0.1:5500" docker.elastic.co/elasticsearch/elasticsearch:8.7.0
```

## Push Data to Elasticsearch

You can choose one of the two methods to push data to Elasticsearch:

### Method 1: Using npm start

Run the following command to automatically push data to Elasticsearch:

```bash
npm start
```

### Method 2: Using pushData.mjs

Alternatively, run the `pushData.mjs` file using the command:

```bash
node pushData.mjs
```

## Delete Data

If you want to delete the created data, run the following command:

```bash
node deleteData.mjs
```

(*Note: You can open the `pushData` and `deleteData` files to customize the data according to your needs.*)

## Run the Application and Test

Finally, run the `index.html` file to experience the application and test the search functionality on Elasticsearch.

Enjoy your experience with the JavaScript-Elasticsearch application!
```

Note: Make sure you have Node.js and npm installed before running npm commands.

import { createReadStream } from 'fs';
import csv from 'csv-parser';
import { Client } from '@elastic/elasticsearch';

const esClient = new Client({ node: 'http://localhost:9200' });
const indexName = 'books';

async function createIndex() {
  try {
    await esClient.indices.create({
      index: indexName,
      body: {
        mappings: {
          properties: {
            id: { type: 'keyword' },
            title: { type: 'text' },
            desc: { type: 'text' },
            authors: { type: 'text' },
            categories: { type: 'text' },
            averagerating: { type: 'float' },
            maturityrating: { type: 'keyword' },
            publisheddate: { type: 'date' },
            pagecount: { type: 'integer' },
            // Thêm các trường khác nếu cần
          }
        }
      }
    });
    console.log('Index created successfully');
  } catch (error) {
    console.error('Error creating index:', error);
  }
}

async function pushData() {
  const csvFilePath = 'GoogleBookAPIDataset.csv';

  createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', async (row) => {
      const data = {
        id: row.id,
        title: row.title,
        desc: row.desc,
        authors: row.authors,
        categories: row.categories,
        averagerating: row.averageRating,
        maturityrating: row.maturityRating,
        publisheddate: row.publishedDate,
        pagecount: row.pageCount,
        // Thêm các trường khác nếu cần
      };

      try {
        await esClient.index({
          index: indexName,
          body: data,
        });
        console.log(`Document with id ${data.id} indexed successfully`);
      } catch (indexError) {
        console.error(`Error indexing document with id ${data.id}:`, indexError);
      }
    })
    .on('end', () => {
      console.log('Data import completed');
      esClient.close();
    });
}

// Tạo index trước khi đẩy dữ liệu
createIndex().then(() => pushData());

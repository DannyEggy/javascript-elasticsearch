

// Khởi tạo client Elasticsearch
import { Client } from '@elastic/elasticsearch';

const esClient = new Client({ node: 'http://localhost:9200' });

// Tên index Elasticsearch bạn muốn xóa
const indexName = 'books';

// Hàm xóa index
async function deleteIndex() {
  try {
    await esClient.indices.delete({
      index: indexName
    });
    console.log('Index deleted successfully');
  } catch (error) {
    console.error('Error deleting index:', error);
  }
}

// Gọi hàm để xóa index
deleteIndex();

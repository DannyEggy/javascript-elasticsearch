const fs = require('fs');
const Papa = require('papaparse');

const csvFilePath = 'GoogleBookAPIDataset.csv'; // Đường dẫn đến file CSV
const jsonFilePath = 'GoogleBookAPIDataset.json'; // Đường dẫn đến file JSON

// Sử dụng thư viện Papaparse để đọc dữ liệu CSV
const csvData = fs.readFileSync(csvFilePath, 'utf-8');
const parsedData = Papa.parse(csvData, { header: true });

// Lọc chỉ giữ lại các cột mong muốn
const filteredData = parsedData.data.map((row) => ({
  id: row.id,
  title: row.title,
  desc: row.desc,
  authors: row.authors,
  categories: row.categories,
  averagerating: row.averageRating,
  maturityrating: row.maturityRating,
  publisheddate: row.publishedDate,
  pagecount: row.pageCount,
}));

// Lưu dữ liệu JSON vào file
fs.writeFileSync(jsonFilePath, JSON.stringify(filteredData, null, 2), 'utf-8');
console.log('Chuyển đổi thành công!');

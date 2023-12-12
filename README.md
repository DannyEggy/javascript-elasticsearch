# Hướng Dẫn Sử Dụng JavaScript-Elasticsearch

## Clone mã nguồn từ GitHub

Để bắt đầu, hãy clone mã nguồn từ repository GitHub theo đường dẫn sau:

```bash
git clone https://github.com/DannyEggy/javascript-elasticsearch.git
```

## Cài Đặt Docker

Đầu tiên, bạn cần cài đặt Docker trước khi chạy ứng dụng. Cài đặt Docker từ [đây](https://docs.docker.com/get-docker/).

## Chạy Elasticsearch Cluster

Sau khi cài đặt Docker, hãy chạy lệnh sau để khởi động một Elasticsearch Cluster:

```bash
docker run --rm -p 9200:9200 -p 9300:9300 -e "xpack.security.enabled=false" -e "discovery.type=single-node" -e "http.cors.enabled=true" -e "http.cors.allow-origin=http://127.0.0.1:5500" docker.elastic.co/elasticsearch/elasticsearch:8.7.0
```

## Push Dữ Liệu Lên Elasticsearch

Bạn có thể chọn một trong hai cách để push dữ liệu lên Elasticsearch:

### Cách 1: Sử Dụng npm start

Chạy lệnh sau để tự động push dữ liệu lên Elasticsearch:

```bash
npm start
```

### Cách 2: Sử Dụng pushData.mjs

Hoặc chạy file `pushData.mjs` bằng lệnh:

```bash
node pushData.mjs
```

## Xóa Dữ Liệu

Nếu bạn muốn xóa dữ liệu đã tạo, hãy chạy lệnh sau:

```bash
node deleteData.mjs
```

(*Lưu ý: Bạn có thể mở file `pushData` và `deleteData` để chỉnh sửa dữ liệu theo nhu cầu của bạn.*)

## Chạy Ứng Dụng và Thử Nghiệm

Cuối cùng, chạy file `index.html` để trải nghiệm ứng dụng và thử nghiệm chức năng tìm kiếm trên Elasticsearch.

Chúc bạn có trải nghiệm tốt với ứng dụng JavaScript-Elasticsearch!
```

Lưu ý: Đảm bảo bạn đã cài đặt Node.js và npm trước khi chạy các lệnh npm.

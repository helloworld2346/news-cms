# News CMS

> Hệ thống Cổng Thông Tin Điện Tử & Thư Viện Số chạy trên mạng LAN nội bộ, phát triển bằng Golang và React.

---

## Giới thiệu

News CMS là hệ thống quản lý nội dung (CMS) được xây dựng nhằm phục vụ môi trường mạng nội bộ (Intranet/LAN), cho phép quản lý và xuất bản:

- Tin tức
- Thông báo
- Văn bản
- Công văn
- Nghị quyết
- Quyết định
- Thư viện số
- Video
- Hình ảnh
- Banner
- Lịch công tác

Hệ thống được thiết kế theo hướng **Module**, **Clean Architecture** và **Storage Adapter**, giúp dễ mở rộng và dễ bảo trì.

---

# Mục tiêu

- Hoạt động hoàn toàn trong mạng LAN
- Không phụ thuộc Internet
- Dễ triển khai
- Dễ mở rộng
- Hiệu năng cao
- Bảo mật
- Tương thích trình duyệt Chrome phiên bản cũ

---

# Công nghệ

## Backend

- Golang
- Gin
- GORM
- PostgreSQL
- JWT Authentication
- Redis (Optional)
- Swagger

---

## Frontend

- React
- TypeScript
- Vite
- TailwindCSS
- TanStack Query
- React Router
- Axios
- React Hook Form
- Zod
- Shadcn UI

---

## Storage

Development

- Local Storage

Production

- Synology NAS

Storage được thiết kế theo Adapter Pattern.

---

# Kiến trúc

```text
Users

      │

 React

      │

 TanStack Query

      │

 Go REST API

      │

 PostgreSQL

      │

 Storage Adapter

      │

 Local Storage (DEV)

 hoặc

 Synology NAS (PROD)
```

Frontend không biết dữ liệu đang lưu ở Local hay NAS.

Toàn bộ thao tác lưu trữ đều thông qua Storage Adapter.

---

# Module

## Core

- Authentication
- User
- Role
- Permission
- Dashboard
- Audit Log
- Scheduler
- Settings

---

## CMS

- Tin tức
- Danh mục
- Tag
- Banner
- Thông báo

---

## Digital Library

- Văn bản
- PDF
- Word
- Excel
- PowerPoint
- Ebook

---

## Media

- Media Center
- Album
- Hình ảnh
- Video

---

## Search

- Global Search
- Search Tin tức
- Search Văn bản
- Search Media

---

# Storage

Storage được tách thành Interface.

```go
type Storage interface {
    Upload(...)
    Delete(...)
    Exists(...)
    Open(...)
}
```

Development

```text
uploads/
```

Production

```text
Synology NAS
```

Business Logic không phụ thuộc loại Storage.

---

# Upload Flow

```text
React

↓

Go API

↓

Storage Adapter

↓

Local

hoặc

NAS

↓

Database

↓

Frontend
```

---

# Cấu trúc dự án

```text
news-cms/

├── backend/
│
├── frontend/
│
├── docs/
│
├── deploy/
│
├── scripts/
│
├── docker-compose.yml
│
├── .gitignore
│
└── README.md
```

---

# Backend Structure

```text
backend/

cmd/

config/

internal/

pkg/

middleware/

routes/

migrations/

storage/
```

---

# Frontend Structure

```text
frontend/

src/

components/

pages/

layouts/

hooks/

services/

types/

utils/
```

---

# Triển khai

Development

```text
React

↓

Go

↓

PostgreSQL

↓

Local Upload
```

Production

```text
Nginx

↓

React

↓

Go

↓

PostgreSQL

↓

Synology NAS
```

---

# Tương thích

Hệ thống ưu tiên triển khai trên mạng nội bộ.

Yêu cầu:

- Không sử dụng CDN
- Không Google Fonts
- Không API bên ngoài
- Không Office Online
- Không Google Docs Viewer
- Build tương thích Chrome phiên bản cũ (sử dụng plugin legacy nếu cần)
- Tài nguyên tĩnh được phục vụ từ máy chủ nội bộ

---

# Định hướng phát triển

- Media Center
- Digital Library
- Audit Log
- Scheduler
- Dashboard
- Search Center
- Backup Center
- Notification Center
- System Settings
- API cho Mobile
- Docker Deployment

---

# Coding Standard

- Clean Architecture
- Repository Pattern
- Service Pattern
- Storage Adapter Pattern
- Dependency Injection
- RESTful API
- Conventional Commit
- Git Flow

---

# Roadmap

## v0.1

- Authentication
- User
- Role
- Permission

## v0.2

- Media Center
- Storage Adapter
- Upload

## v0.3

- Tin tức
- Danh mục
- Tag

## v0.4

- Văn bản
- Thư viện số
- Album
- Video

## v0.5

- Dashboard
- Audit Log
- Search

## v1.0

Production Ready

---

# License

Internal Use Only
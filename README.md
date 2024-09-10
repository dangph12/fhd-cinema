## Mẫu project cho môn SWP391
### Web app sử dụng React, Spring Boot và MySQL

Cấu trúc project
```
.
├── backend
│   ├── ...
│   └── Dockerfile
├── db
│   └── password.txt
├── frontend
│   ├── ...
│   └── Dockerfile
├── compose.yaml
└── README.md
```

## Đăng nhập Github bằng Github CLI

Tải về và cài đặt [Github CLI](https://cli.github.com/)

Mở cmd và chạy lệnh
```
gh auth login
```
Chọn `Github.com`

Phân protocol, chọn `HTTPS`

Phần credentials, chọn `Yes`

Phần authenticate, chọn `Login with a browser`

Cmd sẽ hiện ra mã xác thực, nhấn Enter để mở browser và nhập mã.

## Tải repo bằng Github CLI

Mở cmd và chạy lệnh
```
gh repo clone dangph12/swp-template -- --depth=1
```

## Chạy các container bằng Docker

Tải về và cài đặt [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Đứng từ folder chứa file [_compose.yaml_](compose.yaml), mở cmd và chạy lệnh

```
$ docker compose up -d --build
```
Kết quả trả về
```
Creating swp-template-frontend-1 ... done
Creating swp-template-db-1       ... done
Creating swp-template-backend-1  ... done
```

Hướng dẫn cách điều hướng nhanh đến thư mục trên Windows xem tại [Phụ lục 1](#1-phụ-lục-1).

Hướng dẫn copy và dán lệnh trong cmd bằng Crtl-C/Crtl-V xem tại [Phụ lục 2](#2-phụ-lục-2).

Hướng dẫn sửa code trực tiếp trên container từ máy host xem tại [Phụ lục 3](#3-phụ-lục-3).

> ℹ️ **_CHÚ Ý_**
>
> Mỗi lần có code mới cũng chạy lại lệnh trên để update code trong các container
> 
> Docker sẽ mở cổng 3000, 3306 từ các container đến các cổng tương đương trên máy host
> 
> Hãy đảm bảo các cổng 3000, 3306 trên máy host không được sử dụng

## Kết quả mong muốn

Danh sách các container sau khi chạy

Sử dụng Docker Desktop để kiểm tra hoặc sử dụng cmd và chạy lệnh 
```
$ docker ps
```
Kết quả trả về
```
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                NAMES
a63dee74d79e        swp-template-backend      "java -cp app:app/li…"   39 seconds ago      Up 37 seconds       8080/tcp                             swp-template_backend-1
6a7364c0812e        swp-template-frontend     "docker-entrypoint.s…"   39 seconds ago      Up 33 seconds       0.0.0.0:3000->3000/tcp               swp-template_frontend-1
b176b18fbec4        mysql:8.0.36-debian       "docker-entrypoint.s…"   39 seconds ago      Up 37 seconds       0.0.0.0:3306->3306/tcp, 33060/tcp    swp-template_db-1
```


## Kiểm tra các cổng kết nối

Sau khi app chạy, kiểm tra url `http://localhost:3000` trên browser
![page](./tutorials/output.jpg)

Kiểm tra cổng 3306 của MySQL bằng MySQL Workbench với tài khoản `root` và mật khẩu trong [file password.txt](db/password.txt)

![page](./tutorials/database.jpg)

## Huỷ các container bằng Docker

Sử dụng Docker Desktop để huỷ hoặc sử dụng cmd và chạy lệnh

```
$ docker compose down
```
Kết quả mong muốn
```
Stopping swp-template-backend-1  ... done
Stopping swp-template-frontend-1 ... done
Stopping swp-template-db-1       ... done
Removing swp-template-backend-1  ... done
Removing swp-template-frontend-1 ... done
Removing swp-template-db-1       ... done
Removing network swp-template-default
```

## Phụ lục
### 1. Phụ lục 1
Dùng File Explorer mở đến thư mục muốn chạy cmd, ghi từ `cmd` trên thanh địa chỉ và nhấn Enter.

![page](./tutorials/explorer.jpg)

### 2. Phụ lục 2
Mở cmd, chuột phải vào dòng chữ `cmd.exe` trên cửa sổ, chọn `Properties`

Config theo ảnh dưới

![page](./tutorials/cmd.jpg)

### 3. Phụ lục 3

> ℹ️ **_CHÚ Ý_**
>
> Việc sửa code trực tiếp trên container từ máy host không được khuyến khích
>
> Việc này chỉ có thể thực hiện dành cho folder [frontend/src](frontend/src)

Mở [Visual Studio Code](https://code.visualstudio.com/), cài extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Bấm phím `F1`, tìm `Dev Containers: Open Folder in Container`

![page](./tutorials/vs.jpg)

Chọn folder [frontend/src](frontend/src)

Chọn option `Add configuration to user data store`

![page](./tutorials/vs2.jpg)

Sau đó cứ nhấn Enter và chờ đợi.

Kết quả có được

![page](./tutorials/vs3.jpg)




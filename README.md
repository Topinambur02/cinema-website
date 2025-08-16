# Cinema-website

## Описание проекта

### Используемые технологии:

<img src="https://github.com/user-attachments/assets/f2b1a202-83ef-4842-8ed0-0315a1377f6f" title="Python" alt="python" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/0609feae-90f2-4ec6-9a8f-72541a88ce32" title="TypeScript" alt="typescript" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/1e5a5545-738b-499a-be32-6c7a6f4b6ead" title="React" alt="react" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/3dd21106-e20b-4d0c-b7ab-4a0d018924eb" title="Pnpm" alt="pnpm" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/48d70a4f-c4e2-49d6-8638-a9642a697d95" title="TailwindCSS" alt="tailwind" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/7421ffac-2634-43d4-9463-fc028d8ce689" title="Ant Design" alt="antd" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/d24ddbc5-3e27-4ec2-9d18-f5e5a7261e0a" title="Axios" alt="axios" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/a4fa6310-8f72-4771-ab2b-32416fb33800" title="Mobx" alt="mobx" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/5dccd5cd-e6ea-45d8-898c-51b9dc5ea750" title="Prettier" alt="prettier" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/59b09fca-f33f-4f62-b07f-d3bd9615a7e8" title="Lucide" alt="lucide" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/c27ff309-17ff-4eb4-a718-1e82cf57a4b3" title="Vite" alt="vite" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/3e9bc31b-8187-4f3c-affa-55a72695013d" title="Sass" alt="sass" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/48086997-d4eb-4876-848c-9baaf8e728eb" title="FastAPI" alt="fastapi" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/cb88c094-5f7e-43d2-970c-4640c8e203ae" title="FastAPI-Users" alt="fastapi-users" width="225" height="225"/>
<img src="https://github.com/user-attachments/assets/1f8c4daa-dce1-465f-bb11-1a95bc72a1c6" title="Postgres" alt="postgres" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/74fcd7e2-345f-4eb2-afbf-8fd701726be8" title="SQLAlchemy" alt="sqlalchemy" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/b0e8f3ae-84b6-4121-8c2c-9ed8f0355e14" title="Poetry" alt="poetry" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/6a28d993-e235-4314-9860-f12e71238614" title="Pydantic" alt="pydantic" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/e8ae669f-3be6-4171-9dd5-15011505ecfd" title="Minio" alt="minio" width="225" height="225"/>
<img src="https://github.com/user-attachments/assets/648aa8d0-0ba1-4362-a281-2e252e2ec97b" title="Docker" alt="docker" width="75" height="75"/>
<img src="https://github.com/user-attachments/assets/ecf924a1-4476-4e60-aa40-525966a89b4e" title="Docker-compose" alt="dockercompose" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/0b1bb9c6-a527-4b58-b642-19b45981e1e9" title="Git" alt="git" width="75" height="75" />
<img src="https://github.com/user-attachments/assets/9d48629f-b3a4-4396-a1b3-34627d17dcc8" title="Nginx" alt="nginx" width="75" height="75" />

<br/>

### Основные функции:
- JWT-аутентификация (access token)
- Ролевая модель управления доступом (RBAC)
- Асинхронные CRUD-операции с PostgreSQL
- Автоматическая генерация миграций (Alembic)
- Валидация данных с Pydantic v2
- Загрузка/скачивание файлов через REST API
- Интеграция с MinIO (S3-совместимое хранилище)
- Интерактивная документация Swagger UI
- Асинхронный HTTP клиент на Axios
- Админ-панель, сделанная с помощью компонентов из Ant design

### Предварительные требования
- Node.js v22.14.0 или выше
- Pnpm v10.6.5 или выше
- Python v3.13.2 или выше
- Postgres v14.18 или выше
- Minio vRELEASE.2025-04-08T15-41-24Z или выше
- Poetry v2.1.1 или выше
- Docker v27.5.1 (для docker-запуска)

## Установка и запуск (без Docker)

1. Клонируйте репозиторий:
```
git clone https://github.com/Topinambur02/cinema-website
cd cinema-website
```
2. Создайте виртуальное окружение, активируйте его и установите poetry:
```
cd backend
python -m venv .venv

# MacOS и Linux
source .venv/bin/activate
# Windows
.venv/Scripts/activate

pip install poetry
```
3. Создайте файл .env_db в корне проекта и заполните значение:
```
# Локальная база данных (замените значения на свои!)
DB_HOST=localhost
DB_PORT=your_db_port
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=your_db_password
```
4. Создайте файл .env_s3 в корне проекта и заполните значение:
```
# Локальное S3-хранилище (замените значения на свои!)
MINIO_HOST=localhost
MINIO_PORT=your_minio_port
MINIO_ACCESS_KEY=your_minio_access_key
MINIO_SECRET_KEY=your_minio_secret_key
```
5. Создайте файл .env_jwt в корне проекта и заполните значение:
```
# Шифрование (придумайте свой секретный ключ)
SECRET_KEY=your_secret_key
```
6. Примените миграции к базе данных:
```
alembic upgrade head
```
7. Запустите backend:
```
python main.py
```
8. Перейдите в папку frontend и загрузите библиотеки:
```
cd ..
cd frontend
pnpm install
```
9. Запустите frontend с помощью команды:
```
pnpm run dev
```

## Запуск с помощью Docker
1. Клонируйте репозиторий:
```
git clone https://github.com/Topinambur02/cinema-website
cd cinema-website
```
2. Создайте файл .env_db в корне проекта и заполните значение:
```
# База данных в Docker (замените значения на свои!)
DB_HOST=postgres
DB_PORT=your_db_port
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=your_db_password
```
3. Создайте файл .env_s3 в корне проекта и заполните значение:
```
# S3-хранилище в Docker (замените значения на свои!)
MINIO_HOST=minio
MINIO_PORT=your_minio_port
MINIO_ACCESS_KEY=your_minio_access_key
MINIO_SECRET_KEY=your_minio_secret_key
```
4. Создайте файл .env_jwt в корне проекта и заполните значение:
```
# Шифрование (придумайте свой секретный ключ)
SECRET_KEY=your_secret_key
```
5. Запустить проект с помощью команды:
```
docker compose up
```
Приложение будет доступно по адресу: http://localhost

## Основные скрипты
frontend:
- ```pnpm run dev``` - запуск dev-сервера
- ```pnpm run build``` - сборка production-версии (очищает кэш)
- ```pnpm run prettify``` - форматирование кода с Prettier

backend:
- ```python main.py``` - запуск приложения

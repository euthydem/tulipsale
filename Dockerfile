FROM nginx:alpine

# Копируем все файлы в директорию nginx
COPY . /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx на переднем плане
CMD ["nginx", "-g", "daemon off;"]

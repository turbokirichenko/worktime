docker run --name worktime-db \
    -p 5433:5432 \
    -e POSTGRES_PASSWORD=password \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=worktime_db \
    -d postgres
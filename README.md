run <pg_ctl -D /usr/local/var/postgres start> to start postgres server;
run <psql -a -f schema.sql> inside of sql folder to connect to db and create tables;

CREATE temporary TABLE t (
    seller_name VARCHAR (255),
    email VARCHAR (255) UNIQUE,
    saved_by INTEGER
)

copy t (seller_name, email, saved_by) FROM '/Users/nickcai/Desktop/HackReactor/seller-info-component/data/sellerInfo.txt' DELIMITERS ','

INSERT INTO sellers (seller_name, email, saved_by) 
SELECT seller_name, email, saved_by
FROM t

drop table t
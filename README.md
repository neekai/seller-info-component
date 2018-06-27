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

adding table constraints

ALTER TABLE ratings add CONSTRAINT seller_id_fkey FOREIGN key (seller_id) REFERENCES sellers (seller_id)

ALTER TABLE ratings DROP CONSTRAINT seller_id_fkey, add CONSTRAINT seller_id_fkey FOREIGN key (seller_id) REFERENCES sellers (seller_id) ON DELETE cascade ON UPDATE cascade

ALTER TABLE sellers add CONSTRAINT saved_by_fkey FOREIGN key (saved_by) REFERENCES sellers (seller_id) "self-referencing"

create index on images(product_id);
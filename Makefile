# run dev server with watcher in docker
up:
	docker-compose up

stop:
	docker-compose stop 

reset:
	docker-compose down
	docker-compose kill
	docker-compose rm -v --force
	docker-compose up

rm:
	docker-compose down
	docker-compose kill
	docker-compose rm -v --force

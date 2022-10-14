build:
			 @bash ./scripts/build.sh
seed:
			 @bash ./scripts/seed.sh
first-install:
			 			 echo "construindo o sistema"
						 make build
						 make migrate
						 make up
up:
	 @bash ./scripts/start.sh
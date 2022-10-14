build:
			 @bash ./scripts/build.sh
seed:
			 @bash ./scripts/seed.sh
first-install:
			 			 echo "construindo o sistema"
						 make build
						 make seed
						 make up
up:
	 @bash ./scripts/start.sh

down:
		@bash ./scripts/stop.sh
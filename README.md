# Proof of concept Nest microservices synch/asynch communication using Kafka

## Using this example

### Start docker containers

First, start kafka and kafdrop (kafka ui interface) running the command:

```sh
docker-compose up -d
```

### Start microservices and api-gateway

To start all applications at the same time, run the following command:

```sh
pnpm run dev
```

This command should start the ms-auth & ms-voting microservices and the api-gateway application

### Execute POST method

Make a post call to http://localhost:3000 sending a JSON body like so:

```json
{
	"userId": "456",
	"votingId": "111",
	"vote": "F"
}
```
where: 
- userId can be '123' or '456'
- votingId can be any string
- vote can be any string

You should see something like this into application LOG:

```sh
ms-voting:dev: User Peter Smith voted F for the voting 111
```

## What is all about ?
This simple monorepo shows how to setup microservices to communicate (kind of) each other
using synch/asynch messages through Kafka.

It uses request-response message style and event-based message style.

For voting service, the ms uses event-based style.

For getting user information, the ms uses message-response style.

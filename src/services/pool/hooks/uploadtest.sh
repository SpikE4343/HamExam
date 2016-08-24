#!/bin/bash

(echo -n "{ \"name\":\"Technican\", \"tag\":\"tech\", \"pool\":\""; (openssl base64 < techpool.txt | \
 php -r "echo urlencode(file_get_contents('php://stdin'));"); \
 echo "\"}") | \
 curl http://localhost:3030/pools \-H "Content-Type: application/json" --data-binary "@-"

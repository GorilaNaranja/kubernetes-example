# KUBERNETES-API-REDIS-EXAMPLE:  

Api (node) + Redis (database)

## API

Service type: LoadBalancer  
Port: 3000  
Env: REDIS_HOST = redis://redis-service:6379  
Pod: 1 container replicated 3 times  

## REDIS

Service type: ClusterIP  
Port: 6379  
Pod: 2 containers (redis and busybox) replicated 1 times  

Busybox is a container with ubuntu and tools to develop


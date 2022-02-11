# KUBERNETES-EXAMPLE:  

Api (node)
From wsl linux console

## KUBERNETE SCHEMA
Kubernetes
    Ingress
        Service: Load Balancer (round robin)
            Deployment
                Pod
                    Container

```bash
minikube start
minikube docker-env
eval $(minikube docker-env)
kubectl apply -f service.yml
minikube tunnel
```

## Visit

http://localhost:3000

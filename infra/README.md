Don't want to run Docker at all?

1. Close Docker Setup
2. Run `gcloud components install kubectl`
3. Run `gcloud container clusters get-credentials <cluster name>`

OK still running Docker?
Run `gcloud container clusters get-credentials <cluster name>`

STEPS to enable Cloud Build

1. Enable Google Cloud Build
2. Update the skaffold.yaml file to use Google Cloud Build
   3 . Setup ingress-nginx on our google cloud cluster kubernetes.github.io/ingress-nginx
3. Update our hosts file again to point to the remote cluster
4. Restart Skaffold

Creating a Secret (imperative approach) (change this later to declarative approach)

```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

Check Secrets

```
kubectl get secrets
```

Check Pod

```
k describe pod [pod-name]
```

Get Namepacess

```
kubectl get namespace
```

Get specific services from a Namepsace

```
kubectl get services -n namespace
```

Cross namespace communcation uses a a different patter
http://SERVICENAME.NAMESPACE.svc.cluster.local

```
http://ingress-nginx.ingress-nginx-controller.svc.cluster.local
```

External Name Service ?

Rule of thumb for the requests:

1. Request from a component

- Always issued from the browser, so use a domain of ''

2. Request from getInitialProps

- Might be executed from the client or the server! Need to figure out what our env is so we can use the corret domain

getInitialProps executed on the server

- Hard refresh of page
- Clicking link from different domain
- Typing URL into address bar

getInitialProps executed on the client

- Navigating from one page to another while in the app

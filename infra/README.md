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

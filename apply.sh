kustomize build apps/jupyter/notebook-controller/upstream/overlays/standalone | kubectl apply -f -
kustomize build apps/jupyter/jupyter-web-app/upstream/base | kubectl apply -f -
kustomize build apps/profiles/upstream/overlays/standalone | kubectl apply -f -


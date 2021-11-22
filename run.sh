cd notebook-controller
make deploy
cd ..
kustomize build crud-web-apps/jupyter/manifests/overlays/openshift | oc create -f -
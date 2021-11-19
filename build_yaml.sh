kustomize build apps/jupyter/notebook-controller/upstream/overlays/standalone > yamls/nbc.yaml
kustomize build apps/jupyter/jupyter-web-app/upstream/base > yamls/jwa.yaml
kustomize build apps/profiles/upstream/overlays/standalone > yamls/profiles.yaml

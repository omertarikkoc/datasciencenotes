---
prev: ./linear-regression
next: ./logistic-regression
---
# Neural Networks Example 

```python
# Originally published at https://scikit-learn.org/stable/modules/neural_networks_supervised.html

# Class MLPClassifier implements a multi-layer perceptron (MLP) algorithm that trains using Backpropagation.

# MLP trains on two arrays: array X of size (n_samples, n_features), which holds the training samples represented as floating point feature

from sklearn.neural_network import MLPClassifier
X = [[0., 0.], [1., 1.]]
y = [0, 1]
clf = MLPClassifier(solver='lbfgs', alpha=1e-5,
                    hidden_layer_sizes=(5, 2), random_state=1)

clf.fit(X, y)

# After fitting (training), the model can predict labels for new samples
print(clf.predict([[2., 2.], [-1., -2.]]))

# MLP can fit a non-linear model to the training data. clf.coefs_ contains the weight matrices that constitute the model parameters
print([coef.shape for coef in clf.coefs_])

```

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/neural-networks?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

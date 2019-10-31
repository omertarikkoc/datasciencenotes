---
prev: ./linear-regression
next: ./logistic-regression
---
# Decision Tree Example 

```python
# Original code can be found at: https://scikit-learn.org/stable/modules/tree.html

# Necessary imports
from sklearn.datasets import load_iris
from sklearn import tree
from sklearn import tree

# Data set init
X = [[0, 0], [1, 1]]
Y = [0, 1]

# DecisionTreeClassifier takes as input two arrays: an array X, sparse or dense, of size [n_samples, n_features] holding the training samples, and an array Y of integer values, size [n_samples]

# Create decision tree classifier and fit the model
clf = tree.DecisionTreeClassifier()
clf = clf.fit(X, Y)

# After being fitted, the model can then be used to predict the class of samples:

clf.predict([[2., 2.]])

print(f"first prediction: {clf.predict([[2., 2.]])}")

# Using the Iris dataset, we can construct a tree as follows:
iris = load_iris()
clf = tree.DecisionTreeClassifier()
clf = clf.fit(iris.data, iris.target)

tree.plot_tree(clf.fit(iris.data, iris.target))
print("See the plotted tree: \n https://scikit-learn.org/stable/_images/sphx_glr_plot_iris_dtc_0021.png")
```
![decisiontree](https://scikit-learn.org/stable/_images/sphx_glr_plot_iris_dtc_0021.png)

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/decision-tree?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
---
prev: ./linear-regression
next: ./logistic-regression
---
```python
# Original code example can be found at: https://scikit-learn.org/stable/modules/cross_validation.html

# Import necessary libraries
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import datasets
from sklearn import svm
from sklearn.model_selection import cross_val_score

# Load Iris data set
iris = datasets.load_iris()
iris.data.shape, iris.target.shape

# Split the data to test and train data set
# 0.4 ratio is used for this split
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.4, random_state=0)

# Check the shapes of the training and test data
print(f"X_train_shape: {X_train.shape}, y_train_shape:  {y_train.shape}")
print(f"X_test.shape: {X_test.shape}, y_test.shape: {y_test.shape}")

# We can now quickly sample a training set while holding out 40% of the data for testing (evaluating) our classifier:
clf = svm.SVC(kernel='linear', C=1).fit(X_train, y_train)
print(f"clf score: {clf.score(X_test, y_test)}")  

# The simplest way to use cross-validation is to call the cross_val_score helper function on the estimator and the dataset.
clf = svm.SVC(kernel='linear', C=1)
scores = cross_val_score(clf, iris.data, iris.target, cv=5)
print(f"Cross validation score: {scores}") 
```

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/cross-validation?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
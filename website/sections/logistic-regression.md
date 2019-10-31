---
prev: ./linear-regression
next: ./logistic-regression
---
# Logistic Regression Example

```python
# This example originally published in here: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html

# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression

# Load Iris Library
X, y = load_iris(return_X_y=True)

# Create classifier
clf = LogisticRegression(random_state=0, solver='lbfgs',
                         multi_class='multinomial').fit(X, y)

print(clf.predict(X[:2, :]))

print(clf.predict_proba(X[:2, :]))


print(clf.score(X, y))
```

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/logistic-regression?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
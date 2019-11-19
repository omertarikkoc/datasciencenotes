---
prev: ./linear-regression
next: ./logistic-regression
---
# Random Forest  Example 

```python
# this example originally published at: https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html

# Necassary imports 
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# Data Set
X, y = make_classification(n_samples=1000, n_features=4,
                           n_informative=2, n_redundant=0,
                           random_state=0, shuffle=False)
# Model and fitting
clf = RandomForestClassifier(n_estimators=100, max_depth=2,
                             random_state=0)
clf.fit(X, y)  

# Features
print(clf.feature_importances_)

# Prediction
print(clf.predict([[0, 0, 0, 0]]))
```

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/random-forest?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

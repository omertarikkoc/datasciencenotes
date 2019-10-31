---
prev: ./logistic-regression
next: ./knn
---
# Naive Bayes Example
```
# This example originally published in here: https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html

# Import numpy and Naive Bayes from sklearn
import numpy as np
from sklearn.naive_bayes import GaussianNB

# Create data using numpy
X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
Y = np.array([1, 1, 1, 2, 2, 2])

# Init Naive Bayes Classifier
clf = GaussianNB()
# Fit model
clf.fit(X, Y)

print(clf.predict([[-0.8, -1]]))

clf_pf = GaussianNB()
clf_pf.partial_fit(X, Y, np.unique(Y))

print(clf_pf.predict([[-0.8, -1]]))

```


## Run online

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/naive-bayes?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>






# Support Vector Machine (SVM) Example

``` python
# Original example can be found at: https://scikit-learn.org/stable/modules/svm.html

# Import necassary libraries
from sklearn import svm

# Create data set
X = [[0, 0], [1, 1]]
y = [0, 1]

# Create SVM classifier and fit model
clf = svm.SVC(gamma='scale')
clf.fit(X, y)  

# After being fitted, the model can then be used to predict new values:
prediction = clf.predict([[2., 2.]])

print(f"prediction: {prediction}")

# SVMs decision function depends on some subset of the training data, called the support vectors. Some properties of these support vectors can be found in members support_vectors_, support_ and n_support:


# get support vectors
support_vectors = clf.support_vectors_
print(f"support_vectors: {support_vectors}")


# get indices of support vectors
support_vectors_indices = clf.support_ 
print(f"support vectors indices: {support_vectors_indices}")

# get number of support vectors for each class
number_of_support_vectors = clf.n_support_ 
print(f"number of support vectors: {number_of_support_vectors}")

```

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/svm?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

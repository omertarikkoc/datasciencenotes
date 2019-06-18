# K Nearest Neighbor

**Basic Idea:** If it walks like a duck, quacks like a duck, then it is probably a duck!

## 3 Main Requirements

- The set of stored records
- Distance Metric to compute distance between records
- The value of k, the number of nearest neighbors to retrieve

## Python Example
```
# Import sklearn
from sklearn.neighbors import KNeighborsClassifier

# Create sample data
x = [[0], [1], [2], [3]]
y = [0, 0, 1, 1]

# Create and train the model
neigh = KNeighborsClassifier(n_neighbors = 3)
neigh.fit(x,y)

# Make a prediction
print(neigh.predict([[1.1]]))
# [0]
```

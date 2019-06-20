# K Nearest Neighbor

**Basic Idea:** If it walks like a duck, quacks like a duck, then it is probably a duck!

## 3 Main Requirements

- The set of stored records
- Distance Metric to compute distance between records
- The value of k, the number of nearest neighbors to retrieve


## To classify an unknow record:
- Compute distance to other training records
- Identify k nearest neighbors
- By taking majority, choosing the label


## Types of Distances

![distances](http://www.improvedoutcomes.com/docs/WebSiteDocs/image/diagram_euclidean_manhattan_distance_metrics.gif)

### Euclidian distance
d(p,q) = sqrt(sum(p-q)^2)

### Manhattan distance
The Manhattan distance function computes the distance that would be traveled to get from one data point to the other if a grid-like path is followed. The Manhattan distance between two items is the sum of the differences of their corresponding components.

The formula for this distance between a point X=(X1, X2, etc.) and a point Y=(Y1, Y2, etc.) is:
![manhattan distance](http://www.improvedoutcomes.com/docs/WebSiteDocs/image/diagram_manhattan_distance_metric.gif)


::: tip
How to choose the value of k:
If k is too small, sensitive to noise points
If k is too large, neighborhood may include points from other classes
:::

::: warning
K-NN Classifiers are **lazy learners**
It doesn't build model explicitly
Unlike **eager learners** such as decision tree induction and rule-based systems
:::


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

## Resources
- [Manhattan Distance](http://www.improvedoutcomes.com/docs/WebSiteDocs/Clustering/Clustering_Parameters/Manhattan_Distance_Metric.htm)

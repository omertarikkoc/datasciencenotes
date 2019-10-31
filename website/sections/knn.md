# K Nearest Neighbor Example

```python
# Original example can be found at here: https://scikit-learn.org/stable/modules/neighbors.html

# Import necessary libraries
from sklearn.neighbors import NearestNeighbors
import numpy as np

# Create a data set
X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])

# Create KNN and fit the model
nbrs = NearestNeighbors(n_neighbors=2, algorithm='ball_tree').fit(X)

# Calculate distances and indices
distances, indices = nbrs.kneighbors(X)

print(f"indices: {indices}")
print(f"distances: {distances}")

# It is also possible to efficiently produce a sparse graph showing the connections between neighboring points:
print(f"Graph: \n {nbrs.kneighbors_graph(X).toarray()}")
```

<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/knn?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
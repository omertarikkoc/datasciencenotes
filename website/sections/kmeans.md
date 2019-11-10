# K-Means
K-means algorithm is the simplest partitioning method for clustering analysis and widely used in data science.

A typical clustering analysis approach via **iteratively** Partitioning the training data set to learn a partition of the given data space.

::: tip
In theory, optimal partition achieved by minimizing the sum of the squared to its "representative object" in each cluster.
:::

## What is K?
Given a **K**, we will find a partition of **K Clusters**..

K is the number of the clusters that we want to find.

## Algorithm
1. Find each objects distance from seed points.
2. Compute new seed points as the centroids(mean point) of the clusters of the current partition
3. Repeat from Step 1. If there is no more new assignment STOP! :)

## Metrics
- Adjusted rank index
- Mutual information based scoring
- Homogeneity, completeness and v-measure

## Disadvantages
- Number of clusters (aka K) needs to be known beforehand
- Ordering of the data is important and can cause sensitive to outliers
- Lazy learner
- Requires large amount of memory

## Variants of K-means
- **K-Medoids:** resistance to noise and/or outliers
- **K-Modes:** extension to categorical data clustering
- **CLARA:** extension to deal with large data sets


## Python Example
```python
from sklearn.cluster import KMeans
import numpy as np

# Creating the dataset
X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

# Fit the model
kmeans = KMeans(n_clusters=2, random_state=0).fit(X)

# K-means labels
print(f"k-means labels: {kmeans.labels_}")

# K-means Prediction
kmeans.predict([[0, 0], [12, 3]])
print(f"K-means predict: {kmeans.predict([[0, 0], [12, 3]])}")

# K-means cluster centers
kmeans.cluster_centers_
print(f"K-means cluster centers: {kmeans.cluster_centers_}")
```
<iframe height="800px" width="100%" src="https://repl.it/@omertarik96/k-means?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Resources
**COMING SOON**

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
```
COMING SOON!
```

## Resources
**COMING SOON**

# Quiz 3 Guide

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

### Euclidian distance
d(p,q) = sqrt(sum(p-q)^2)

### Manhattan distance
The Manhattan distance function computes the distance that would be traveled to get from one data point to the other if a grid-like path is followed. The Manhattan distance between two items is the sum of the differences of their corresponding components.

The formula for this distance between a point X=(X1, X2, etc.) and a point Y=(Y1, Y2, etc.) is:


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



# Support Vector Machine (SVM)

## Linear SVM's
The maximum margin linear classifier is the simplest kind of SVM (Actually called LSVM),

## Non-Linear SVM's

The original feature space can always be mapped to some higher-dimensional feature space where the training data set is seperable

::: tip
Overfitting can be controlled by soft margin approach
:::

### Choice of kernel
**Gaussian or polynomial kernel** is default.

**Optimization Criteria**: Hard margin vs soft margin.

### Parameters

C behaves as a regularization parameter in the SVM

::: warning
Low c -> Large margin, misclassification
Large c -> Small margin, high precision
:::

Gamma parameter defines how far the influence of the simple training example reaches

::: warning
High gamma -> Close reach
Low gamma -> far reach
:::

::: tip
Use a for loop to test different values of c and gamma to make sure selecting a good c value
:::

# Supervised Vs Unsupervised Learning

## Supervised
- Done in the context of classification
- Common algorithms in supervised learning include logistic regression, naive bayes, support vector machines, artificial neural networks, and random forests.


## Unsupervised
- To learn the inherent structure of our data without using explicitly-provided labels
- Common algorithms include k-means clustering, principal component analysis, and autoencoders.

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


# DB Scan
- Density-based clustering methods
  - Discover clusters of arbitrary shape

## DBSCAN: Density Based Spatial Clustering of Application with Noise

A cluster is defined as a maximal set of density-connected points.

Discovers clusters of arbitrary shape in spatial databases with noise.

::: tip
Clusters are dense regions in the data space, separated by regions of the lower object density.
:::

## Paramaters

**radius:** distance for the neighborhood of point p

**minimum points:** minimum number of points in the given neighborhood

**core point:** a point that has more than minimum points interior of a cluster

**border point:** a point that has fewer than minimum points within radius but is in the neighborhood of a core point

**noise point:** any point that is not a core point nor a border point

**density-reachable:** friends of friend

**directly-reachable:** direct friend

::: tip
by larger values of radius more points become Density-reachable
by picking smaller values values of radius fewer points become Density-reachable
:::

## Algorithm

arbitrary select a point p.
Retrieve all points density-reachable from point p with radius and minimum points
If point p is a core point, a cluster is formed
If p is a border point, no points are density-reachable from point p and DBSCAN visits the next point of the database.
Continue the process until all of the points have been processed.

## When DB SCAN works well
Resistant to noise.
Can handle clusters of different shapes and sizes.

## When DB SCAN does not work well
Cannot handle varying densities
sensitive to Parameters

## Density Based Clustering Advantages
- Clusters can have arbitrary shape and size
- Number of clusters is determined automatically
- Can separate clusters from surrounding noise
- Can be supported by spatial index structures

## Density Based Clustering Disadvantages
- Input parameters may be difficult to determine
- In some situations vert sensitive to input parameter settings

## DB SCAN versus K-means
- DB scan not tight to specific shape
- DB scan not tight to number of clusters
- DB scan is not affected by outliers

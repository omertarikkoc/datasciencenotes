# DB Scan
- Density-based clustering methods
  - Discover clusters of arbitrary shape

## Types of Density Based methods
- **DBSCAN:**
- **OPTICS:**
- **DENCLUE:**
- **HDBSCAN:**
- **AFFINITY PROPAGATION:**

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

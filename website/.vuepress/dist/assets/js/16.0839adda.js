(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{201:function(e,a,t){"use strict";t.r(a);var s=t(0),i=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"quiz-3-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quiz-3-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Quiz 3 Guide")]),e._v(" "),t("h1",{attrs:{id:"k-nearest-neighbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k-nearest-neighbor","aria-hidden":"true"}},[e._v("#")]),e._v(" K Nearest Neighbor")]),e._v(" "),t("p",[t("strong",[e._v("Basic Idea:")]),e._v(" If it walks like a duck, quacks like a duck, then it is probably a duck!")]),e._v(" "),t("h2",{attrs:{id:"_3-main-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-main-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" 3 Main Requirements")]),e._v(" "),t("ul",[t("li",[e._v("The set of stored records")]),e._v(" "),t("li",[e._v("Distance Metric to compute distance between records")]),e._v(" "),t("li",[e._v("The value of k, the number of nearest neighbors to retrieve")])]),e._v(" "),t("h2",{attrs:{id:"to-classify-an-unknow-record"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-classify-an-unknow-record","aria-hidden":"true"}},[e._v("#")]),e._v(" To classify an unknow record:")]),e._v(" "),t("ul",[t("li",[e._v("Compute distance to other training records")]),e._v(" "),t("li",[e._v("Identify k nearest neighbors")]),e._v(" "),t("li",[e._v("By taking majority, choosing the label")])]),e._v(" "),t("h2",{attrs:{id:"types-of-distances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-distances","aria-hidden":"true"}},[e._v("#")]),e._v(" Types of Distances")]),e._v(" "),t("h3",{attrs:{id:"euclidian-distance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#euclidian-distance","aria-hidden":"true"}},[e._v("#")]),e._v(" Euclidian distance")]),e._v(" "),t("p",[e._v("d(p,q) = sqrt(sum(p-q)^2)")]),e._v(" "),t("h3",{attrs:{id:"manhattan-distance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manhattan-distance","aria-hidden":"true"}},[e._v("#")]),e._v(" Manhattan distance")]),e._v(" "),t("p",[e._v("The Manhattan distance function computes the distance that would be traveled to get from one data point to the other if a grid-like path is followed. The Manhattan distance between two items is the sum of the differences of their corresponding components.")]),e._v(" "),t("p",[e._v("The formula for this distance between a point X=(X1, X2, etc.) and a point Y=(Y1, Y2, etc.) is:")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("How to choose the value of k:\nIf k is too small, sensitive to noise points\nIf k is too large, neighborhood may include points from other classes")])]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("K-NN Classifiers are "),t("strong",[e._v("lazy learners")]),e._v("\nIt doesn't build model explicitly\nUnlike "),t("strong",[e._v("eager learners")]),e._v(" such as decision tree induction and rule-based systems")])]),e._v(" "),t("h1",{attrs:{id:"support-vector-machine-svm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-vector-machine-svm","aria-hidden":"true"}},[e._v("#")]),e._v(" Support Vector Machine (SVM)")]),e._v(" "),t("h2",{attrs:{id:"linear-svm-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-svm-s","aria-hidden":"true"}},[e._v("#")]),e._v(" Linear SVM's")]),e._v(" "),t("p",[e._v("The maximum margin linear classifier is the simplest kind of SVM (Actually called LSVM),")]),e._v(" "),t("h2",{attrs:{id:"non-linear-svm-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#non-linear-svm-s","aria-hidden":"true"}},[e._v("#")]),e._v(" Non-Linear SVM's")]),e._v(" "),t("p",[e._v("The original feature space can always be mapped to some higher-dimensional feature space where the training data set is seperable")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Overfitting can be controlled by soft margin approach")])]),e._v(" "),t("h3",{attrs:{id:"choice-of-kernel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choice-of-kernel","aria-hidden":"true"}},[e._v("#")]),e._v(" Choice of kernel")]),e._v(" "),t("p",[t("strong",[e._v("Gaussian or polynomial kernel")]),e._v(" is default.")]),e._v(" "),t("p",[t("strong",[e._v("Optimization Criteria")]),e._v(": Hard margin vs soft margin.")]),e._v(" "),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("p",[e._v("C behaves as a regularization parameter in the SVM")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("Low c -> Large margin, misclassification\nLarge c -> Small margin, high precision")])]),e._v(" "),t("p",[e._v("Gamma parameter defines how far the influence of the simple training example reaches")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[e._v("High gamma -> Close reach\nLow gamma -> far reach")])]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Use a for loop to test different values of c and gamma to make sure selecting a good c value")])]),e._v(" "),t("h1",{attrs:{id:"supervised-vs-unsupervised-learning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supervised-vs-unsupervised-learning","aria-hidden":"true"}},[e._v("#")]),e._v(" Supervised Vs Unsupervised Learning")]),e._v(" "),t("h2",{attrs:{id:"supervised"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supervised","aria-hidden":"true"}},[e._v("#")]),e._v(" Supervised")]),e._v(" "),t("ul",[t("li",[e._v("Done in the context of classification")]),e._v(" "),t("li",[e._v("Common algorithms in supervised learning include logistic regression, naive bayes, support vector machines, artificial neural networks, and random forests.")])]),e._v(" "),t("h2",{attrs:{id:"unsupervised"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsupervised","aria-hidden":"true"}},[e._v("#")]),e._v(" Unsupervised")]),e._v(" "),t("ul",[t("li",[e._v("To learn the inherent structure of our data without using explicitly-provided labels")]),e._v(" "),t("li",[e._v("Common algorithms include k-means clustering, principal component analysis, and autoencoders.")])]),e._v(" "),t("h1",{attrs:{id:"k-means"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k-means","aria-hidden":"true"}},[e._v("#")]),e._v(" K-Means")]),e._v(" "),t("p",[e._v("K-means algorithm is the simplest partitioning method for clustering analysis and widely used in data science.")]),e._v(" "),t("p",[e._v("A typical clustering analysis approach via "),t("strong",[e._v("iteratively")]),e._v(" Partitioning the training data set to learn a partition of the given data space.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v('In theory, optimal partition achieved by minimizing the sum of the squared to its "representative object" in each cluster.')])]),e._v(" "),t("h2",{attrs:{id:"what-is-k"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-k","aria-hidden":"true"}},[e._v("#")]),e._v(" What is K?")]),e._v(" "),t("p",[e._v("Given a "),t("strong",[e._v("K")]),e._v(", we will find a partition of "),t("strong",[e._v("K Clusters")]),e._v("..")]),e._v(" "),t("p",[e._v("K is the number of the clusters that we want to find.")]),e._v(" "),t("h2",{attrs:{id:"algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algorithm","aria-hidden":"true"}},[e._v("#")]),e._v(" Algorithm")]),e._v(" "),t("ol",[t("li",[e._v("Find each objects distance from seed points.")]),e._v(" "),t("li",[e._v("Compute new seed points as the centroids(mean point) of the clusters of the current partition")]),e._v(" "),t("li",[e._v("Repeat from Step 1. If there is no more new assignment STOP! 😃")])]),e._v(" "),t("h2",{attrs:{id:"metrics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),t("ul",[t("li",[e._v("Adjusted rank index")]),e._v(" "),t("li",[e._v("Mutual information based scoring")]),e._v(" "),t("li",[e._v("Homogeneity, completeness and v-measure")])]),e._v(" "),t("h2",{attrs:{id:"disadvantages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disadvantages","aria-hidden":"true"}},[e._v("#")]),e._v(" Disadvantages")]),e._v(" "),t("ul",[t("li",[e._v("Number of clusters (aka K) needs to be known beforehand")]),e._v(" "),t("li",[e._v("Ordering of the data is important and can cause sensitive to outliers")]),e._v(" "),t("li",[e._v("Lazy learner")]),e._v(" "),t("li",[e._v("Requires large amount of memory")])]),e._v(" "),t("h2",{attrs:{id:"variants-of-k-means"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variants-of-k-means","aria-hidden":"true"}},[e._v("#")]),e._v(" Variants of K-means")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("K-Medoids:")]),e._v(" resistance to noise and/or outliers")]),e._v(" "),t("li",[t("strong",[e._v("K-Modes:")]),e._v(" extension to categorical data clustering")]),e._v(" "),t("li",[t("strong",[e._v("CLARA:")]),e._v(" extension to deal with large data sets")])]),e._v(" "),t("h1",{attrs:{id:"db-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-scan","aria-hidden":"true"}},[e._v("#")]),e._v(" DB Scan")]),e._v(" "),t("ul",[t("li",[e._v("Density-based clustering methods\n"),t("ul",[t("li",[e._v("Discover clusters of arbitrary shape")])])])]),e._v(" "),t("h2",{attrs:{id:"dbscan-density-based-spatial-clustering-of-application-with-noise"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbscan-density-based-spatial-clustering-of-application-with-noise","aria-hidden":"true"}},[e._v("#")]),e._v(" DBSCAN: Density Based Spatial Clustering of Application with Noise")]),e._v(" "),t("p",[e._v("A cluster is defined as a maximal set of density-connected points.")]),e._v(" "),t("p",[e._v("Discovers clusters of arbitrary shape in spatial databases with noise.")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("Clusters are dense regions in the data space, separated by regions of the lower object density.")])]),e._v(" "),t("h2",{attrs:{id:"paramaters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paramaters","aria-hidden":"true"}},[e._v("#")]),e._v(" Paramaters")]),e._v(" "),t("p",[t("strong",[e._v("radius:")]),e._v(" distance for the neighborhood of point p")]),e._v(" "),t("p",[t("strong",[e._v("minimum points:")]),e._v(" minimum number of points in the given neighborhood")]),e._v(" "),t("p",[t("strong",[e._v("core point:")]),e._v(" a point that has more than minimum points interior of a cluster")]),e._v(" "),t("p",[t("strong",[e._v("border point:")]),e._v(" a point that has fewer than minimum points within radius but is in the neighborhood of a core point")]),e._v(" "),t("p",[t("strong",[e._v("noise point:")]),e._v(" any point that is not a core point nor a border point")]),e._v(" "),t("p",[t("strong",[e._v("density-reachable:")]),e._v(" friends of friend")]),e._v(" "),t("p",[t("strong",[e._v("directly-reachable:")]),e._v(" direct friend")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[e._v("by larger values of radius more points become Density-reachable\nby picking smaller values values of radius fewer points become Density-reachable")])]),e._v(" "),t("h2",{attrs:{id:"algorithm-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Algorithm")]),e._v(" "),t("p",[e._v("arbitrary select a point p.\nRetrieve all points density-reachable from point p with radius and minimum points\nIf point p is a core point, a cluster is formed\nIf p is a border point, no points are density-reachable from point p and DBSCAN visits the next point of the database.\nContinue the process until all of the points have been processed.")]),e._v(" "),t("h2",{attrs:{id:"when-db-scan-works-well"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-db-scan-works-well","aria-hidden":"true"}},[e._v("#")]),e._v(" When DB SCAN works well")]),e._v(" "),t("p",[e._v("Resistant to noise.\nCan handle clusters of different shapes and sizes.")]),e._v(" "),t("h2",{attrs:{id:"when-db-scan-does-not-work-well"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-db-scan-does-not-work-well","aria-hidden":"true"}},[e._v("#")]),e._v(" When DB SCAN does not work well")]),e._v(" "),t("p",[e._v("Cannot handle varying densities\nsensitive to Parameters")]),e._v(" "),t("h2",{attrs:{id:"density-based-clustering-advantages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#density-based-clustering-advantages","aria-hidden":"true"}},[e._v("#")]),e._v(" Density Based Clustering Advantages")]),e._v(" "),t("ul",[t("li",[e._v("Clusters can have arbitrary shape and size")]),e._v(" "),t("li",[e._v("Number of clusters is determined automatically")]),e._v(" "),t("li",[e._v("Can separate clusters from surrounding noise")]),e._v(" "),t("li",[e._v("Can be supported by spatial index structures")])]),e._v(" "),t("h2",{attrs:{id:"density-based-clustering-disadvantages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#density-based-clustering-disadvantages","aria-hidden":"true"}},[e._v("#")]),e._v(" Density Based Clustering Disadvantages")]),e._v(" "),t("ul",[t("li",[e._v("Input parameters may be difficult to determine")]),e._v(" "),t("li",[e._v("In some situations vert sensitive to input parameter settings")])]),e._v(" "),t("h2",{attrs:{id:"db-scan-versus-k-means"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-scan-versus-k-means","aria-hidden":"true"}},[e._v("#")]),e._v(" DB SCAN versus K-means")]),e._v(" "),t("ul",[t("li",[e._v("DB scan not tight to specific shape")]),e._v(" "),t("li",[e._v("DB scan not tight to number of clusters")]),e._v(" "),t("li",[e._v("DB scan is not affected by outliers")])])])},[],!1,null,null,null);a.default=i.exports}}]);
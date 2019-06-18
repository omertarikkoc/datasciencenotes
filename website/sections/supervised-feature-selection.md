# Dimensionality Reduction in Supervised Learning: Feature Selection

We should select the most and least important feature.

::: tip
A process that chooses an optimal subset of features according to a objective function.
:::

## Objectives
- To reduce Dimensionality and remove noise
- To improve mining performance

## Feature Selection Methods
- Embedded
- Filter
- Wrapper

![featureselectionmethods](../images/supervisedfeatureselectionmethods.png)

### Embedded
::: tip
a machine learning algorithm that returns a model using a limited number of features
:::
They are a part of induction algorithms

### Filter

They are separate processes from the induction algorithms

### Wrapper

They are also separate processes from induction algorithm but they use induction algorithm as a subroutine

## Regularization Techniques
Penalizing the magnitude of coefficients of features along with minimizing the error between predicted and actual observations, in case of large number of features

::: tip
Example: assign zero weight for features that are not very important makes a large difference in the target variable
:::

### Why Use Regularization?
- To reduce model complexity
- To avoid overfitting to the particular training data
- Upgrade the predictability of the model
- Finding the optimal weights

### Ridge Regression


### Lasso Regression

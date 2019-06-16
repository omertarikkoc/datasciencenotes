---
prev: ./linear-regression
next: ./logistic-regression
---
# Logistic Regression

- Linear regression based on continous values
- Logistic regression based on categorical
- Both of them are supervised.
- Logistic is a curve

::: warning
Logistic Regression is used when the dependent variable(target) is categorical.
:::

## Estimated Logistic Regression

Value of the `p=ln(p/1-p)`

We will need a threshold.


the logistic model (or logit model) is a widely used statistical model that in its basic form uses a logistic function to model a binary dependent variable.

logistic model = `log(p(y=1)/1-p(y=1))`


## Logistic Cost Function
Margin of the error


## Maximum Likehood
How can be measure the goodness of the fit of the logistic regression -> cost function

> In order to map predicted values to probabilities, we use the sigmoid function. The function maps any real value into another value between 0 and 1. In machine learning, we use sigmoid to map predictions to probabilities.
[Source](https://ml-cheatsheet.readthedocs.io/en/latest/logistic_regression.html)

## Simple Example
> E.g. When we have to predict if a student passes or fails in an exam when the number of hours spent studying is given as a feature, the response variable has two values, pass and fail.
This type of a problem is referred to as **Binomial Logistic Regression,** where the response variable has two values 0 and 1 or pass and fail or true and false. Multinomial Logistic Regression deals with situations where the response variable can have three or more possible values. [Source](https://medium.com/data-science-group-iitr/logistic-regression-simplified-9b4efe801389)


## Linear Regression Vs. Logistic Regression
Linear regression gives you a continuous output, but logistic regression provides a constant output. An example of the continuous output is house price and stock price. Example's of the discrete output is predicting whether a patient has cancer or not, predicting whether the customer will churn. Linear regression is estimated using Ordinary Least Squares (OLS) while logistic regression is estimated using Maximum Likelihood Estimation (MLE) approach.

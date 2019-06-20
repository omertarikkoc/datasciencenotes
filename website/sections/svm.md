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

## Python example
```
import matplotlib.pyplot as plt
from sklearn import datasets, svm, metrics

iris = datasets.load_iris()
digits = dataset.load_digits()

# images attribute of the dataset 8x8
images_and_labels = list(zip(digits.images, digits.target))

for index, (image, label) in enumerate(images_and_labels[:4]):
  plt.subplot(2, 4, index+1)
  plt.axis('off')
  plt.imshow(image, cmap=plt.cm.gray_r, interpolation='nearest')
  plt.title("Training %i" % label)




```

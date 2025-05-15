import matplotlib.pyplot as plt
import numpy as np #파이선에서 배열을 사용하고 싶을때 넘파이 사용

x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])

plt.scatter(x, y)
plt.show()
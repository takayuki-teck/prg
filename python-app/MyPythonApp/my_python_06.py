import numpy as np
import cv2

#1. 画像入力
#2. グレースケール化(グレースケールで入力)
img = cv2.imread('./jpg/test3.jpg', cv2.IMREAD_GRAYSCALE)

#3. 膨張処理
neiborhood = np.ones((5, 5), dtype=np.uint8)
dilated = cv2.dilate(img, neiborhood, iterations=1)

#4. ２と３の差分取得
diff = cv2.absdiff(dilated, img)

#5. 白黒反転
result = 255 - diff

#画像出力
cv2.imwrite('./jpg/output.jpg', result)
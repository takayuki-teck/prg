import cv2

filename = "./jpg/lena.jpg"
gry = cv2.imread(filename, 0)
cv2.imwrite('./jpg/gray.jpg', gry)
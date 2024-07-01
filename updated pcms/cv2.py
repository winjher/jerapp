import cv2

# Read the image
img = cv2.imread('Clippers Butterfly SYLIVIA6.jpg')

# Display the image
cv2.imshow('Image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()

# import cv2 as cv
# img = cv.imread("Predators/Lizards.jpg")

# cv.imshow('Lizards', img)
# def rescaleFrame (frame, scale = 0.75):
#       width = int(frame.shape[1] * scale)
#       height = int(frame.shape[0] * scale)
#       dimensions = (width,height)

#       return cv.resize(frame, dimensions, interpolation = cv.INTER_AREA)

# cv.waitkey(0)
# cv2.destroyAllWindows()

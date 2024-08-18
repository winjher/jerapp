import cv2

# Read the image
img = cv2.imread('C:/Users/jerwin/Documents/Butterfly/Butterfly-Great Eggfly/Great Eggfly BOLINA26.jpg')
# Load an image from file


# Check if the image was loaded successfully
if img is not None:
    # Process the image (e.g., display, manipulate, analyze)
    # ...
    print("Image loaded successfully!")
else:
    print("Error loading the image. Check the file path or format.")
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

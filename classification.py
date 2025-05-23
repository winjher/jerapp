import numpy as np
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator

tf.__version__

train_datagen = ImageDataGenerator(
        rescale=1./255,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True)
training_set = train_datagen.flow_from_directory(
        'training_set',
        target_size=(64, 64),
        batch_size=32,
        class_mode='categorical')

test_datagen = ImageDataGenerator(rescale=1./255)
test_set = test_datagen.flow_from_directory(
        'test_set',
        target_size=(64, 64),
        batch_size=32,
        class_mode='categorical')

cnn = tf.keras.models.Sequential()
cnn.add(tf.keras.layers.Conv2D(filters=64 , kernel_size=3 , activation='relu' , input_shape=[64,64,3]))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2,strides=2))

cnn.add(tf.keras.layers.Conv2D(filters=64 , kernel_size=3 , activation='relu' ))
cnn.add(tf.keras.layers.MaxPool2D(pool_size=2 , strides=2))

cnn.add(tf.keras.layers.Dropout(0.5))

cnn.add(tf.keras.layers.Flatten())

cnn.add(tf.keras.layers.Dense(units=128, activation='relu'))

cnn.add(tf.keras.layers.Dense(units=5 , activation='softmax'))

cnn.compile(optimizer = 'rmsprop' , loss = 'categorical_crossentropy' , metrics = ['accuracy'])

cnn.fit(x = training_set , validation_data = test_set , epochs = 30)

from keras.preprocessing import image
test_image = image.load_img('/content/drive/MyDrive/butterflyml/Butterfly/Sample/1_Common mormon.jpg',target_size=(64,64))
test_image = image.img_to_array(test_image)
test_image = np.expand_dims(test_image,axis=0)
result = cnn.predict(test_image)
training_set.class_indices

if result[0][0]==1:
    print('Butterfly-Clippers')
elif result[0][1]==1:
    print('Butterfly-Common Jay')
elif result[0][2]==1:
    print('Butterfly-Common Lime')
elif result[0][3]==1:
    print('Butterfly-Common Mime')
elif result[0][4]==1:
    print("Butterfly-Common Mormon")
elif result[0][5]==1:
    print("Butterfly-Emerald Swallowtail")
elif result[0][6]==1:
    print("Butterfly-Golden Birdwing")
elif result[0][7]==1:
    print("Butterfly-Gray Glassy Tiger")
elif result[0][8]==1:
    print("Butterfly-Great Eggfly")
elif result[0][9]==1:
    print("Butterfly-Great Yellow Mormon")
elif result[0][10]==1:
    print("Butterfly-Paper Kite")
elif result[0][11]==1:
    print("Butterfly-Pink Rose")
elif result[0][12]==1:
    print("Butterfly-Plain Tiger")
elif result[0][13]==1:
    print("Butterfly-Red Lacewing")
elif result[0][14]==1:
    print("Butterfly-Tailed Jay")
elif result[0][15]==1:
    print("Moth-Atlas")
elif result[0][16]==1:
    print("Moth-Giant Silk ")
elif result[0][17]==1:
    print("None try again!!")


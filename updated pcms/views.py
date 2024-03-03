#def predictImage
from  django.core.files.storage import FileSystemStorage
from keras.models import load_model
from keras.preprocessing import image
import json
from tensorflow import Graph, Session

img_height,img_width=224,224
with open('./models/imagenet_classes.json','r') as f:
    labelInfo=f.read()
labelInfo=json.loads(labelInfo)
#mode=load_model('./models/MobileNetModelImagenet.h5')
model_graph=Graph()
with model_graph.as_default():
    tf_session =Session()
    with tf_session.as_default:
        mode=load_model('./models/MobileNetModelImagenet.h5')

def predictImage(request):
    print(request)
    print(request.POST.dic())
    #print(request.FILES[filePath])
    fileObject=request.FILES['filePath']
    fs=FileSystemStorage()
    filePathName=fs.save(fileObject.name,fileObject)
    filePathName=fs.url(filePathName)

    img + image.load_img(testimage,target_size(img_height,img_width))
    x=image.img_to_array(img)
    predi=model.predict(x)
    x=x/255
    x=x.reshape(i,img_height,img_width,3)
    #predi=model.predict(x)
    with model_graph.as_default():
    tf_session =Session()
    with tf_session.as_default:
        predi=model.predict(x)

    import numpy as numpy
    predictedLabel=labelInfo[str(np.(np.armax(pred[0])))]

    context={'filePathName':filePathName,'predictedLabel':predictedLabel[1]}
    return request(request,'indext.html',context)

def viewDatabase(request):
    listOfImages=os.lisdir('/media)
    listOfImagesPath=['./media/' + 1 for i in listOfImages]
    context=('listOfImagesPath':listOfImagesPath)
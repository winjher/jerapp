# jerapp

IMAGE CLASSIFICATION OF BUTTERFLIES STAGES, DISEASES, AND DEFECTS IN YIELD PRODUCTION IN MARINDUQUE : A PROPER CARE CONSERVATION MANAGEMENT SYSTEM USING CNN
 
  
A Dissertation
Presented to the Faculty of Graduate School University of the East, Manila

  
In Partial Fulfillment of the Requirements for the Degree of  Doctor of Information Technology 



JERWIN M. MONTELLANO 
November 05, 2023


ABSTRACT
Butterfly classification of Lepidoptera images is of great importance for the next generation to adapt digital smart classification of the species, defects, and larval diseases treatment. The automation of Lepidoptera by image classification is of great necessity because it can provide a better classification in the case of an entomologist and experienced breeder in Marinduque. Convolutional neural networks (CNN) were introduced to improve the agricultural and butterfly farming by eliminating the need to manually select which features to use to classify images on the island. Training CNN from scratch requires very large annotated datasets that are scarce in the field of science especially in entomology. Transfer learning of CNN weights from another large dataset can help overcome the problem of image scarcity of Lepidoptera. Transfer learning consists of fine-tuning CNN layers to suit the new dataset on how deeply to fine-tune the network and the difference in the generalization that will make. In this paper, all of the experiments were done on Lepidoptera datasets using three state-of-the-art CNNs, Classification, Object Detection and Image Segmentation. Results show that fine-tuning the entire network is not always the best option; especially for shallow networks, alternatively fine-tuning the top blocks can save both time and computational power and produce more robust classifiers. The CNNs learned about natural images, showing strong performance and encountering the accuracy of human expert systems. Finally, these statements conclude that CNNs can be improved to control the essential architecture of natural images.

Keywords: convolutional neural network; image classification; transfer learning; butterflies images; deep learning; fine-tuning

Chapter 1
THE RESEARCH PROBLEM AND ITS BACKGROUND
This chapter introduces the context of the study, the statement of the problem, the theoretical and conceptual framework, the synthesis, the significance of the study, the scope, and delimitation of the study, and the operational definition of terms.

INTRODUCTION
Stages of butterfly, disease, and defect detection typically involve using image processing and computer vision techniques to analyze images of the butterflies. These techniques can be used to identify defects such as deformities, malformations, and abnormalities that may affect the development of the butterfly.
One approach to detecting defects in butterfly larvae and pupae involves capturing high-resolution images of the specimens and using computer vision algorithms to analyze the images. This can involve techniques such as segmentation, feature extraction, and classification to identify regions of interest and classify defects based on their colors, shape, size, and other characteristics.

Another approach involves using CNN algorithms to train models on large datasets of images of healthy and pupae and healthy and disease larvae. The models can then be used to automatically classify new specimens based on their visual characteristics and detect any diseases and defects present.
These techniques can be useful for a variety of applications, such as breeding and conservation efforts, where it is important to ensure that the larvae and pupae are healthy and free from defects that may affect their survival or ability to develop into healthy adult butterflies.

A lot of people may not be aware that butterfly production contributes to the economy of the country. There were export demands from abroad even during the time of the pandemic. The province of Marinduque has been dedicated to the farming, production, propagation, and exportation of live and preserved species of butterflies. And it helps breeders and/or farmers to benefit by pollinating their crops through these different agents of pollination. Some species are pests because in their larval stages they can damage domestic crops or trees.
As a farmer its task is to culture and maintain the indicator such as food plant flowering plants, and host plant to sustain the butterfly production for propagation. To continue providing and planting native food plants in the area of the butterflies breeders. Its food should be freshly harvested and no predators attached to the leaves. Butterfly breeders in Marinduque planted the food plants spread all over towns in Gasan, Boac, Buenavista, Torrijos, Mogpog, and Sta. Cruz. 
Butterfly and moth culture has been practiced in Marinduque, Philippines for livelihood purposes since the late 1970's. Among the breeders' products are dried butterflies, live butterflies, and pupae for export purposes. Paper and glass decorations in different sizes, bottled crafts, and clocks were modified and wrought for educational purposes. Butterfly farming even helps farmers' children financially with foods,  clothing, schooling and other basic necessities.

Many butterflies enthusiasts are enticed to learn about the aesthetic ecosystem of different kinds of butterflies (Ibrahim,  2019), (Yasmin et., al, 2023). Butterflies are certainly one of the most appealing creatures in nature to join a social media group to upload images, specifically butterflies description, scientific names/ID, etc. for the sake of non-breeders but some of them without any knowledge of the butterfly details and  experienced difficulty coping with that demand. Through the years, the researcher realized and found that butterfly farming is more important for butterfly enthusiasts, collectors and hobbyists to discover. In the late months of the year 2022, the LGU in Marinduque completely pursued butterfly production to boost the economy. And this is the time to promote this project for economic purposes to attract tourists.  The TESDA module was made originally for butterfly production to help and train the new butterfly breeders held at Cawit, Boac, Marinduque. Eventually, the researcher is an experienced breeder of butterflies in the late 1990s to support the financial needs in school. That is why the researcher chose a dataset of interest in butterflies for solving the problem of image scarcity to improve yield production and to provide a classification of stages of butterflies, disease, and defects for proper care management for the breeders. The dataset is approximately 18000 images if possible for only 18 types of inclusively cultured butterflies species in Marinduque. The stages from eggs,  larvae,  and pupae are set separately from folders of datasets. And for care management the datasets of health, diseases,  and defects were different folders. Breeders strive to manage the topography of the location properly in order to have successful breeding like they actually do. The researcher made a research study in the butterfly industry to accelerate an automated system for archiving classes of butterflies, stages and found its prevention of larval diseases to find its treatment through machine learning. Breeders in the butterflies culture industry face a lot of pupae defects in yield production and cause economic loss every year because of various diseases during larval stages. Breeders encounter difficulties in determining factors that affect the production and collection of varieties of diseases, and defects. Moreover, the pupae quality would be a choice to perfectly choose a good quality of pupa through computer vision. 

Humans are already interconnected via smartphones and gadgets, security devices, and a combination of cameras and sensors in scope and diversity in manufacturing (Marks, 2023). Digital tools are designed to build scientific capabilities spanning agriculture, butterfly farming, and phenology. CNN algorithm is the best way to connect for processing, and analyzing visual images. According to the research of (Mudongo, 2021), Globally computer vision has been a topic of increasing interest and study due to its wide use in facial recognition systems, surveillance networks, virtual reality, agriculture crops and other similar fields.

Convolutional neural networks are importantly used to develop an efficient, and convenient way to keep preserved pupae and cocoons in the emerging cage by proper monitoring. This will give optimum results, allowing visual monitoring at any time and reducing the risk of severe desiccation and infection.
The manual grading and sorting is processed by quality management based on color, size, shape, and other physical characteristics to detect defects. The postures are related to the head, back, head, and belly of the pupae which may classify them as healthy. One area of quality control where computer vision features prominently is defect detection for a buyer in house-to-house marketing. Optical sorting could be used for image processing techniques like anomaly detection to incorporate quality control in butterflies' pupae production. Moreover, preparation for export to select pupae of the most suitable quality via handheld devices such as smartphones and tablets was used for systematic checking. The device can detect common diseases (viruses and bacteria) via computer vision or cutting-edge real-time assessment for prevention in order to provide larval disease treatment. Purchasers want to identify defective parts and products as early in their journey abroad as possible. In some applications, where the possibilities on varieties of defects are known, CNN algorithms state of the art like image segmentation, object detection and classification are used to analyze and interpret images.

Statement of the Problem

1.What are the features of the system that will satisfy the following:
Butterfly identification
Stages of Butterfly
Diseases and
Defects 

2.When identifying its features, butterfly stages, disease, and defects, how does the system use the CNN algorithm?

3.In what way does the system function as a proper care management system utilizing its features, butterfly stages, diseases, and defects?

4.What is the scalable performance of the ISO implementation in terms of
Systems performance
User-friendliness
Usability
Maintainability

Figure 1. Conceptual Framework 



Figure 1. Illustrates the Conceptual framework of the proposed system for proper care management system  of butterfly farming to achieve certain goals. The system is enabled to detect objects of their preferences and is highly acceptable for production in butterfly culture, drastically increasing the efficiency of image classification. Conceptual framework of the proposed system for proper care management system  of butterfly farming to achieve certain goals in CovNet. The main functions for the research phase in the pipeline such as process data, training the model, creating a train test suite, and creating a model evaluation suite.

The proposed system for proper care management of butterfly farming using CovNet could have the following conceptual framework: 
The researcher creates a machine-learning model for the system. Convolutional Neural Networks are composed of layers of interconnected nodes or neurons. It has biases and weights in neurons to understand images at a pixel level, which serves as the foundation of this field. The information moves from the input layer to the convolution layer to the pooling and fully connected layer. Hidden layers process feature extraction and send the final output max pooling to the output layer. 

Model Package: A model package that is learned from programs such as image annotation techniques, CNN  Transfer Learning, and Fine Tuning. Creating a Machine Learning Model is a complete detailed task that contains multiple steps (such as Data Pre-processing, Exploratory Data Analysis (EDA), Feature Engineering, Model Development, Model Validation, and Tuning Hyperparameters). Those steps since we are much more interested in using this model for powering our web-based application.

Data Collection and Monitoring: First, the researcher already had common knowledge about butterflies production and collected images at every stage from eggs,  larvae,  pupae, and adult butterflies and interviewed the breeders and purchasers in the butterfly house. The images were taken at the butterfly site of the breeder's farm. And prepared the images for annotation and cleaning the data. 

Processed Data: The researcher prepared a dataset for proper labeling and annotations in preparation for creating a machine-learning model. Image annotation is used for labeling each data image for classification in the chosen domain. 

Image Annotation: The researcher starts with manual image annotation using a description of the labeled  image classes and attributes model such as Eggs, Caterpillars/Larvae, Pupae,  Butterfly, defects, diseases and health.

Training Dataset: The data sample used to provide an evaluation of a final model fit on the training dataset. 80% of the images are used for training. The training and testing data contains subfolders of each class. There are approximately 50 images categorized in each subfolder for training data used for the project as a sample. 

Test Dataset: The sample of data used to test the model. 10% of images are used for hyperparameter tuning and/or to decide when to stop training. The model will be saved and trained to learn as sample images called pre-trained images and output the model of the image classes with the label of confidence.

Validation Dataset: The data sample is used to provide an evaluation of a model fit on the training dataset while tuning model hyperparameters. 10% of images are used for evaluating the model. These images are not used in training.

Predict: the model of the image class and display the result in multiple classes to the front end of the web browser. The care management model will display a report on treatment for various defects and diseases in a pdf file. 

Analytics and Reporting: The dashboard shows the analytics and reporting of the proper care management system. It also shows the plans and treatments for the defects and diseases of the butterfly stages. 

Web Hosting: Heroku is the primary host used by the researcher for deployment of the website. One of the requirements of the Django web framework is to prepare the URLs and create a model, create views for the front-end, and template for the system. It uses the model, view, and template for the HTML of the project.  The Django framework used as the backend is to achieve the goal and build templates for machine-learning applications for image classification. Basically, butterfly API was used for creating, deleting, or updating a transform, or starting a machine learning task run. 

Feedback. And finally, the user will have the opportunity to try to evaluate the system based on the criteria of the standard performance of the implementation of the system. (see attachments on the page ANNEX A)


OBJECTIVES OF THE STUDY

The objective of the study benefits, applications, challenges, and trade-offs are discussed.

This study's focus on both the agricultural side of butterfly farming for conservation of the wildlife, and on the application of IT to boost butterfly production with the help of algorithms to improve proper care management. It may have useful implications to avoid and minimize diseases for proper monitoring,  management and intervention purposes. It can be applied to predict model retraining for a better machine-learning experience. 

The aim is to develop a startup Progressive Web Application system for the project entitled "Image Classifications of Butterflies Stages, Diseases, and Defects in Yield Production in Marinduque:  A Proper Care Management System using CNN " in this lucrative business that can predict such diseases live production and defects for quality assurance. The proper care management systems can classify diseases that can handle larval disease treatment. Moreover, proper care management scheduling of tasks to be well managed by the butterfly farmer or manager for decision support and notification. Butterfly identification or image classification is a highly error-prone task for the entomologist to annotate billions of images because it is time-consuming for such huge data. It requires proper labeling to annotate the images. It requires evaluation, and training of the model for high efficiency image classification and extract segments though it has the complicated shape and colors of butterflies. The system should:

1.Provide features of image classifications to identify butterflies, butterfly stages, defects, diseases and healthy adapting it by the beneficiaries.

2.Provide the model features to identify images using the CNN algorithm of the butterfly stages,  defects, diseases and health.

3.Provide specific knowledge instructions and decision support that will assess butterfly stages, diseases, defects and health to improve proper care management tasks and increase income of the breeders.

4.Provide descriptive research analysis for the users that will predict the image in computer vision using the CNN algorithm. 

SCOPE AND DELIMITATION OF THE STUDY

The study developed a progressive web-based application that will provide a set of images that can be classified into categories of stages of butterflies, diseases, and defects, and health and proper care management system. The prototype was designed for the breeders, nonbreeders and entomologists for archiving and labeling image data in a proper care management system. The system includes the following for binary, cross-entropy multi-class, and multi-label image classification of objects: a) utilized opencv-python or ml5 library for computer vision, the famous machine learning libraries of CNN algorithm also for multi-class because it output more than two classes b) also, depicts defects detection provided a quality check of purchase orders and for the diseases detection for treatment c) decision support for the proper care intervention for  the expert inputs. It used datasets of 18 types of butterfly cultures and their classifications of diseases and defects. There are approximately 50 images categorized in each subfolder for use as training and validation material for the project. The training and validation data contain subfolders for each class (ANNEX  II). 
The system used the features of analyzing and interpreting the image as the following: the breeders Popular name, English name, and Scientific name of the butterflies cultured in Marinduque. Moreover the stages of butterflies, defects, diseases,  and proper care management will have proper treatment. The study of parasites involves understanding their life cycles, morphology, behavior, and interactions with their hosts, as well as developing methods for their control and prevention. 

Delimitations
This could not involve using sensors and cameras to track butterfly movements and environmental conditions, as well as collecting data on butterfly breeding and release programs. The system will not collect data on butterfly environmental conditions, such as temperature, humidity, and light levels. The system will not detect the predators staying from leaves and other elements like aphids, ants juices, wide spreads on the leaves, etc. that cause their sickness when eaten. All the predators in both houses and sleeving boxes are not monitored and notified by the system. Usually, activities of the larvae like leaves munching,  crawling,  hibernating to change the skin for new instars,  and pupae to hang tighten become a pupa are not monitored.  The system would not use the data collected to generate insights and reports on butterfly populations,  identifying trends and patterns in butterfly behavior. The system will not use cameras and sensors to monitor butterfly populations in real-time. Moreover, no  measurement will display the size of the  Eggs, Caterpillars/Larvae, Pupae, and Adults. Moreover, the Butterfly Color description, Local name, English name, Scientific subspecies name, Discovered by, Year Discovered, Family, Date of flight, and Location will be included in further studies. 

SIGNIFICANCE OF THE STUDY

A study was conducted by the researcher on the availability of butterfly-cultured species that provides proper care management challenges based on the topography of the area of the breeders and sub-breeders. A primary aim of this system is to make measurable improvements to help manage operations and sustainability ecosystems. 

Furthermore, it is essential for the breeders to release their 10 % of the butterflies in the wild for conservation of the species.  It equips digital systems with the ability to understand and interpret visual data.
It equips computers with the ability to process, interpret, analyze, and understand visual data.(AYADATA) 

It is broadly modeled on biological visual systems
Users who will benefit from the system are the following:
Breeders. Monitoring butterfly production in the province is the goal of improving farmer decision-making. To change the life of the people by expanding, sustaining, maintaining, and enabling innovation in Machine Learning. To use the system for good quality control to assess images in excellent ways, while always adapting to the latest updates using Computer vision 
Purchasers. The purchasers use the system to check pupae of good quality and assurance of fresher pupae for export for an early detection .

Hobbyists and Enthusiasts. By learning automatically and improving themselves from experience, the system does not require explicit programming or human intervention. The system classified them to be educated in butterfly farming ability. 

Entomologist.  It will properly guide them as a reference in the field of specializations using real-time applications for object detection and image classification. Subject opinions from experts input to the system. 

Researchers. It will help the researchers to improve their skills in image and video analysis through computer vision. 

Operational Definition of Terms

Biodemography is an emerging subdiscipline of classical demography that brings life table techniques, mortality models, experimental systems, and comparative methods to bear on questions concerned with the fundamental determinants of mortality, longevity, aging, and life span.

Computer vision is a field of study in artificial intelligence that focuses on enabling computers to interpret and understand the visual world in the same way that humans do. It involves developing algorithms and models that can analyze digital images and videos to recognize and classify objects, track their movements, and extract useful information from visual data.

Convolution layers are a process where the network tries to label the input signal by referring to what it has learned in the past. It is made up of a set of filters (also called kernels) that are applied to an input image. The output of the convolutional layer is a feature map, which is a representation of the input image with the filters applied.

Convolutional Neural Networks are a type of deep learning algorithm that are used to process data with a grid-like topology. CNNs are a type of deep learning algorithm that is used to process data that has a spatial or temporal relationship.

Cross-entropy is a commonly used loss function for classification tasks. It is a measure from the field of information theory, building upon entropy and generally calculating the difference between two probability distributions.

Datasets is a collection and information of pictures of the project to make image classification models for training used for input data and output data in CNN Transfer Learning.

Data augmentations - random transformations that keep the image recognizable. They randomize the data and thus help us fight to overfit while training the network.

Image Classification - the goal is to simply identify which objects and other properties exist in an image.

Image Processing -  a method to perform some operations on an image, in order to get an enhanced image or to extract some useful information from it. It is a type of signal processing in which the input is an image and the output may be an image or characteristics/features associated with that image.

Image Recognition - the task of identifying objects of interest within an image and recognizing which category the image belongs to. Image recognition, photo recognition, and picture recognition are terms that are used interchangeably.

Image Segmentation – the goal is to recognize and understand what's in the image at the pixel level. Every pixel in an image belongs to at least one class, as opposed to object detection where the bounding boxes of objects can overlap. Image segmentation is the task of identifying different "segments" in an image, like people or cars. More technically, image segmentation is the task of grouping pixels with different semantics.

Image tagging - annotation is defined as the task of annotating an image with labels, typically involving human-powered work and in some cases, computer-assisted help.

Keras - is an abstraction layer that sits on top of a low-level neural network library like TensorFlow, and it has lots of nice functions to create network layers, validation functions, and training engines.

Kernel - an idea of a group of neurons getting activated, provided with specific input, into the mathematical notion of the multi-dimensional matrix representing a detector for a specific set of features.

Mobile net - is based on a streamlined architecture that uses depth-wise separable convolutions to build light weight deep neural networks.
Multi-label image classification is when more than two categories in which the images of butterflies can be classified. 

Multinomial Logistic Regression is a classification technique that extends the logistic regression algorithm to solve multiclass possible outcome problems, given one or more independent variables.

Object detection - butterflies find the position (bounding boxes) of individual objects such as diseases and defects. 

OpenCV- is a library used to read images and display them if required like shape examination steps including shape-based demonstrating surface examination ventures to show surface (examples of the pupae surface).

Probability vector is a vector (i.e. a matrix with a single column or row) where all the entries are non-negative and add up to exactly one.

Progressive Web Application Development - is a set of optimal software development practices aimed at making a web application function similarly to a mobile or desktop app. Similarly, to a mobile application, PWAs send push notifications and have an icon on the home screen. At the same time, progressive web applications are simpler and faster than traditional mobile apps, and they can be shared through a URL.

Srum enables us to work as a team,  respond to changes in competition,  environment and learn from experience.
Transfer Learning - is a research problem in machine learning (ML) that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem.

VGG16 - its algorithm is open source and available for public use. It's very popular and built into many machine-learning libraries. The network weighs in at around 500MB and can easily run on a modern computer.
 




Chapter 2
REVIEW OF RELATED LITERATURE, STUDIES, AND SYNTHESIS

This chapter shows various related literature and assessments of both foreign and local studies. To gather essential insights that would help this research, the researcher reviewed significant studies and literature. The ideas gathered were used to evaluate the best methodology and tools for solving the problem. 

Related work

2.0 CNN
The technique of applying convolution operations to image data is not novel or unique to convolutional neural networks; this is a common technique in computer vision.( Lakew and Tegegne, 2019). These techniques are very expensive and can only be performed by trained professionals. The project presents the detection of diseases using CNNs (Convolutional Neural Networks) (Blessy et al, 2018). According to (Wick et al., 2017) it is usually the supervised learning of deep CNNs that requires huge datasets for training. However, the databases contain only a few examples per plant species. They apply data augmentation and transfer learning to prevent neural networks from overfitting. The trained CNNs achieve recognition rates above 99% on the Flavia and Foliage datasets and slightly outperform current methods for leaf classification.

2.1.Butterfly Classifications 
 Buttery specifying classification techniques were presented,  and computer vision techniques in butterfly classifications are covered. Butterfly identification and classification are not only important in the sector of computer vision but also equally important in the field of entomology to preserve the butterfly species. Various methods, essentially image processing, computer vision, traditional machine learning, neural networks, deep learning, transfer learning, etc. have been employed until now to detect and classify butterflies. (Yasmin et., al, 2023)
 
 2.2 Object Detection
Camera can specify the location of multiple objects in the image, wherein it is a combination of classification and localization. By the use of object detection, both images will be classified (e.g. butterflies, plants, and weeds). The computational power of smartphones has drastically increased in the past few years and they are now compatible with desktop computers available some years ago ( Ignacio et al., 2021). Normally, Python will be used for implementation, and openCV library for the bounding boxes for Computer Vision and Deep Learning.
https://youtu.be/RFqvTmEFtOE

2.3 Image Classification
The study of (Daegyu et al.,2020), shows a vision-based mobile application to classify endangered parrot species using an advanced CNN model based on transfer learning (some parrots have quite similar colors and shapes). A camera on a mobile device is used to identify species in real time. According to (Lakew and Tegegne, 2019), computers have been used for digital image recognition in the study of freshwater fish species to get a faster response when compared and contrasted with human knowledge methods. However, machine-level knowledge is based on computers and provides more precise results. Furthermore, the morphological shapes and textures of these species are described as well. Additionally, this species is recognized based on the morphological shapes and textures of fish species images and according to (Haasa, 2021) user-friendly general-purpose tools for pursuing image processing.

2.4 Transfer Learning
In the study, (Rishabh et al,2020). It is a must to set up an environment and download libraries like Tensorflow, OpenCV, and Keras prior to implementing transfer learning for the dog breed. According to (Toda et al, 2020) paper, similar approaches have also been used for the preparation of training data for plant image analysis. The difference is that they train deep networks using large variations of synthetic images with randomly sampled physical parameters. Collectively, the use of synthetic images has huge potential in the research of the phenotyping of plants and butterflies. It requires a time-consuming manual data annotation process that often becomes the limiting step.
Seed shape, along with seed size, is an important agricultural phenotype. It consists of yield components of crops, which are affected by environmental conditions in the later developmental stage. It is possible to predict germination rates and subsequent growth of plants based on seed size and shape. Genetic alteration of seed size contributed to a significant increase in thousand-grain weight in contemporary barley-cultivated germplasm. The trained model showed 96% recall and 95% average precision against the real-world test dataset. They show that the approach is suitable for various crops including rice, lettuce, oats, and wheat.

2.5 Data Augmentation
According to (Lutz et al.,2019) the network is suitable to create high-resolution output as it directly estimates the parameters from the image which then can be used to rectify even very high-resolution input images. Their goal is to devise a convolutional neural network to automatically estimate the distortion parameters of an image. The method allows for seamless integration of the network into a NUKE node graph and allows for high-quality distortions of even very large images that would not have fit into the network.

2.6 Feature Extraction
According to (Blessy et al, 2018), the paper aims to identify diseases in plants. Plant pathology is the scientific study of plant diseases caused by pathogens and environmental conditions. It includes pathogen identification, disease cycles, economic impact, management of plant diseases, etc. In the past, people used spectroscopy to detect diseases. These techniques are very expensive and can only be performed by trained professionals. The project presents the detection of diseases using CNNs (Convolutional Neural Networks). First, a sample leaf image is given as input. Then, color channels are separated from the leaf image, and the green pixels are masked from the original image. Masking is done to avoid processing the green area of the leaves since it is healthy. By removing the green area from the original area the remaining infected area is calculated. Then, features are extracted from the affected area. Lastly, these characteristics are given to CNN for the classification of the disease. Upon identifying the disease, the solution is to send that disease to the GSM device of the corresponding user. 

2.7 Real-Time Environmental Monitoring
According to (Acevedo, 2017) using practical approach application to the ecological systems. Butterfly stage of development, the presence of diseases or defects, and other relevant information only for image classification in proper care management. Primary treatment will be given for the stages of butterflies after  the diseases are classified and monitored. The environmental conditions allow the breeder to adjust for  proper care management. The system provided CNN models such as object detection and image classifications for the  stages of butterfly, disease, and defects. Proper care management systems will be guided to tasks in every activity of rearing butterflies decided by the system for treatment.
Synthesis
     Butterfly culture is sensitive and prone to some predators, which can affect yield production by capturing them in the wild. Diseases are transmitted by parasites such as fruit flies, gnats, and wasps through the injection of their bodies. With the intervention of the system for rearing butterflies, there are problems that affect the quality of pupa production due to the defects and damage as they enter the pupal stages. Yearly, the butterfly export supply of pupa is deteriorating. It is also because of low humidity and pupal dehydration that cause the emergence rate lower due to diseases and temperature. Wet, cold, and hot temperatures affect pupal emergence. Butterflies have the normal temperature for breeding. With the CNN algorithms, it employs different modes to recognize different types of diseases, including bacteria and viruses. Diseases especially during the larval stages use Object Detection during the early days for treatment. In the host plants or image fruits there are objects carried by breeders for foraging that can be identified by capturing a camera using Image classification. Normally, a convolutional neural network was used to classify objects such as endangered parrot species, freshwater fish, plant species, leaf diseases, leaf classification, and seed qualities in relation to the study. It requires datasets for training and applied data augmentation, and transfer learning to prevent network overfitting.
In addition, the interactive application of computer sensors utilizes computer vision in the project for the detection of objects in this research. Classification of objects such as   host plants or image fruits, butterfly stages, defects, and diseases or predators(viruses, and parasites).  Object detection is classified for a single image, and multiple image classifications of butterflies. And proper care management for larval stages, and assess pupae in yield production. Establishing centers to care for all identified pests and diseases. 

The paper describes quite well how the CNN technologies it applies to work, and how it narrowed its technology choice down to the method of feature transfer. Feature transfer uses a general-purpose image recognition network, and builds upon that to form a more application-tailored machine learning system – saving computational power, reducing the amount of training data required, and largely avoiding problems like overfitting.


Chapter 3

RESEARCH DESIGN AND METHODOLOGY

This chapter discusses the research design,  software development process and evaluation, the different algorithms to be used in butterfly proper care management system parameters, and the criteria evaluation framework. This will enable researchers to develop a proper care management system that will figure out how to identify butterfly stages, diseases,  and defects. 
Research Design and Framework
Research design is being conducted at CNN to determine stages of butterfly diseases and defects of the proper care management system.  This incredible task is started by using Agile methodology with scrum for system planning, software development, and research design.  Agile is quickly evolving in workplaces, paving the way to complete work in a complex and ever-changing world. Many companies that are thriving to find a way to perfection and improve processes often choose agile planning.
Different variables, parameters, and policies including protocol in the LGU were abided by the researcher during the pandemic. For the  initial system, the proponent annotated image data of host plants or image fruits, butterfly classes, and other details of butterfly species, health,  defects, and diseases.

Overview of the Project Methodology

Figure 2. Overview of the Project Methodology
Figure 2. shows the Overview of the proposed system for proper care management of butterfly farming using CovNet would involve using object detection, data collection and monitoring, analytics and reporting, care management, and feedback, and continuous improvement to achieve the goal of improving the health and survival of culture butterflies populations. The proposed system uses the CovNet architecture to build a Transfer-learning model that can identify butterfly stages, diseases, and defects. This model will be integrated into a care management system developed using the Django framework, which will enable real-time monitoring, alerting, and reporting on butterfly health and development. The system will provide decision support to care managers or farmers to help them optimize care for their butterfly populations and achieve their goals.

Image Classification and Object Detection: The system would use CovNet to detect and identify different stages of butterfly development, as well as any diseases or defects, and health that may be present. This would involve training, evaluation, and prediction of the CovNet model on a dataset of images of butterflies at various stages of development, as well as images of butterflies with diseases or defects. The model would then be able to detect and classify these different features in real time using object detection of CNN algorithms.

Data Collection and Monitoring: The system would collect and monitor data on butterfly culture populations in Marinduque, including information on their development on health, and defects and diseases. The data would be stored in a centralized database that could be accessed by authorized users. This data will be used to train the CovNet architecture to recognize butterfly classes,  stages, health, diseases, and defects. This data will be stored in a database using Django's object-relational mapping (ORM) system. This could involve using sensors and cameras to track butterflies, as well as collecting data on butterfly breeding and release programs.

Data Analytics and Reporting: The system would use the data collected to generate insights and reports on stages of butterfly defects, identifying diseases and health. This could involve using machine learning algorithms to analyze the data and generate predictive models, as well as providing dashboards and visualizations to make the data more accessible to users. The system will generate reports and analytics based on the data collected and analyzed. This will help to identify patterns and trends in butterfly health and development, as well as provide insights into the effectiveness of the care management system. Django's built-in data analysis tools, such as Django QuerySet API and Pandas library, will be used to perform data analysis and generate reports.

Care Management: The system would provide recommendations and guidance to users on how to properly care for butterfly populations, including recommendations for breeding and release programs, environmental conditions, and disease management. This could involve using machine learning algorithms to analyze the data collected and generate customized care plans for individual butterfly populations, based on their unique characteristics and needs.

Feedback and Continuous Improvement: The system would provide feedback to users on the effectiveness of their care management practices, helping them to continuously improve and refine their care strategies over time. This could involve using machine learning algorithms to analyze the data collected and identify areas for improvement, as well as providing feedback to users on the results of their care management efforts.

Training the CovNet model: The CovNet architecture will be used to build a Transfer learning model that can identify butterfly classes,  stages, health, diseases, and defects. The model will be trained using a large dataset of butterfly images, labeled with the appropriate stage, diseases, defects and health. The trained model will be saved and integrated into the Django application.

Alert and notification system: If the CovNet model detects abnormalities, such as diseases or defects, an alert will be sent to the care manager or farmer via email or SMS. This will enable them to take action to address the issue, such as providing management treatment or adjusting environmental conditions. The alert and notification system will be implemented using Django's messaging framework.

Decision support system: The system will provide recommendations and guidance to care managers or farmers on the appropriate actions based on the data and analytics generated. For example, the system may recommend changes to environmental conditions or adjustments to feeding schedules to improve butterfly health and development. The decision support system will be implemented using Django's views and templates.

Real-time monitoring: The system will use cameras and sensors to monitor butterfly populations in real-time. The images and data collected will be fed into the CovNet model integrated into the Django application to identify the stage of development, the presence of diseases or defects, and other relevant information. 

User authentication and authorization: The system will implement user authentication and authorization using Django's built-in authentication system. Different user roles, such as care managers, farmers, and administrators, will have different levels of access and permissions to the system.

Deployment:  Last,  deployed the models to retrain and validate the test images. The user will test the image by uploading their image to the site. Then, it generates output labels and confidence scores of the image and identifies the butterflies' stages from egg, larvae, pupae, and adult butterflies and for proper care management systems to determine the defects of the butterfly pupae and diseases of the butterfly larvae.

Scrum Framework

In software development and releases, without plans, you reach nowhere. Agile methodology is one of the most adapted planning processes in modern days.

Figure 6. Agile Scrum Methodology 

Figure 6. shows the Agile Scrum Methodology that will be used in the proposed system. Agile with Scrum methodology is used by the researcher for incremental development of the system to promote collaboration of the software project.  Researchers studied that each iteration spans a month's sprint for the goal of system features and other functionalities to adjust and adapt the flexibility changes of the project. A time frame is scheduled for the task to make a potential deliverable progressive web application system. It is used for daily tasks for software product enhancements daily, weekly and monthly reported and monitored to adapt the changes. There are four phases in the agile development cycle that are used by the researcher are: 1. Scope, 
2. Product Backlog, 3. Design and 4. Usable Software. Each phase uses iteration to improve the process. The advantages of using the agile methodology.

Phase 1: Scope
Specifics of the project, like participants, status, and target release. 
The Project owner  met all participants like sub-breeders and breeders, especially the purchasers who have met with the researcher and filled out survey forms as butterfly breeders, and the discussion revolves around butterfly production and proper care management in topography. Furthermore, the Google form was used to register distance breeders that are not allowed to come and fill in the form.  
Team goals and business objectives. 
The team of the project like Project Designer, Web Developer, UI Designer, and Marketing, will provide a startup Progressive Web Application system for the end users to achieve a high-quality user experience and performance of image classification and proper care management systems. The schedule of day to day of yesterday, today's tasks need help from the team for collaboration for the project. The team is a researcher/web developer/system designer/client manager/technical specialists of the software project submitted work to understand the capability time of work tasks and teamwork through messenger and online meeting platforms such as google meet and zoom. Client manager was responsible for monitoring issues, managing the progress of everything changes. Mentors such as technical specialists handled all the technical problems of the team for the goal of improving the changes and flexibility of the  project.
Background and strategic fit. 
The system will be giving a Highly recommended framework Django for the development of the project. It is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by the researcher and developer, it will be used in the development of the system for  intervention for yield production from production to purchasing. Adaptable to changes in behavior, cost and clients.
Assumptions. 
It will serve as a guide for the existing breeders and sub-breeders in butterfly management improvement sustainability, the startup opportunity to discover more species of butterfly for scientific research, and the study of entomologists, enthusiasts, and hobbyists by getting information to integrate the system. It will have the opportunity to know more about the host plants or image fruit of the butterflies which is very important for foraging for larvae. They will be knowledgeable to identify different types of diseases and defects from the stages of butterflies. 
User stories (including the title | description | priority | and notes.) Links to design explorations and wireframes.
Client-side Neural Network
Users will find the image or capture it with the camera. Users' images uploaded by the user. Users will make a call to the backend application. Users pass an image to the backend to give the result. Client-side neural networks don’t have a back-end. Both the neural network and the data are in the front end, and the model is running in the browser.
The user will classify, for example, the Color inspection for the eggs to find fertile eggs from unusual colors. And, the Surface inspection for the defects and diseases of the pupae by analyzing their abnormalities before it is sold to purchasers. Object detection may be used for proper care management for some predators viewed in a monitor with a bounding box that helps them easily identify. The researcher broke down several stages. 
The backend application 
Admin will choose the machine learning model to train, evaluate, and predict images for output classes for image classification, image segmentation and object detection.

 Phase 2: Product Backlog
Planning is essential for day-to-day life, including work, personal life, and more. Without having a plan, you are subsequently planning to fail. The team reviews the product submitted by the team by checking and analyzing the error by the help of the mentor.
Design Thinking

Empathy Map 
5
Figure 7. Empathy Map 
Figure 7. shows the Empathy Map shows the initial step of design thinking in Machine Learning. 
It visualizes user attitudes and behaviors, to advocate in the interest of the client in a compassion guide that helps UX groups adjust to a profound comprehension of the end user. The mapping procedure likewise uncovers any gaps in existing client information. It is a synergistic perception used to express what we think about a specific sort of client. It externalizes information about clients so as to 1) make a mutual comprehension of client needs and 2) help in basic leadership.

1. WHO are we empathizing with? 
The proper care management system will benefit hobbyists, enthusiasts, farmers or breeders, sub-breeders, and purchasers. Users must register their accounts and update their profiles to continue using the system. They will use the device to help them grow their business and improve quality management. Increase the knowledge in the field of entomology for sub-breeders, breeders, enthusiasts, hobbyists, and purchasers.

2. WHAT do they need to DO? 
This tool will provide farmers with unprecedented insights about demand so that they can make informed decisions that could potentially save them tremendous amounts of money. Breeders can use the device to check the quality control of pupae for export before they are brought to the market for buyers. Breeders can make decisions for the treatment of the diseases and defects of the stages of butterflies. 

3. What do they SEE? 
The client will see the Features of an automated proper care management system designed by the researcher to accelerate yield production.

4. What do they SAY? 
Computer vision is revolutionizing the way we see things by enabling machines to make sense of visual data in new and innovative ways to identify butterfly stages,  diseases, and defects. This will open up to all enthusiasts, especially  those who are collecting images of Lepidoptera while learning the stages of each butterfly's proper care management system is acceptable to users. 

5. What do they DO? 
Automated machine learning in agriculture using computer vision to identify butterfly stages,  diseases, and defects. Additionally, the health issues and applying targeted treatments to improve culture yields. In this way, farmers will be guided by the task in a proper care management system and decision support system. 

6. What do they HEAR? 
In agriculture, it can be used to monitor crops and detect disease, helping farmers to optimize their yields and reduce waste. For mobile and web apps, it should be recommended a system-reliable solution that can be used to test product quality. The device was asked how they test their product, as well as how they ensure quality. 

7. What do they THINK and FEEL 
Edge computing offers a number of benefits for computer vision applications, making it an increasingly popular choice for businesses and organizations looking to leverage the power of computer vision.
There is a need for sub breeders to improve their breeding, innovate, and implement the proper care management system in location topography through systemized technology. 

2. Mind map
                         
Figure 8. Mind map
Figure 8. shows the Mind map used to connect several ideas or pieces of information by the researcher. It is written and linked by lines and curves to its minor and major ideas. The researcher expanded on the facts that the classifications and proper care management system will be met. 

Project Architecture






Figure 9. Project Architecture
Figure 9.  shows the Project Architecture includes data in the DB and the code that will fetch the dataset, training model, validation model, and test model. The pre-trained model will be consumed by a web app while using the system. #add this
Phase 3: Design
The project will be used easily and conveniently, they can move to an automated device. These companies have harnessed the power of edge computer vision to develop innovative solutions that are changing the way we see the world. Develop an entomology-based biodemographic database in order to create uniformity in world science in the future. Buyers and suppliers who have their business. Traditional clients/customers of Convolutional Neural Networks are less familiar with machine learning and technological advances that use AI. A digital and interoperable platform will use APIs and technology to extend service to clients and integrate machine learning applications on top. 

Figure  Machine Learning Process
This is how the ML workflow looks:


Figure 10. shows the operation of the system of machine learning. Process steps are gathering and collecting images, data preparation, choosing the model, training the model, evaluation, hypertuning and prediction.
Step 1. Identifying relevant datasets and preparing for its analysis or
Gathering Collection of Images Data Gathering Procedures
Collect the images of butterflies' stages for identification.
For image classification, the researcher used pictures of the butterfly and moths, host plants as indicators, predators, defects, and diseases. The dataset contains various images in butterflies' production  of thousands of images. The researcher obtained original data sources called Montellano dataset and other information from sub-breeders, breeders, and purchasers by collecting pictures taken via smartphones at their butterfly sites and compiling them for the dataset and research study. At least 50 images for each class of 18 species for manual data annotations. The more, the better.
Step 2. Choosing Machine Learning Model for the Problem Dataset
Labeling Data with Machine Learning or Preparing Data
Data Annotation
The researcher starts by manual annotation using a description of the labeled  image classes and attributes model will be  Eggs, Caterpillars/Larvae, Butterfly Color description,	Local name, English name, Scientific subspecies name, Discovered by,Year Discovered,	Family,  	Date of flight,	and Location. 



Figure 11. Labeling Data with Machine Learning
Figure 11. Shows the Labeling Data with Machine Learning to prepare a labeled dataset for machine learning by cleaning and labeling the data.

Labels are extra information about a dataset. Labels help algorithms know more about the data, which enables users to do better things with it. Labeling large datasets is a huge time commitment. Rework the annotation for classes to fit the model. Review the labels of each class for hyper-tuning. 
Reworked the dataset

Review the dataset

Done annotation of the dataset
In this way, we would not need a dataset as big as if we were to train a network from zero (from hundreds of thousands or even millions of images we could go to a few thousand) nor would we need to wait a good number of epochs for the weights to take good values for the classification, would have it much easier due to their initialization. According to its research, descriptive research is a quantitative approach that attempts to discover the opinions, or underlying reasons, of the populations of sub-breeders, breeders, and purchasers concerning the proper management of the butterfly. 
Dataset
The machine learning model dataset to train is a butterfly species classification model, which requires image classification. The data that the proponent will be using comes from the breeders  that took each picture to compile from their butterfly house to become a Datasets. The proponents organized them based on what they represented to be able to recognize the pre-classified images. There are 18 species of butterfly cultured, for example, all of the images of Papilio rumanzovia will be in one folder and Papilio lowi, Papilio demoleus and so on would be in another folder.  Datasets are the following:
• Eighteen butterfly categories, four diseases categories, and eight defects categories
• Training set: Butterflies,  diseases, and defects
•Test set: Butterfly images, diseases, and defects (from Marinduque Breeders of Butterfly farm site Images)
The Montellano dataset contains 18 types of cultured butterflies from Marinduque province, 8 types of predators, 6 types of defects of pupa and 5 types of disease larvae and 3 types of eggs, and 14 types of host plants.
Here are the classes in the dataset, as well as 10 random images from each: 
Semperi










Mariposa










Biblis










Palipatos










Chrysippus










Kiwig, Aga










Dozon










Bolina










Leucono










Kotsebuya
















Demolyos










Pali













Step 3. Build an analysis based on chosen algorithm  
Choosing a machine-learning model to recognize butterflies. Provide an empirical assessment of the performance of object detection and image classification using a Convolutional Neural Network algorithm. Provide biodemographic data regarding host plants and butterflies. This is classified as stages of butterfly, diseases, and defects. 
Note: Creating a Machine Learning Model is a complete detailed task in itself that contains multiple steps (such as Data Pre-processing, EDA, Feature Engineering, Model Development, Model Validation, and Tuning Hyperparameters). Here we are skipping all those steps since we are much more interested in using this model for powering our web-based application.
Choosing Model
Convolutional Neural Network 
Many companies are now enabling computer vision. That is why researchers follow the same idea but in the agriculture domain.

Fig 2. Neural Network with Multiple Output Classes
CNN Architecture
Convolutional Neural network architecture: The neural network architecture is the structure of the model that determines how the input data is processed and transformed into output predictions. Pre-trained image models typically use convolutional neural networks (CNNs), which are designed to recognize spatial patterns in images.


Convolutional layer: Convolutional layers are made up of a set of filters (also called kernels) that are applied to an input image. The output of the convolutional layer is a feature map, which is a representation of the input image with the filters applied. Convolutional layers can be stacked to create more complex models, which can learn more intricate features from images. 
Input
Convolutional Layer visualization (9x9)

Figure.  Convolution Layer visualization (9x9)
Figure.  shows the Convolution Layer visualization (9x9). The computers understand that the white pixels have a 1 value and the green pixels have a -1 value. This pixel is just an example of a multi-classification.
The CNN model is used by the researcher for processing and analyzing visual images of deliverable objects in supervised learning for image classification. The tasks use computer vision as an intervention to avoid spreading diseases of the early stage by removing unhealthy from healthy stages after classifying them. Computer vision trains computers to comprehend the visual world. By utilizing digital images and deep learning models, computers can accurately recognize and categorize objects, as well as respond to them.

Pooling layer: Pooling layers are a type of convolutional layer used in deep learning. Pooling layers reduce the spatial size of the input, making it easier to process and requiring less memory. Pooling also helps to reduce the number of parameters and makes training faster. There are two main types of pooling: max pooling and average pooling. Max pooling takes the maximum value from each feature map, while average pooling takes the average value. Pooling layers are typically used after convolutional layers in order to reduce the size of the input before it is fed into a fully connected layer. 
Given the example, the weight of the image size is (i.e 224 x 224 with 3 color channels,  e.g. red,  green, and blue) in a 2-dimensional array whose shape will be (length*width, channels). In this example, this will be rescaled to the resize of (224*224, 3). The process of convolution layer, pooling layer to fully connected layers. 
Based on the researcher's example it represents the weight matrix to be recognized as (O) eggs,  (L) larvae,  inverted L(P) pupae, and (X) adult butterflies. 
 
Fig. Max pooling layer


Fig shows the Max pooling layer by getting the maximum numbers of 2x2 filters. Here,  for example, is the letter, X, the computer recognizes the input signal. The goal of the input signal should look like the previous image as a reference. 
Feature extraction: During training, the pre-trained image model learns to extract relevant features from images, such as edges, corners, and textures. These features are then used to recognize objects and patterns in new images. 
Fully connected layer: Fully-connected layers are one of the most basic types of layers in a convolutional neural network (CNN). As the name suggests, each neuron in a fully-connected layer is Fully connected- to every other neuron in the previous layer. Fully connected layers are typically used towards the end of a CNN- when the goal is to take the features learned by the previous layers and use them to make predictions. For example, if we were using a CNN to classify images of animals, the final Fully connected layer might take the features learned by the previous layers and use them to classify an image as containing a dog, cat, bird, etc. 
Transfer learning: Transfer learning can be used to leverage the knowledge learned from a pre-trained model to improve the performance of a new model for a related task, such as detecting diseases and defects in images of butterflies. A pre-trained CNN model, such as ResNet or VGG, can be fine-tuned on a smaller dataset of labeled images of butterflies with diseases and defects. This can help the model learn to recognize the specific patterns and features of the diseases and defects in the images. Once a pre-trained image model has been trained on a large dataset, it can be fine-tuned for a specific task or domain. This process, called transfer learning, involves re-training the model on a smaller, more specific dataset to improve its accuracy for a particular application. The system classifies each object for the development of the system to show and display the multi-output classes. The transfer learning starts with an input class of stages of butterflies, disease, and defects until it gains from learning to predict the image. There are approaches such as Training a Model to Reuse it. Imagine you want to solve task A but don't have enough data to train a deep neural network. 
Training data: Pre-trained image models are typically trained on large datasets of images, such as ImageNet, which contains millions of images labeled with thousands of categories. The training data is used to teach the model to recognize patterns and features in images, such as edges, shapes, and colors.
Deployment: After the pre-trained image model has been trained and fine-tuned, it can be deployed for use in various applications, such as image classification, object detection, and image segmentation. Deployment involves integrating the model into a larger software system or application.
Overall, the conceptual framework of pre-trained image models involves the use of large datasets, neural network architectures, feature extraction, transfer learning, and deployment. These components work together to create powerful image recognition models that can be used in a variety of applications.

Image Classification

Figure Image Classification
Figure shows Binary Image Classification A trained model that can accurately classify images of butterflies into different stages, diseases, and defects, and a set of evaluation metrics such as accuracy, precision, recall, and F1 score.0

In a binary classification setting, you normally only have a single probability, and therefore you need a threshold to define the decision rule. However, in multiclass classification problems where labels are mutually exclusive, you have a multinomial probability distribution, that is, the N probabilities of the input belonging to each of the N classes, all adding up to 1. In this kind of scenario, the decision rule usually is simply picking the highest probability class.

In the cases where labels are not mutually exclusive, each label's threshold can be individually selected just like in the binary classification case.

CNN Model of the researcher

Figure.  shows the Neural Network Architecture of transfer learning with Multiple Output Classes. The system will show multi-output from different classes eg. butterflies, larvae, pupae, and eggs,  for management predators, and hostplants. 

Butterfly, Predators, and Host plants classification (defects and diseases, etc) of cross entropy. 

Figure 5.  shows the Butterfly, Predator, and Host plants classification (defects and diseases)

Cross-entropy is a measure of the difference between two probability distributions for a given random variable or set of events. 

It might recall that information quantifies the number of bits required to encode and transmit an event. Lower probability events have more information, higher probability events have less information. In this example the measure of the three probability distributions for a butterfly,  moth, and skipper. The higher probability of the three in a given threshold of .1 percent is the butterfly. The ultimate goal of these techniques and metrics would be to develop a model that can accurately recognize and analyze the different butterfly types, classes, stages, diseases, and defects of butterflies, which could have applications in fields such as agriculture, ecology, and conservation.

Computer vision — Object detection and segmentation
Object Detection
A trained model that can accurately detect and localize the presence of diseases and defects in images of butterflies, and a set of evaluation metrics such as mean average precision (mAP) and intersection over union (IoU).

Figure shows the Computer vision — Object detection and segmentation


Figure Classifier for object detection

Figure shows Classifier for object detection. The researcher introduced applications based on the constraints of the problem and then demonstrated the effectiveness of PWA across a wide range of mobile applications and used the CNN model including object detection. The object will detect the stages of butterflies, larval diseases (such as bacteria and viruses), and defects.

Image Segmentation
The system will take care of the host plants vs butterflies, and larvae vs predators for identifying them as separate images. Defects and diseases affected are segmented to filter the grains. Then only find the type of diseases and severity  that can also easily be measured. Diseases such as viruses and parasites can result in less production of 25-30 % of larvae and pupae stages.(Annex C) 

Defects of the Pupae

Affected  Part Segmented Pupae Defects 

This is the first module of the project. As a butterfly ages, its wings get damaged, its thorax broken, feet lose immediately, etc. will be classified.  Also, the pupae defect inspection when they are purchased for quality controls by the purchasers. 
In this module from the given input image the defects affected part is segmented.  Only the type of defects can also be measured.  To segment the affected part the FCM Algorithm is used. 

Figure Blocked Diagrams of proposed methods in proper care management. 
Fuzzy c-means is a method of clustering which allows one piece of data to be partitioned into two or more clusters. This method is developed by Dunn in 1973 and improved by Bezleck

Affected Part Segmentation 
This is the second module of the project.  In this module from the given input image the disease affected part is segmented.  They only find the type of diseases and severity can also be measured.  To segment the affected part the FCM Algorithm is used. 


Figure Blocked Diagrams of proposed methods in proper care management. 
Fuzzy c-means is a method of clustering which allows one piece of data to be partitioned into two or more clusters. This method is developed by Dunn in 1973 and improved by Bezleck

Butterfly Classification
This is the third module of the project.  In this module from the given input image the classes of butterfly affected parts like wings focus on the color description. 

Figure 6. Butterfly Classification
Figure 6. shows the Butterfly Classification of the stages of butterflies classification and identification using fine-grain samples.

Data Augmentation

Figure shows the Data Augmentation of the butterfly parameters. A larger and more diverse dataset of images of butterflies in different stages, with different diseases and defects, and under different conditions.

The output of data augmentation, image classification, object detection, transfer learning, and cross-entropy loss for butterfly stages, diseases, and defects would depend on the specific task and the dataset used for training and evaluation. However, some possible outputs could include:

Texturized:

Decolorized:

Edged enhanced:

Salient edge Map:

Flip and Rotate: 
RandomHorizontalFlip(p): Horizontally flip the given PIL Image randomly with a given probability p.

Gray : Create an image using gray scale

Blur: adding Gaussian blur or random image dataset to improve the model performance.

Canny :create an image using canny edge detection 

Dilation: create an image using dilation

Erode : create an image using eroding

Cropped: Crop the given PIL Image to random size and aspect ratio.

Bright : create an image using brightness control

Embossed: create an image to enable embossed style

Sharpen : create an image to enable sharpen an image

Sepia:create an image using sepia tools

Resize(size): Resize the input PIL Image to the given size.
RandomRotation(degrees): Rotate the image by angle.  

degrees: Range of degrees to select from. If degrees is a number instead of a sequence like (min, max), the range of degrees will be (-degrees, +degrees).

RandomResizedCrop(size): Crop the given PIL Image to random size and aspect ratio.

size – expected output size of each edge

Resize(size): Resize the input PIL Image to the given size.
size (sequence or int) – Desired output size. If the size is a sequence like (h, w), the output size will be matched to this. If the size is an int, the smaller edge of the image will be matched to this number. i.e, if height > width, then the image will be rescaled to (size * height/width, size)

CenterCrop(size): Crops the given PIL Image at the center

Step 4. Training the model on its dataset and revisiting it as needed (Training Model)
Train the model using a training dataset. It’s also a crucial aspect of training machine learning algorithms, so data scientists spend a lot of time labeling data. 
A pre-trained image is a type of artificial intelligence model that has been trained on a large dataset of images to recognize various features and objects. The conceptual framework of pre-trained image models involves several key components:
Handling Overfitting and underfitting 

Evaluation
Evaluate the accuracy of the trained model by feeding it with data from testing data.

Prediction
After achieving good accuracy, export the model to a file to use in applications. Give confidence in the accuracy of the output image. 
The system has typical accuracy of 97.1 % of precision and 91.3% recall as shown in the evaluation. The retail stores are automated, with customers able to purchase products without being checked out by a cashier or through a self-checkout station. The retail store uses several technologies, including computer vision, deep learning algorithms, and sensor fusion.

Phase 4: Usable Software
Final Software Testing
 	Software testing is the process of evaluating a software item to detect differences between given input and expected output. Also to assess the feature of A software item. Testing assesses the quality of the product. Software testing is a process that should be done during the development process. In other words, software testing is a verification and validation process. It requires documentation and conducts manual and automated tests.
Here, we will be using the following languages and editors: 
Language/Interpreter: Python 3 (preferably Python 3.11) from python.org
Editor: Jupyter iPython Notebook
OS:  Windows 10 x64
DataSet: The image dataset came from the researcher.
Django Requirements: This project requires database ORM of Django rest framework, JSON
Python Requirements: This project requires the following libraries to be installed opencv-python, Numpy, Pandas, matplotlib, Scikit Learn, Scikit Image, Keras,  Tensorflow
Javascript Requirements: ml5.js, p5.js
The system will be available upon completion of the road map. 
Laptop for ML and Data Science
Processor: A powerful CPU is crucial for running complex ML algorithms and data analysis. Look for a laptop with an Intel Core i7 or i9 processor or an AMD Ryzen 7 or 9 processor.
GPU: The GPU (graphics processing unit) is important for running deep learning algorithms, as it can handle parallel processing much faster than a CPU. Look for a laptop with a dedicated GPU, such as an NVIDIA GeForce or Quadro, or an AMD Radeon.
RAM: The more RAM your laptop has, the better it can handle large data sets and complex ML models. Look for a laptop with at least 16GB of RAM, but 32GB or more is ideal.
Storage: Datasets for deep learning and data science can be massive, so you’ll want a laptop with plenty of storage. Look for a laptop with at least a 512GB SSD, or consider one with multiple drives or the ability to add external storage.
Display: A high-quality display is important for visualizing data and models. Look for a laptop with a resolution of at least 1080p, or consider a 4K display for even more detail. You may also want to consider a laptop with a high color gamut, such as Adobe RGB or DCI-P3.
There are four main stages of testing that need to be completed before a program can be cleared for use: 
Integration Testing: Integration testing is defined as the testing of combined parts of an application to determine if they function correctly. Integration testing can be done in two ways:
Bottom-up integration testing. Testing begins with unit testing, followed by tests of progressively higher-level combinations of units called modules or builds.
Top-down integration testing. In this testing, the highest-level modules are tested first, and progressively, lower-level modules are tested thereafter.
System Testing: System testing tests the system as a whole where it is considered a black box and there is no need to understand the inner workings of the system under test. System testing is performed once all the components are integrated, and the application as a whole is tested rigorously to see that it meets requirements. This type of testing is performed by the quality assurance testing team.
System testing is where the system or application has been fully implemented and to be tested as a whole.
The application is tested thoroughly to verify that it meets functional requirements, quality of service requirements, and business requirements.
The application is tested in the final production environment or one that is very close to the production environment where the application will be deployed.
System testing enables organizations to gain a sense of time-to-market when passing results are achieved.
Acceptance Testing: Acceptance tests are not only intended to point out simple spelling mistakes, cosmetic errors, or interface gaps, but also to point out any bugs in the application that will result in system crashes or major errors in the application. By performing acceptance tests on an application, the testing team will deduce how the application will perform in production. There are also legal and contractual requirements for acceptance of the system.

CHAPTER 4
RESULTS AND DISCUSSIONS

This chapter presents the answers to the research questions, techniques, and various
methods used in this study.

Different User Interactions

Step 5. Executing the and generating scores and other findings (Project assessment result page)
Descriptive Analysis 
https://docs.oracle.com/cd/E41507_01/epm91pbr3/eng/epm/pfcs/task_UsingtheWorkforceProfileDashboard-HeadcountDistributionPage-4b7ebd.html

Actual  Financial Statements 
KPI 

Headcount Reporting 



 
The features of the system are Butterfly identification, Stages of Butterfly, Diseases  and Defects.
The experiments that were performed by the breeders, purchasers and non breeders using the system. The result is to Provide features of image classifications to identify butterflies, butterfly stages, defects, diseases and healthy adapting it by the beneficiaries.
Identifying its features, butterfly stages, disease, and defects by the system uses the CNN algorithm. 
The result is to Provide the model features to identify images using the CNN algorithm of the butterfly stages,  defects, diseases and health.
KPI of Butterfly
KPI of Pupae
KPI of Larvae 
KPI of Eggs
KPI of Diseases
KPI of defects 
Each images are of 28*28 pixels, so have 784 features and each feature has one pixel intensity from 0 to 255.
Categorical Cross-entropy multi-image classification of demoleus and polytes. The defects classify as 1. healthy pupae demoleos 2. overbend abdomen of the polytes 3. stretch mark abdomen
Output: array([[53057, 1522], [ 1325, 4096]])
The row of confusion matrix represents an actual class and the column represents the predicted class. Here the accuracy of +ve prediction is called precision of the classifier and the ratio of +ve instances that are correctly detected by the classifier is called recell or sensitivity or the true +ve rate.
Precision and Recall:


Output: array([[53057, 1522], [ 1325, 4096]])
The row of confusion matrix represents an actual class and the column represents the predicted class. Here the accuracy of +ve prediction is called precision of the classifier and the ratio of +ve instances that are correctly detected by the classifier is called recell or sensitivity or the true +ve rate.
Precision and Recall:


Output: array([[53057, 1522], [ 1325, 4096]])
The row of confusion matrix represents an actual class and the column represents the predicted class. Here the accuracy of +ve prediction is called precision of the classifier and the ratio of +ve instances that are correctly detected by the classifier is called recell or sensitivity or the true +ve rate.
Precision and Recall:

Cross-entropy of Binary classification of polytes defects shows the 1. over bend abdomen and 2. stretched abdomen of the pupae of the Papilio polytes. 


Figure Defects of Pupae of Demoleus and Polytes
Figure shows the Classification for defects of the pupae of demoleus and polytes. The sample use the size of the data set such as train_size = int(len(data)*.7), val_size = int(len(data)*.2) and test_size = int(len(data)*.1).
The system functions as a proper care management system utilizing its features, butterfly stages, diseases, and defects.
The purpose of this study is the improvement of the proper care management system of the breeders in the province to sustain their production of pupae when it comes to different Task and Todo. This is to guide all the breeders to perform tasks and duties in propagating butterflies. Result is to Provide specific knowledge instructions and decision support that will assess butterfly stages, diseases, defects and health to improve proper care management tasks and increase income of the breeders.
The scalable performance of the ISO implementation in terms of Systems performance, User-friendliness, Usability, and Maintainability.
Provide descriptive research analysis for the users that will predict the image in computer vision using the CNN algorithm. 
About 40-50 % of pupae produced is lost and it might still go down in the post-harvest season due to the diseases, defects, and poor management, lower quality of pupae reported in 2019-2021 in my own survey. Severe diseases in butterfly culture are considered significant problems to determine several properties of an object.
sample
Error Analysis
Let’s look at the confusion matrix, using the cross_val_predict() function, then call the confusion matrix() function


Image Classification and Performance measures
10 February 2021
Image classification is supervised learning [the process under human supervision] in the field of  AI and ML world and used to identify the objects [images] among others. Like Facebook and Google photos are examples of the most widely used.
Most of us know that these products can identify things, numbers, images of you, your friends and many more things around you.. But the question arises how?
Use cases:
Facebook
Google Photos
surveillance and reconnaissance
Theft alert
Video content identification
MRI studies and satellite imagery
Lets build a numerical character identifiable model using MNIST dataset.
MNIST

MNIST is a collection of small 70,000 images of digits written by employees of the US Census Bureau and highschool students. Images are labeled with the digit which it represents.
We have a set of target images and we will build a model which focuses on relying on patterns and inference to learn using labeled images as a training set.
Import Dataset
Each images are of 28*28 pixels, so have 784 features and each feature has one pixel intensity from 0 to 255.
Let’s look at the very first image of this dataset.

Let’s cast the y as integer.
import numpy as np

y = y.astype(np.uint8)
Let’s create training and test sets. This dataset is already shuffled for us which guarantees that all cross-validation folds will be similar.
X_train, X_test, y_train, y_test = X[:60000], X[60000:], y[:60000], y[60000:]
Training a Binary Classifier
Let’s simplify the problem and identify the one digit only i.e a binary classifier with a Stochastic Gradient Descent (SGD) classifier, using Scikit-Learn’s SGDClassifier class .
y_train_5 = (y_train == 5) # True for all 5s, False for all other digits

y_test_5 = (y_test == 5)



from sklearn.linear_model import SGDClassifier

sgd_clf = SGDClassifier(random_state=42)

sgd_clf.fit(X_train, y_train_5)


sgd_clf.predict([some_digit])
Performance Measures
Measuring Accuracy Using Cross-Validation:
If you need more control on the cross-validation process than what scikit-learn provides, then, you can implement cross-validation yourself.
from sklearn.model_selection import StratifiedKFold

from sklearn.base import clone

skfolds = StratifiedKFold(n_splits=3, random_state=42)

for train_index, test_index in skfolds.split(X_train, y_train_5):

clone_clf = clone(sgd_clf)

X_train_folds = X_train[train_index]

y_train_folds = y_train_5[train_index]

X_test_fold = X_train[test_index]

y_test_fold = y_train_5[test_index]

clone_clf.fit(X_train_folds, y_train_folds)

y_pred = clone_clf.predict(X_test_fold)

n_correct = sum(y_pred == y_test_fold)

print(n_correct / len(y_pred))
Output: # prints 0.9502, 0.96565, and 0.96495
The “StratifiedKFold” class performs the stratified sampling to produce the folds containing a representative ratio of each class.
Let’s make a classifier that just classifies every image in the “not-5” class
from sklearn.base import BaseEstimator




class Never5Classifier(BaseEstimator):

def fit(self, X, y=None):

return self

def predict(self, X):

return np.zeros((len(X), 1), dtype=bool)




Never_5_clf = Never5Classifier()

cross_val_score(never_5_clf, X_train, y_train_5, cv=3, scoring="accuracy")
Output: array([0.91125, 0.90855, 0.90915])
Confusion Matrix:
The general idea is to count the number of times where the instance of class ‘5’s’ are classified as ‘not 5’s’
from sklearn.model_selection import cross_val_predict

y_train_pred = cross_val_predict(sgd_clf, X_train, y_train_5, cv=3)




from sklearn.metrics import confusion_matrix

confusion_matrix(y_train_5, y_train_pred)
Output: array([[53057, 1522], [ 1325, 4096]])
The row of confusion matrix represents an actual class and the column represents the predicted class. Here the accuracy of +ve prediction is called precision of the classifier and the ratio of +ve instances that are correctly detected by the classifier is called recall or sensitivity or the true +ve rate.
Precision and Recall:
from sklearn.metrics import precision_score, recall_score

precision_score(y_train_5, y_train_pred)
Output: 0.7290850836596654
recall_score(y_train_5, y_train_pred)
Output: 0.7555801512636044
It is more convenient to combine precision and recall together into a single metric called F1 score.
from sklearn.metrics import f1_score

f1_score(y_train_5, y_train_pred)
Output: 0.7420962043663375
It always depends on the context that you want to precision or recall. Unfortunately, you can’t have it both, increasing the precision will reduce recall and vice versa and it is called the precision/recall trade-off.
Precision/recall trade-off:
The SGDClassifier makes its classification based on score from the decision function. If the score is greater than the threshold, it assigns that instance to the +ve class otherwise it assigns it to the -ve class.
We can’t set the threshold directly, instead we can use the decision scores that it uses to make the predictions. The default threshold is 0.
y_scores = sgd_clf.decision_function([some_digit])

y_scores
Output: array([2412.53175101])
threshold = 0

y_some_digit_pred = (y_scores > threshold)
Output: array([ True])
Increases the threshold to 8000
threshold = 8000

y_some_digit_pred = (y_scores > threshold)

y_some_digit_pred
Output: array([False])
To decide the threshold, use the cross_val_predict() function to get the score of all instances.

Output:

The ROC Curve
The receiver operating characteristic curve is another commonly used tool with the binary classifier. Instead of plotting the precision vs recall, the ROC curve plots the true +ve rate against the false +ve rate

Output:

The ROC AUC score
Another way to compare the classifier is to measure the area under the curve called AUC. The perfect classifier will have ROC AUC equal to 1
from sklearn.metrics import roc_auc_score

roc_auc_score(y_train_5, y_scores)
Output: 0.9604938554008616
Now, use RandomForestClassifier and compare ROC curve and ROC AUC score to those of SGDClassifier.

Output:


Multiclass Classifier
Multiclass classifier (it is also called a multinomial classifier) can distinguish between more than two classes.
The Logistic Regression or Support Vector Machine Classifiers are strictly Binary Classifiers. However SGC classifier, Random Forest and naive Bayes classifiers are capable of handling multiple classes natively.
Training on SVC

Training an SGCClassifier with StandardScaler

Error Analysis
Let’s look at the confusion matrix, using the cross_val_predict() function, then call the confusion matrix() function

This confusion matrix looks great, since the most images are on the main diagonal, which shows that they were classified correctly. The fewer pixels are slightly darker than the others which shows that the classifier does not perform well on that pixel or image/digit.
Let’s compare error rates instead of absolute numbers of errors

Now kind errors can be easily seen that the classifier can make. Remember, the rows represent the actual classes and columns represent predicted classes.
The column for class 8 is bright, which tells that the images get misclassified as 8s. However, the row for class 8 is not that bad, which shows the actual 8s get properly classified as 8s.
Multilabel Classifier
Until now each instance has always been assigned to just one class. But, in case you want to classify multiple classes for each instance like a face recognition classification, several people in the same picture. Such classification system that outputs multiple binary tags is called multilabel classification system.

Multi Output Classifier
It is simply a generalization of multilabel classification where each label can be multiclass. It is also called multi-output-multiclass classification. Let’s build a system that removes noise from an image and output a clean digit image, represented as an array of pixel intensities.

Overview of the confusion matrix
Before talking intensively about imbalanced classification and how to handle this case, it will be good if we have a good foundation with a confusion matrix. A confusion matrix (also well-known as an error matrix) contains information about actual and predicted classifications done by a classification algorithm. The performance of such algorithms is commonly evaluated using the data in the matrix. The following table shows the confusion matrix for a two-class classifier.

Confusion matrix and its elements (Image by Author)
The classification with the two-class classifier will have four possible outcomes as follows.
True Positive or TP
False Positive or FP (well-known as Type I Error)
True Negative or TN
False Negative or FN (well-known as Type II Error)
Read more about Type I Error and Type II Error HERE


Structured projects.
Automation.
Repeatability.
Testability.
Maintainability.


Chapter 5
SUMMARY, CONCLUSIONS, AND RECOMMENDATIONS
This chapter further discusses the results presented in the previous chapter. Based on these discussions, this chapter briefly summarizes the study and provides the conclusions
of this research. In the end, it briefly describes the issues of limitation and future research.
SUMMARY OF THE BASIC FINDINGS
This study aimed to develop a system titled 
CONCLUSIONS
RECOMMENDATIONS 
Measurement 
Measured by the object in manual ruler units of centimeters for the butterfly and pupae only. The proponent put a label on the pad using the unit of centimeters to put the object on top of the object measure targeting their sizes.
Figure Measurement of Butterfly and pupae classification 

The figure shows the Measurement of Butterfly and pupae classification

The proponent identified different suppliers in remote areas like upland hills for breeding that would be involved and benefit from this study.

References
Hybrid Intrusion Detection System Using Artificial Bee Colony Algorithm and Multi-Layer Perceptron
Image Processing Filters for Grids of Cells Analogous to Filters Processing Grids of Pixels
Ferreira1, D. S. D. Lara2 & G. F. Silveira1. Cell quantification in Digital Contrast Microscopy Images with Convolutional Neural Networks Algorithm. (2023)E. K. G. D. https://www.nature.com/articles/s41598-023-29694-7
Image Processing Filters for Grids of Cells Analogous to Filters Processing Grids of Pixels. (2021). Bio-image Analysis Technology Development Group, DFG Cluster of Excellence “Physics of Life”, Technische Universität Dresden, Dresden, Germany, Center for Systems Biology Dresden, Dresden, Germany. Volume 3 - 2021 | https://doi.org/10.3389/fcomp.2021.774396
Ibrahim et.  al.(2019).Butterfly Species Identification Using Convolutional Neural Network (CNN).  Environmental science
Rumana Yasmin, Aparna Das, Liton Jude Rozario, Md. Ezharul Islam.2023. Butterfly detection and classification techniques: A review
https://doi.org/10.1016/j.iswa.2023.200214

https://www.sciencedirect.com/science/article/pii/S266730532300039X

+3 authors Shafaf Ibrahim
Published 1 June 2019
Environmental Science
Howard, Andrew G., et al. “Mobilenets: Efficient convolutional neural networks for mobile vision applications.” arXiv preprint arXiv:1704.04861 (2017).
Tan, Mingxing, and Quoc V. Le. “Efficientnet: Rethinking model scaling for convolutional neural networks.” arXiv preprint arXiv:1905.11946 (2019)

Mudongo, O. (2021). Work in progress in Computer Vision and AI Surveillance in Africa (AI4D) [Draft Research Report]. Research ICT Africa. https://researchictafrica.net/?post_type=publication&p=23368
https://researchictafrica.net/publication/research-report-work-in-progress-on-computer-vision/

Marks, J.  (2023).Changing Manufacturing in 2023
https://voxel51.com/blog/how-computer-vision-is-changing-manufacturing-in-2023/

LEARNING TO GROW PRETRAINED MODELS FOR
EFFICIENT TRANSFORMER TRAINING
Peihao Wang1∗ Rameswar Panda2 Lucas Torroba Hennigen4 Philip Greengard3
Leonid Karlinsky2 Rogerio Feris2 David D. Cox2 Zhangyang Wang1 Yoon Kim4
1University of Texas at Austin, 2MIT-IBM Watson AI Lab, 3Columbia University, 4MIT
{peihaowang,atlaswang}@utexas.edu, {rpanda, leonidka, david.d.cox}@ibm.com,
rsferis@us.ibm.com, pg2118@columbia.edu, {lucastor, yoonkim}@mit.edu
There are many authors who have written about butterfly larvae and pupae defects detection. Some of the notable authors in this field include:
Martinez-Alpiste, I., Golcarenarenji, G., Wang, Q. et al. Smartphone-based real-time object recognition architecture for portable and constrained systems. J Real-Time Image Proc 19, 103–115 (2022). https://doi.org/10.1007/s11554-021-01164-1
Acevedo. M.. Real-Time Environmental Monitoring Sensors and Systems, Earth Sciences, Environment and Sustainability, Physical Sciences(2017).https://doi.org/10.1201/b19209
Q. Zhang & G. Gao.Grasping Point Detection of Randomly Placed Fruit Cluster Using Adaptive Morphology Segmentation and Principal Component Classification of Multiple Features. (2019)
Dr. M. Sreerama Kumar - a scientist at the Indian Institute of Horticultural Research who has conducted research on the detection of pupal deformities in butterflies using digital imaging.
Dr. T.C. Evans - a researcher at the University of Hull who has studied the use of machine learning algorithms for the detection of defects in butterfly wings.
Dr. J.R. Bell - a biologist at the University of California, Davis who has conducted research on the genetics of butterfly wing development and deformities.
Dr. Robert Robbins - a biologist at the University of Arizona who has studied the use of imaging technology for the detection of defects in butterfly larvae and pupae.

These authors and many others have contributed to our understanding of butterfly larvae and pupae defects detection, and their research has led to the development of new techniques and technologies for detecting and treating these defects.

https://towardsdatascience.com/deploy-your-machine-learning-model-with-ml5-js-5202aaa48dbf

https://www.geeksforgeeks.org/multi-label-image-classification-prediction-of-image-labels/amp/





List of Figures 
List of Tables

APPENDIX A
User Authentication

User Authentication

Figure 3. shows the user authentication of the system. In Django, the system is serialized. 

Login page

Login system

Phase 3.2.1 shows the Login system


Figure . Login Page
Figure shows the Login Page of the system. 

User Interface of the Initial Prototype


User Interface
Figure  shows the user interface of the system, the non-breeders can learn to classify and recognize the butterflies and the butterfly itself for the benefits of educational purposes. 

Furthermore, the project used the OpenCV and ml5 libraries for image and video analysis. Moreover, searching for healthy stages of butterflies is easy to find and identify by the non-breeders when it is trained by the CNN model transfer learning. It contains features like Insect Identification or Insect ID, Stages of Butterfly Defects Detection, Pupae Defects Detection, and Disease Identification, 
Dashboard


Dashboard of the system where displays the multiple apps to use in the system for identifier and detection
Dashboard of the system
Design (System and Software Design)


Phase 3:2.2 shows the Design (System and Software Design)
The researchers used various software tools to perform different algorithms and designs. One of them is Python, a high-level language that is suited to system design. The system is a Progressive Web Application design and will be deployed on any of the following: Hugging Face, Heroku and DigitalOcean.

Choose butterfly Take Picture  Defects Details Classification
Choose Pupae Take Picture Defects Details Classification Treatment

Choose larvae Take Picture Diseases Details   Treatment Plans
Choose eggs Take Picture Eggs Defects Details Treatment Plans


📷 
🎥

Annex B
Sample Program of the Project

Login Page

def loginPage(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        userLogin = authenticate(username=username, password=password)
        if userLogin is not None:
            login(request, userLogin)
            return redirect("home")
        else:
            messages.info(request, "Username or Password incorrect.")
    context = {"title": "User Login"}
    return render(request, "account/login.html", context)

Model use of the project

model.add(Conv2D(16,(3,3),1,activation='relu',input_shape=(256,256,3)))
model.add(MaxPooling2D())
model.add(Conv2D(32, (3,3), 1, activation='relu'))
model.add(MaxPooling2D())
model.add(Conv2D(16, (3,3), 1, activation='relu'))
model.add(MaxPooling2D())
model.add(Flatten())
model.add(Dense(256, activation='relu'))
model.add(Dense(1, activation='sigmoid'))


ANNEX  C
Project Structure
Structure of butterfly classification and attributes, hostplants, image fruit, predators, viruses, and bacteria, etc.

Butterfly Classification

shows the Butterfly classification.

├── butterfly-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

Host plants classification

shows the Host plants classification
├── hostplants-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

Butterfly defects classification

shows the  Butterfly defects classification

├── butterfly-defects-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py


Pupae defects classification

shows the Pupae defects classification
.
├── pupae-defects-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

The larvae defects classification

shows the larvae defects classification
.
├── larvae-defects-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

The eggs defects classification

shows the eggs defects classification
.
├── eggs-defects-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

The Predators classification

shows the Predators classification
.
├── predators-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

The images fruits classification

It shows the  images fruits classification
.
├── image-fruits-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py

Figure 3.28 The virus and bacteria classification

Figure 3.28 shows the virus and bacteria classification
.
├── viruses_bacteria-images
│   ├── images
│   └── styles.csv
├── dataset.py
├── model.py
├── requirements.txt
├── split_data.py
├── test.py
└── train.py





ANNEX D
Research Interviews 
Figure 4. Demography age of breeder

Figure 4. shows the Demography age of breeder
Figure 4.1 Type of breeder or farmer

Figure 4.1 shows the Type of breeder 



Table 1.  Database of butterfly culture

Table 1. shows the Database of butterfly culture in Marinduque.
Statistical treatment of data involves the use of statistical methods such as mean, mode, median and regression, conditional, probability, sampling, standard deviation, and distribution range.

Table 1. The 18 types of butterflies' class labels are


Local name
English name
Scientific name

1.Semperi
BATWING BUTTERFLY
Atrophaneura semperi
2.Mariposa
ATLAS MOTH
Attacus atlas
3.Biblis
RED LACEWING
Cethosia biblis
4.Palipatos
COMMON MIME
Chilasa clytia
5.Chrysippus
PLAIN TIGER or AFRICAN MONARCH
Danaus chrysippus
6.Kiwig, Aga
TAILED JAY BUTTERFLY
Graphium agamemnon
7.Dozon
COMMON JAY
Graphium doson
8.Bolina
GREAT EGGFLY
Hypolimnas bolina
9.Yucono
PAPER KITE
Idea leuconoe
10.Kotsebuya
PINK ROSE
Pachliopta kotzebuea
11.Demolyos
COMMON LIME
Papilio demoleus
12.Pali
EMERALD SWALLOWTAIL
Papilio palinurus
13.Lowi
GREAT YELLOW MORMON
Papilio lowi
14.Poletes
COMMON MORMON
Papilio polytes
15.Pabo,Roman
SCARLET MORMON
Papilio rumanzovia
16.Samia
GIANT SILK MOTH
Samia luzonica
17.Silvia
CLIPPER
Parthenos sylvia
18.Cajavong
GOLDEN BIRDWING
Troides rhadamantus


Table 2. The 8 Butterfly defects class labels are


Tagalog to English
Defects of Butterfly
1.Guyumos na pakpak
crumpled wings
2.Sira o napunit na pakpak
torn wings
3.Kulang na paa
incomplete legs
4.Kulang ng sungot
unpaired antennae
5.Wasak na dibdib
broken thorax
6.Putol na panipsip
cut proboscis
7.Hiwang tiyan
slashed abdomen
8.Baleng pakpak
fractured wing veins

Table 3. The 4 types of pupa defects class labels are:


Tagalog to English
Defects of Pupae
1.Sobrang Bali
Overbend abdomen
2.May butas sa katawan
With the hole inside the flesh
3.Hatak na tyan
Stretched abdomen, stretch mark
4.Wala sa maayos na sukat
Unusual Size quality
5.Patay/Dedo
Deceased
6.Matigas na o matanda na
Matured and old


Table 4. The 5 types of larvae diseases class labels are


Diseases of larvae and pupae
1.Tachinid flies parasitism 
2.Ophryocystis elektroscirrha caused by protozoa
3.The nuclear polyhedrosis virus is commonly referred to as the black death. 
4.Bacterial diseases Trichogramma wasps, caused by anal prolapse dehydration. 
5.Baculoviruses (Baculoviridae) are occluded


Table 2. Weather example

Date
Wind Direction
Temperature
Celsius
Location
Air Humidity
3/25/2020
Wind power
Most Cloudy
30~24 •C
27 degree Celsius
Gasan
68%
3/26/2020
East Wind
Intermittent clouds 30~24 •C
29 degree Celsius
Gasan
67%


Table 2. shows the Weather temperature in degree Celsius in Gasan, Marinduque

Table of Task 
Title Benefits Status/Date
when to get cut host plants leaves
Remain fresh
Date
Date
to get flowers
To add nectar food 
Date
Date
clean sleeves regularly by removing feces 
To keep it safe from virus and ants 
Date
Date
clean the butterfly house
To keep away from predators and ants
Date
Date
picks up pupae from the host 
To keep away from parasites and viruses
Date
Date
pick up eggs
To keep away from gnats and ants
Date
Date
clean the bottle water and refill
To remove foul smell that make them suffocated and sick
Date
Date
check active larvae and choose the same instars to transfer
To organize the day old difference of the larvae to protect from eating the smallest larvae.
Date
Date
Clean the room for new sleeving
To protect from contamination of the previous larvae.
Date
Date


Treatments for Puparium
Heat the puparium

Table 5. The 3 types of eggs defects class labels are


Tagalog to English
Defects of eggs
1.Di akmang kulay
unusual colors
2.May kagat ng insekto
have insect bites of ants, gnats, sand mites, and
3.Walang palatandaan na bilog o buhay na dugo sa gitna
without an embryo ring or the dark color at the empirical center.

Table 6. The 14 types of host plants' class labels are:
Local name,
English name,
Scientific name


winged prickly ash
Zanthoxylum rhetsa 

Kamote,
Sweet potato vine, camote tops,
Ipomoea batatas

Amuyong,
Goniothalamus amuyon

Dregea Volubilis
Wattakaka/Tragia volubilis
Lemeoncito kastila, dayap-dayap
Limeberry, sweet lime

Triphasia trifolia
Parsonsia

Parsonsia
Parsonsia helicandra
Tetradium
Genus euodia

timbangan
Dutchman's pipe, Indian Tree
Aristolochia tagala
Guyabano, Soursop,
Annona muricata 

Kalamansi, kalamonding
calamondin, orange calamondin
Citrus microcarpa

Puso puso, basket-basket,
Heart veins,
Aristolochia foveolata 

Ivory,
Crown flower, Giant Milkweed

Calotropis gigantea
blood flower, tropical milkweed, scarlet milkweed
Asclepias curassavica

Kaitana,
Curry leaf, curry tree
Murraya koenigii

Tapias,
Parsonsia straminea

Lagaylay,
Common skillpod,
Tylophora hispida, Parsonsia helicandra, Parsonsia spiralis, Cynanchum formosanum

Suha/Lukban/Pomelo
Citrus maxima

Sintores/Dalandan,
Sweet Orange,
Citrus sinensis

Table 1. Requirements of the System Requirements
Tools
Uses
OS
Windows 8.1
WINDOW SERVER 2012
Dashboard
Streamlit 
Charts, Statistics
Front-end
JavaScript, CSS, HTML, RestAPI, Gradio
UX/UI
Back-end
Django Version 4.1
Python 3.10.5 or Python 3.11
Framework, IDE (PWA)
Database
PostgreSQL 14.5
Models, DRF

Table 1. shows the Requirements of the system


History of Exposure
Date
Place
Source
Category
Post-exposure
Parasitoids
Too wet
Too dry
Too cold 

Todo Treatment Task

Washing of the cage net
Heat the puparium
Remove all feces every day
Remove sick larvae
Remove the unusual color of the eggs 
Group the larvae into their instars 
Count all the larvae

Weather
Air Humidity refer to apps
Cloudy
Intermittent clouds 
Rainy
Mostly cloudy
Sunny
Mostly Sunny 
Partly sunny
Mostly Sunny with showers

Cabinet 
Location 1 
Location 2
Location 3


Receipt
You can print it to display in a location of the box or cabinet 
Prevention and treatment result in pdf format 

Proper Care  Management System of the Butterfly House

If the butterfly farm has no couple for the propagation
Hunt for wild butterflies in the mountains, by the riverside, and in the garden's weedy place of the flowers. 
Catch them by the soft catching net to store them inside the butterfly house.
Proper Care for its intervention
Always check if there are predators inside the house

Proper Care  Management System of the Butterflies for foraging

Assist the butterfly in foraging
Find for the flowers if there are no flowering plants inside the house
Put the petals to float with syrup on the foraging plate of the supported plate with water to be safe from the ants
Check it regularly if the flowers spoiled and have foul smell
Repeat every day

Check for predators in the house
View every other side of the house
Clean the house regularly
Remove spoiled and too wet items like bottled water to free from parasites

Proper Care Management System of the Eggs

Check for the host plant leaves for laying or ovipositing female butterflies 
Find the clean stem of leaves and drop it in the mouth of the bottled water
Hang the bottled water with stems of host plants for the female butterfly to post or lay their eggs underside of the leaves. 
Do not let the leaves dry or fall 
Change the leaves if necessary
Collects the eggs that are posted every day and stored them for safety

Proper Care Management System of the Larvae
Larvae Tachinid diseases
Larvae that have tachinid diseases require immediate attention before the disease takes over. Thoroughly dissect all species to prevent viral infections. Separate healthy larvae from the sick larvae. Clean the larval cabinet regularly. Transfer away to the safest cabinet like a new place for propagation.

Larvae Ophryocystis Disease
 Larvae that have Ophryocystis diseases require immediate attention before the disease takes over. Thoroughly dissect all species to prevent viral infections. Separate healthy larvae from the sick larvae. Clean the larval cabinet regularly. Transfer away to the safest cabinet like a new place for propagation.

Larvae Nuclear Polyhedrosis Disease
 Larvae that have Nuclear Polyhedrosis diseases require immediate attention before the disease takes over. Thoroughly dissect all species to prevent viral infections. Separate healthy larvae from the sick larvae. Clean the larval cabinet regularly. Transfer away to the safest cabinet like a new place for propagation.

Larvae Trichogramma Disease
 Larvae that have Trichogramma diseases require immediate attention before the disease takes over. Thoroughly dissect all species to prevent viral infections. Separate healthy larvae from the sick larvae. Clean the larval cabinet regularly. Transfer away to the safest cabinet like a new place for propagation.

Larvae Baculoviruses Disease
 Larvae that have Baculoviruses diseases require immediate attention before the disease takes over. Thoroughly dissect all species to prevent viral infections. Separate healthy larvae from the sick larvae. Clean the larval cabinet regularly. Transfer away to the safest cabinet like a new place for propagation. Heat the former cabinet of the larvae. 

Check the leaves for the day
Find for stems of crunchy soft leaves in the hostplants
Prépare thé leaves for thé larvae
Drop the stems in the mouth of the bottled water
Put the larvae on the leaves accordingly 
Use the light stick object to transfer it
Store it on the cabinet
Check the leaves if no more and changes the water in the bottle

Proper Care Management System of the Larval Diseases Treatment
Romasovia that have Larval disease name immediate attention before the disease takes over the larvae. Thoroughly check the leaves before putting it inside the larval cabinet. Gently wash the leaves with flowing water if necessary if there are foreign bodies may occur. This causes them to have a larval disease.

spray the plant (bottoms of leaves also) with Bonide Liquid Copper Fungicide concentrate or Bonide Tomato & Vegetable. Both of these treatments are organic..
Clean the cabinet
Clean the cabinet regularly by throwing their feces and you can use it for composting or fertilizers

Check the cabinet if there are predators 
Check if there are no predators, viruses, or aphids that can harm the larvae

Repeat 

Proper Care Management System of the Pupae
Check the puparium if there are no predators or any bacteria inside
Heat the Puparium every transfer of the new group of larvae for pupating
Clean the puparium regularly by throwing their feces and firmer skin, you can use it for composting fertilizer
Let them dry for a while before storing a group of larvae
Remove the sick larvae to prevent infection of the diseases. 

Annex E
User Manual
Proper Care Management System features
Butterfly Identification or Insect ID: Butterfly identification just got easier with Butterfly Identifier or Insect Identifier by displaying their scientific name and other attributes. Simply take a picture of an insect and the app will tell you the exact taxonomy of their species using machine learning.
By searching the host plants for larvae and pupae using the larvae and pupae detector, larvae and pupae can now be more easily identified. For example, many caterpillars are green, making them difficult to detect because they blend in with the host leaf. One way is by making themselves inconspicuous through the use of camouflage. In this case, the system will find and detect the object by capturing it on camera.
Butterfly Defects Detection: Butterfly pupae identification just got easier with Butterfly pupae Identifier, defects Identifier by object detection. Simply take a picture of pupae and the app will tell you the exact defects of their species using machine learning. A purchaser uses it to check the quality of pupae when receiving them from their clients. Examine the quality of healthy pupae before they are offered for sale to purchasers, such as checking or grading the quality of new technology.
Predator Identifier: Identifying butterflies' predators just got easier with the Predator or Intruder Identifier. Simply take a picture of an intruder and the app will tell you the exact predators of their species using machine learning. Even tiny species will be captured.
Gender Identification: Butterfly pupae gender identification just got easier with Butterfly Gender Identifier and Pupae Identifier by object detection. Simply take a picture of the abdomen of a pupa and a mature butterfly. The app will tell you the exact gender of their species using machine learning. 
Butterfly pupa measurements have just gotten easier with the incorporation of Butterfly Pupa Measurement and Pupa Quality by real-time object detection. Provide object measurements for pupa sizing on the packing assembly to suppliers. Simply take a picture of a pupa and the app will automatically tell you the exact quality measured for their species using machine learning. Also the shape and texture of the pupa in each species.
Plant Identifier and Image Fruit Identification: The system provides a host of tools for easy identification of plants, as well as fruit identification for classification. Simply take a picture of a host plant and the app will automatically tell you the exact host plant of their species using a machine-learning model. It is used for the preparation of training data for plant image analysis, host plants, and image fruit. Butterflies might be able to identify and classify species with the help of AI technology. The prediction of the host plants of butterflies and moths with an integrated management and recommendation system.
Match Identification (host plants and butterflies): With the matching identifier app, it is easy to identify by capturing a variety of food plants that the larvae consume. The system streamlines Plant identification with the Match Identifier of Butterfly and Host Plants Identifier and Fruit Identifier. Simply take a picture of a host plant and the app will tell you the exact species using machine learning.
A Control System for Temperature: This system is used in all areas to predict good and bad temperatures. It's essential to provide live updates to farmers regarding the amount of humidity in the air within a 4km radius of the farms. This will help them grow their food plants. Depending on the elevation, the temperature may vary in Celsius from temp_min to temp_max (low to moderate elevation, moderate to high). 
Task Scheduler and Response: It allows breeders to schedule their daily batches and species in order to manage and monitor their butterfly larvae for foraging. When to get leaves, when to get flowers, how to maintain sleeves, how to clean the butterfly house, how to pick up pupae, how to pick up eggs, how to disinfect the bottle of water and refill it, and how to choose the same instar to transfer. Clean the room for rearing. It recommends how to treat a larva inside the cage, how to raise butterfly pupae, and the importance of humidity.
Good News! ro be put in PPT see pictures as evidenced
Soon, the Butterfly Farmers Cooperative will be established in Marinduque by the sub-breeders, breeders, and purchasers with the approval and assistance of the municipality of Gasan. In addition, the Local Government Unit announced in November 2022 that the province of Marinduque is going to focus on butterfly production. The organization has already sponsored CONVERGENCE and established links with agencies such as DENR, Agriculture, etc. Butterfly production at Cawit, Boac, was already recognized and accredited by TESDA as early as September 2022.






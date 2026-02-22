#  Diabetic-Retinopathy-Detection-using-CNN

This project focuses on detecting the severity of **Diabetic Retinopathy (DR)** using a Convolutional Neural Network (CNN).  
The system allows users to upload a retinal image and predicts the severity level.

The model is trained using deep learning and deployed with a simple web interface.

---

##  Project Overview

Diabetic Retinopathy is a diabetes complication that affects the eyes.  
Early detection helps prevent vision loss.

This project:

- Trains a CNN model for DR classification
- Saves the trained model as `.h5`
- Deploys the model using a simple HTML, CSS, and JavaScript interface
- Allows image upload for severity prediction

---

##  Project Structure

```
Diabetic-Retinopathy-Detection-using-CNN/
│
├── index.html        # Frontend UI
├── styles.css        # Styling file
├── script.js         # Prediction logic
├── eye.h5            # Trained CNN model
└── README.md
```

---

##  Severity Classes

The model predicts one of the following severity levels:

- No Effect
- Mild
- Moderate
- Severe
- Proliferate

---

##  Model Details

- Model Type: Convolutional Neural Network (CNN)
- Framework: TensorFlow / Keras
- Saved Model Format: `.h5`
- Multi-class classification

---

##  How It Works

### 1️⃣ User Uploads Retinal Image
The user selects an image from their device.

### 2️⃣ Image Display
The uploaded image is displayed on the webpage.

### 3️⃣ Model Prediction
The trained CNN model (`eye.h5`) predicts the severity level.

### 4️⃣ Result Display
The predicted class is shown below the image.

---
Shiva B  
Deep Learning & AI Enthusiast

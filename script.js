function detectImage() {
    const imageUpload = document.getElementById('imageUpload');
    const resultSection = document.getElementById('resultSection');
    const resultText = document.getElementById('resultText');
    const uploadedImage = document.getElementById('uploadedImage');
  
    const file = imageUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        uploadedImage.src = event.target.result;
        resultSection.style.display = 'block';
        resultText.innerHTML = 'Mild';
      }
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  }
  
  //code for handling .h5 files:
  imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file && file.type.endsWith('.h5')) {
      (async () => {
        await processH5File(file);
      })();
    } else {
      detectImage();
    }
  });
  async function processH5File(file) {

    const model = await tf.loadLayersModel('eye.h5'); 
    const prediction = model.predict(eye.processH5File);  
    resultText.innerHTML = 'Prediction: ' + prediction;  
  }
  
  imageUpload.accept = 'image/*, .h5';
  
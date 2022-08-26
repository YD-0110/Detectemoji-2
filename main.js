Webcam.set({//the set function sets the properties of the camera
    width:350,
    height:300,
    img_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}


console.log('ml5 version : ', ml5.version);
//imageClassifier is a predefined function of ml5.js that is used to trigger the ml5.js image classification function
//we are adding model.json at the end of the link because we just want to access the model created in a teachable machine and nothing else from the model which has been created.
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MFzmXDDxO/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

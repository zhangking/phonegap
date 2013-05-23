function onDeviceReady() {

pictureSource = navigator.camera.PictureSourceType;

destinationType = navigator.camera.DestinationType;

}
function onPhotoDataSuccess(imageData) {
	alert(imageData);
	var smallImage = document.getElementById('show_photo');

	//smallImage.src = "data:image/jpeg;base64," + imageData;
	smallImage.src = imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
	alert(imageURI);
	var largeImage = document.getElementById('show_photo');

	//largeImage.src = "data:image/jpeg;base64," + imageData;
	largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
	    navigator.camera.getPicture(uploadPhoto, onFail, {
		quality : 50,
		destinationType : Camera.DestinationType.DATA_URL,
		sourceType : Camera.PictureSourceType.CAMERA,
		allowEdit : true,
		encodingType : Camera.EncodingType.JPEG,
		popoverOptions : CameraPopoverOptions,
		saveToPhotoAlbum : true
	});
}

function capturePhotoEdit() {
	    navigator.camera.getPicture(uploadPhoto, onFail, {
		quality : 10,
		allowEdit : true,
		destinationType : destinationType.DATA_URL,
		saveToPhotoAlbum : true
	});
}


function getPhoto(source) {
	    navigator.camera.getPicture(uploadPhoto, onFail, {
		quality : 50,
		destinationType : destinationType.DATA_URL,
		sourceType : source
	});
}

function onFail(message) {
	alert('Failed because: ' + message);
}

function uploadPhoto(image) {
	var src= "data:image/jpg;base64,"+image;
	$("#show_photo")[0].src=src;
}


const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

const axios = require('axios').default;

exports.processImage = functions.storage.object().onFinalize(async (object) => {
  const bucketName = object.bucket;
  const filePath = object.name;
  const metadata = object.metadata;

  const file = admin.storage().bucket(bucketName).file(filePath);
  const data = await file.download();
  const imageBuffer = data[0];

  const cloudRunEndpoint = 'https://my-cloud-run-service-12345.a.run.app/process-image';
  const requestData = {
    bucket: bucketName,
    filePath: filePath,
    imageBuffer: imageBuffer.toString('base64'),
    metadata: JSON.stringify(metadata),
  };
  const response = await axios.post(cloudRunEndpoint, requestData);

  console.log('Cloud Run response:', response.data);
});

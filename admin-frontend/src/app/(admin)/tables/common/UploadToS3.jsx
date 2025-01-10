/// <reference types="vite/client" />
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const secretAccessKey = import.meta.env.VITE_S3_SECRET_KEY
const accessKeyId = import.meta.env.VITE_S3_ACCESS_KEY
const bucket = import.meta.env.VITE_S3_BUCKET_NAME
const region = import.meta.env.VITE_S3_REGION

const client = new S3Client({
  region,
  credentials: {
    secretAccessKey,
    accessKeyId,
  },
})

const uploadToS3 = async (folder, file) => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: folder + '/' + file.name,
    Body: file,
  })

  if (!file.type.includes('image')) {
    return 'Invalid file type'
  }

  if (file.size > 5 * 1024 * 1024) {
    return 'Image size should be less than 5MB'
  }

  try {
    const response = await client.send(command)
    console.log(response)
  } catch (err) {
    console.error(err)
  }
  // Access link will be this one
  return `https://${bucket}.s3.${region}.amazonaws.com/${folder}/${file.name}`
}

export default uploadToS3

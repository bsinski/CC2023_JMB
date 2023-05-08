<template>
  <div id="input">
    <p style="color:red;font-size:30px;text-align:center">Input image</p>
    
  </div>
  <div align="center">
  <input type="file" accept="image/*" @change="onChange" />
    
  </div>
  <button @click="submitFile">Upload!</button>
  <div align="center">
    <img v-if="item.imageUrl" :src="item.imageUrl" 
         alt="Insert image"
         width="500"
         height="300"/>
  </div>
  <div align="center">
    <div id="input">
    <p style="color:red;font-size:30px;text-align:center">Output image</p>
    
  </div>
  <img src="https://dirask.com/static/bucket/1631898942509-VMYrnXyYZv--image.png"
     alt="loading...">
	</div>
</template>


<script>
import { storage } from "./firebase"
import { ref, uploadBytes } from  "firebase/storage"

export default {
  name: 'imageUpload',
  data() {
    return {
      item:{
          //...
          image : "Insert image",
          imageUrl: "https://stoneontop.pl/wp-content/uploads/2020/10/k011.jpg"
      }
    }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
    },
    submitFile() {
      const storageRef = ref(storage, "input/"+this.image.name);
      uploadBytes(storageRef, this.file).then((snapshot)=>{
        console.log(snapshot)
      })
      }
  }
} 
 

</script>
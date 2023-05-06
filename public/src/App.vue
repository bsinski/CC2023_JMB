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
  import axios from 'axios'
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
      const fd = new FormData()
      fd.append("image", this.image, this.image.name)
        axios.post("gs://cc2023-a7edf.appspot.com").then(res=>console.log(res))
   
      }
  }
} 
  function changeImage(image) {
        image.src = 'https://dirask.com/static/bucket/1631898942509-VMYrnXyYZv--image.png?' + Date.now();
    }

</script>
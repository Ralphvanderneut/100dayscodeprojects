<template>
    <div class="flex flex-row self-center w-full">
        <button class="bg-blue-900 text-white" @click="PrevImage"> prev</button>
        <img :src="ImageToShow" class="h-48 w-48 object-contain" />
        <button  class="bg-blue-900  text-white" @click="NextImage"> next</button>
    </div>
</template>

<script lang="ts">
import { defineComponent , ref , computed} from 'vue'

export default defineComponent({
    setup () {
        const index = ref(0);
        const imagesTo = ref(["tweety.jpg","SketchPad.png","Vinyl-Sugar-Dorbz-Looney-Tunes-Daffy-Duck.jpg" ]);
        const NextImage = (): void => {
            if(index.value > imagesTo.value.length-2) {
                index.value=0;
            }else{
                index.value++;
            }
        }
        
        const PrevImage = (): void => {
            if(index.value <= 0) {
                index.value=imagesTo.value.length-1;
            }else{
                index.value--;
            }
        }
     
        const ImageToShow = computed((): string => {
            return `/drawing/${imagesTo.value[index.value]}`;
        })

        return {NextImage, PrevImage, ImageToShow}
    }
})
</script>

<style scoped>

</style>
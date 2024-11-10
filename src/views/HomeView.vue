<template>
  <main>
    {{user.name}}
 
  </main>
</template>

<script setup>
import  { useUser} from '@/stores/user'
import  {onMounted} from  'vue'
const user =useUser();

onMounted(()=>{
  user.setUserName('aa')
})

</script>
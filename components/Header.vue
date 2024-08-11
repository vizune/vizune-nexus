<script setup>
import { ref } from 'vue'

const header = ref(null)

const scrollToHeader = () => {
  header.value.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <div class="flex flex-wrap justify-center relative mx-auto h-[500px] w-full overflow-hidden" ref="header">
      <div class="relative w-full">
        <picture>
          <source media="(max-width: 640px)" srcset="/header-xs.webp" />
          <source media="(max-width: 1024px)" srcset="/header-md.webp" />
          <source media="(max-width: 1280px)" srcset="/header-lg.webp" />
          <img 
            src="/header-long.webp"
            role="presentation"
            class="h-[500px] object-cover object-[10%] xl:object-center"
            width="1920"
            height="500"
          />
        </picture>

        <svg 
          class="lg:cursor-pointer absolute top-1/4 lg:top-1/2" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          x="0px" y="0px" viewBox="0 0 540 691.167" 
          enable-background="new 0 0 540 691.167" 
          xml:space="preserve" 
          fill="#fff"
          @click="scrollToHeader"
        >
            <path d="M531.236,0.015l-261.28,692.122L7.591-0.787h64.825l197.351,519.682C271.466,514.46,465.656,0.015,465.656,0.015H531.236z"></path>
            <path class="logo-circle" d="M337.625,137.267c0,17.834-14.457,32.292-32.292,32.292s-32.292-14.457-32.292-32.292s14.457-32.292,32.292-32.292
                                S337.625,119.433,337.625,137.267z"></path>
            <path d="M404.201,61.348h-203.41l50.482,128.753c-3.68,4.907-5.85,10.993-5.85,17.598c0,16.324,13.257,29.582,29.629,29.582
                                c10.852,0,20.382-5.85,25.477-14.626v35.243h-88.556L110.867,0.015h316.621L404.201,61.348z M247.687,180.941l12.063,29.725
                                c0,0-2.875,3.75-3.25,3.75s-21.375-8.375-21.25-8.875s1.375-15.125,2.375-16.625S247.687,180.941,247.687,180.941z M330,257.898
                                H223.333v-52.065H349.79L330,257.898z"></path>
        </svg>
      </div>
      <span class="uppercase font-forum absolute bottom-0 text-[5rem] xl:text-[4.5rem] text-white tracking-wider">
        Vizune
      </span>
	</div>
</template>

<style scoped>
svg {
    left: calc(50% + 4px);
    transform: translate(-50%,-50%);
    height: 150px;
    transition: transform .25s ease-in-out;
    transform-origin: center;
}
svg:hover {
  transform: scale(1.1) translate(-45%,-40%);
}
span {
    padding: 0 2rem;
    -webkit-animation: glow 1.5s ease-in-out infinite alternate 1s;
    animation: glow 1.5s ease-in-out infinite alternate 1s;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 30px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6;
  }
}
</style>
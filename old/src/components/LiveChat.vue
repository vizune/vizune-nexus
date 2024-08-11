<script setup>
import { ref } from 'vue'

let toggle = ref(false);

const toggleChat = () => {
    toggle.value = !toggle.value;
}
</script>

<template>
    <div class="LiveChat flex flex-col align-end md:fixed mt-4 md:mt-0" :class="{ 'is-open': toggle }">
        <button class="LiveChat-button" @click="toggleChat">
            <div class="flex justify-between align-center">
                <svg class="icon hidden md:block">
                    <use :xlink:href="`#${toggle ? 'up' : 'down'}Arrow`"></use>
                </svg>
                <span>Chat</span>
                <svg class="icon">
                    <use xlink:href="#comment"></use>
                </svg>
            </div>
            
        </button>
        <div class="LiveChat-window">
        <!-- BEGIN CBOX - www.cbox.ws - v4.3 -->
        <div id="cboxdiv" style="position: relative; margin: 0 auto; width: 100%; font-size: 0; line-height: 0;">
            <div style="position: relative; height: 350px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;">
                <iframe title="Vizune Chatbox window" src="https://www7.cbox.ws/box/?boxid=548557&boxtag=kb26kf&sec=main" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain7-548557" id="cboxmain7-548557"></iframe>
            </div>
            <div style="position: relative; height: 82px; overflow: hidden; border: 0px solid; border-top: 0px;">
                <iframe title="Vizune Chatbox form" src="https://www7.cbox.ws/box/?boxid=548557&boxtag=kb26kf&sec=form" allow="autoplay" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform7-548557" id="cboxform7-548557"></iframe>
            </div>
        </div>
        <!-- END CBOX -->
        </div>
    </div>	
</template>

<style scoped>
@media (min-width: 768px) {
    .LiveChat {
        width: 300px;
        bottom: 0;
        right: 0;
        transform: translateY(calc(100% - 50px));
        transition: .35s ease;
        z-index: 10;
    }
    .LiveChat.is-open {
        transform: translateY(0);
    }
}
</style>
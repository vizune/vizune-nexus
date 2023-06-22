<script setup>
import Widget from './Widget.vue';
import Social from './Social.vue';
</script>

<template>
    <footer id="Footer" class="bg-dark w-full py-6 px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Widget heading="Affiliates">
            <div class="flex justify-center gap-4">
                <a href="https://affeli.us/" target="_blank" title="Affelius"><img src="buttons/affelius.png" alt="Affiliate: Affelius button" /></a>
                <a href="http://mfd.aki-mono.com/" target="_blank" title="Moonflame Designs"><img src="buttons/moonflame-designs.png" alt="Affiliate: Moonflame Designs button" /></a>
            </div>
        </Widget>
        <Widget heading="Social">
            <Social />
        </Widget>
        <Widget heading="Chat">
            <!-- BEGIN CBOX - www.cbox.ws - v4.3 -->
            <div id="cboxdiv" style="position: relative; margin: 0 auto; width: 350px; font-size: 0; line-height: 0;">
            <div style="position: relative; height: 100px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;">
                <iframe src="https://www7.cbox.ws/box/?boxid=548557&boxtag=kb26kf&sec=main" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain7-548557" id="cboxmain7-548557"></iframe>
            </div>
            <div style="position: relative; height: 82px; overflow: hidden; border: 0px solid; border-top: 0px;">
                <iframe src="https://www7.cbox.ws/box/?boxid=548557&boxtag=kb26kf&sec=form" allow="autoplay" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform7-548557" id="cboxform7-548557"></iframe>
            </div>
            </div>
            <!-- END CBOX -->	
        </Widget>
    </footer>
</template>

<style scoped>
</style>
<template lang="">
    <div class="widget-demo">
        <Countdown v-if="demoName === 'countdown'"/>
        <Popup v-if="demoName === 'popup'"/>
        <StickyPopup v-if="demoName === 'sticky-popup'"/>
    </div>
</template>
<script>
import Countdown from './countdown/cowntdown';
import Popup from './popup';
import StickyPopup from './sticky-popup';

export default {
    props: {
        demoName: String
    },
    components: {
        Countdown,
        Popup,
        StickyPopup
    }
}
</script>
<style lang="">
    
</style>
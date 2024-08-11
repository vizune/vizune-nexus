<template>
    <main class="Content container mx-auto pb-[3.5rem]">
        <div class="bg-white p-1 mx-4">
            <div class="Corners-top">
                <NuxtImg 
                    format="webp" 
                    width="150" 
                    height="150" 
                    src="/floral-corner.png" 
                    role="presentation" 
                />
                <NuxtImg 
                    format="webp" 
                    width="150"
                    height="150" 
                    src="/floral-corner.png" 
                    role="presentation" 
                />
            </div>
            <div class="border-4 border-midnight flex flex-col justify-between py-[4rem] md:py-6 md:pb-[8rem]">
                <div class="px-6 md:px-[4rem] xl:px-[8rem] py-6 grow-1">
                    <slot />
                </div> 
            </div>
            <div class="Corners-bottom">
                <NuxtImg 
                    format="webp" 
                    width="150" 
                    height="150" 
                    src="/floral-corner.png" 
                    role="presentation" 
                />
                <NuxtImg 
                    format="webp"
                    width="150"
                    height="150"
                    src="/floral-corner.png"
                    role="presentation" 
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
$corner-size: 150px;
$corner-offset: 1px;

.Corners {
    &-top {
        position: relative;
        width: 100%;

        > *:first-child {
            position: absolute;
            top: $corner-offset;
            left: $corner-offset;
            height: $corner-size;
            width: $corner-size;
        }

        > *:last-child {
            content: '';
            position: absolute;
            top: $corner-offset;
            right: $corner-offset;
            height: $corner-size;
            width: $corner-size;
            transform: rotate(90deg);
        }
    }

    &-bottom {
        position: relative;
        width: 100%;

        > *:first-child {
            position: absolute;
            bottom: $corner-offset;
            left: $corner-offset;
            height: $corner-size;
            width: $corner-size;
            transform: rotate(-90deg);
        }

        > *:last-child {
            position: absolute;
            bottom: $corner-offset;
            right: $corner-offset;
            height: $corner-size;
            width: $corner-size;
            transform: rotate(180deg);
        }
    }
}
</style>
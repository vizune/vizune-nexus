<script setup>
  import { POSTS_AVATARS_100, POSTS_AVATARS_200, POSTS_AVATARS_400 } from '../../config.js';
  import Tabs from '../components/Tabs/Tabs.vue';
  import TabItem from '../components/Tabs/TabItem.vue';
  import AvatarCategory from '../components/AvatarCategory.vue';

  const posts100 = await fetch(POSTS_AVATARS_100)
  .then((r) => r.json());

  const posts200 = await fetch(POSTS_AVATARS_200)
  .then((r) => r.json());

  const posts400 = await fetch(POSTS_AVATARS_400)
  .then((r) => r.json());

</script>

<template>
  <div>
    <h1>Avatars</h1>
    <Tabs>
      <TabItem title="100 x 100">
        <AvatarCategory 
          :category="100"
          title="100 x 100 avatars"
          :posts="posts100"
        />
      </TabItem>
      <TabItem title="200 x 200">
        <AvatarCategory 
          :category="200"
          title="200 x 200 avatars"
          :posts="posts200"
        />
      </TabItem>
      <TabItem title="400 x 400">
        <AvatarCategory 
          :category="400"
          title="400 x 400 avatars"
          :posts="posts400"
        />
      </TabItem>
    </Tabs>
  </div>
</template>
<script setup>
import Pagination from '../components/Pagination/Pagination.vue';

const posts = await fetch(import.meta.env.VITE_POSTS_BLOG)
.then((r) => r.json());

const sortedPostsByDate = posts.items.sort((a,b) => a.fields.publishDate < b.fields.publishDate ? 1 : -1);
</script>

<template>
    <div>
      <img src="https://images.ctfassets.net/89ruixmjhco6/FYEIcyqvTQidcfrxFAfRb/f0c23f709993fff00887645f92966adf/halloween-header.png" alt="Happy Halloween" class="mb-8" />
      <div class="flex justify-center mb-8">
        <form method="post" action="https://poll.pollcode.com/58926831"><div style="background-color:#000000;padding:2px;width:311px;font-family:Palatino Linotype;font-size:small;color:#FFFFFF;"><div style="padding:2px 0px 4px 2px;"><strong>What would you like to see more on Vizune.com</strong></div><input type="radio" name="answer" value="1" id="answer589268311" style="float:left;" /><label for="answer589268311" style="float:left;width:286px;">Avatars</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="2" id="answer589268312" style="float:left;" /><label for="answer589268312" style="float:left;width:286px;">Renders</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="3" id="answer589268313" style="float:left;" /><label for="answer589268313" style="float:left;width:286px;">Web Templates</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="4" id="answer589268314" style="float:left;" /><label for="answer589268314" style="float:left;width:286px;">Coding tutorials</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="5" id="answer589268315" style="float:left;" /><label for="answer589268315" style="float:left;width:286px;">Photoshop tutorials</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="6" id="answer589268316" style="float:left;" /><label for="answer589268316" style="float:left;width:286px;">PSD Downloads</label><div style="clear:both;height:2px;"></div><input type="radio" name="answer" value="7" id="answer589268317" style="float:left;" /><label for="answer589268317" style="float:left;width:286px;">Other (Click View to add a comment)</label><div style="clear:both;height:2px;"></div><div align="center" style="padding:3px;"><input type="submit" value=" Vote ">&nbsp;<input type="submit" name="view" value=" View "></div><div align="right" style="font-size:10px">pollcode.com <a href="https://pollcode.com/">free polls</a></div></div></form>
      </div>
      <h1>News & Updates</h1>
      <Pagination
        :items="sortedPostsByDate"
        :itemsPerPage="6"
        gridClass="grid grid-cols-1 lg:grid-cols-2 gap-5"
        :assets="posts.includes.Asset"
        category="blog"
      >
      </Pagination>
      </div>
</template>
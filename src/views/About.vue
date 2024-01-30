<script setup>
import Tabs from '../components/Tabs/Tabs.vue';
import TabItem from '../components/Tabs/TabItem.vue';



const imageSources = [
  {
    name: 'MiniTokyo',
    url: 'http://www.minitokyo.net/'
  },
  {
    name: 'Creative Uncut',
    url: 'https://www.creativeuncut.com/'
  },
  {
    name: 'Shuushuu Image Board',
    url: 'https://e-shuushuu.net/'
  }
]

const designSources = [
  {
    name: '99 Mockingbirds @ DeviantArt',
    url: 'https://www.deviantart.com/99mockingbirds'
  },
  {
    name: 'adriano09 @ DeviantArt',
    url: 'http://adriano09.deviantart.com/'
  },
  {
    name: 'AF Studios @ DeviantArt',
    url: 'http://af-studios.deviantart.com/'
  },
  {
    name: 'Arabesco Resources @ DeviantArt',
    url: 'http://arabesco-resources.deviantart.com/'
  },
  {
    name: 'Bloomotion',
    url: 'http://bloomotion.com/'
  },
  {
    name: 'Brush King',
    url: 'http://www.brushking.eu/'
  },
  {
    name: 'BTTRFLYKISS @ DeviantArt',
    url: 'https://www.deviantart.com/bttrflykiss'
  },
  {
    name: 'Carllton @ DeviantArt',
    url: 'http://carllton.deviantart.com/'
  },
  {
    name: 'Car0usel (Closed)',
    url: 'http://car0usel.net/'
  },
  {
    name: 'Chambertin @ DeviantArt',
    url: 'http://chambertin.deviantart.com/'
  },
  {
    name: 'Chazzief @ DeviantArt',
    url: 'https://www.deviantart.com/chazzief'
  },
  {
    name: 'Cilou @ MiniTokyo',
    url: 'http://cilou.minitokyo.net'
  },
  {
    name: 'Colordipped (Closed)',
    url: 'http://colordipped.com/'
  },
  {
    name: 'Coy Dreamer @ Brusheezy',
    url: 'https://www.brusheezy.com/members/coydreamer'
  },
  {
    name: 'Crazy Kira Resources @ DeviantArt',
    url: 'http://crazykira-resources.deviantart.com/'
  },
  {
    name: 'Darciana @ LiveJournel',
    url: 'http://darciana.livejournal.com/'
  },
  {
    name: 'Dastardly Icons @ DeviantArt',
    url: 'http://www.dastardly-icons.deviantart.com/'
  },
  {
    name: 'Estriella @ DeviantArt',
    url: 'http://estriella.deviantart.com/'
  },
  {
    name: 'Gerry Ray @ DeviantArt',
    url: 'http://gerryray.deviantart.com/'
  },
  {
    name: 'iAmFreeman @ DeviantArt',
    url: 'http://iamfreeman.deviantart.com/'
  },
  {
    name: 'Ihea @ DeviantArt',
    url: 'http://ihea.deviantart.com/'
  },
  {
    name: 'JavierZHX @ DeviantArt',
    url: 'http://javierzhx.deviantart.com/'
  },
  {
    name: 'Jessiesquash @ DeviantArt',
    url: 'http://jessiesquash.deviantart.com/'
  },
  {
    name: 'Master Jinn @ DeviantArt',
    url: 'http://masterjinn.deviantart.com/'
  },
  {
    name: 'mayrarose @ DeviantArt',
    url: 'https://www.deviantart.com/mayrarose'
  },
  {
    name: 'Moonchilde Stock @ DeviantArt',
    url: 'http://moonchilde-stock.deviantart.com/'
  },
  {
    name: 'Narcoticplease @ DeviantArt',
    url: 'http://narcoticplease.deviantart.com/'
  },
  {
    name: 'Obsidian Dawn',
    url: 'http://www.obsidiandawn.com/'
  },
  {
    name: 'Quiescent (Closed)',
    url: 'http://quiescent.three-words.net/'
  },
  {
    name: 'Ryoko30 @ DeviantArt',
    url: 'http://ryoko30.deviantart.com/'
  },
  {
    name: 'Sanami276 @ DeviantArt',
    url: 'http://sanami276.deviantart.com/'
  },
  {
    name: 'Shinwa (Closed)',
    url: 'http://shinwa.webs.com/'
  },
  {
    name: 'ShiftyJ @ DeviantArt',
    url: 'http://shiftyj.deviantart.com/'
  },
  {
    name: 'Shizoo Design @ DeviantArt',
    url: 'https://www.deviantart.com/shizoo-design'
  },
  {
    name: 'Sirius-sdz @ DeviantArt',
    url: 'http://sirius-sdz.deviantart.com/'
  },
  {
    name: 'Snow Drops',
    url: 'https://snow-drops.org/'
  },
  {
    name: 'So-ghislaine @ DeviantArt',
    url: 'https://www.deviantart.com/so-ghislaine'
  },
  {
    name: 'Spiritcoda @ DeviantArt',
    url: 'https://www.deviantart.com/spiritcoda'
  },
  {
    name: 'Station (Closed)',
    url: 'http://station.chanlu.org/'
  },
  {
    name: 'Struckdumb @ DeviantArt',
    url: 'http://struckdumb.deviantart.com/'
  },
  {
    name: 'SunnyGirl333 @ DeviantArt',
    url: 'http://sunnygirl33.deviantart.com/'
  },
  {
    name: 'Subtle Patterns',
    url: 'http://subtlepatterns.com/'
  },
  {
    name: 'Swimchick (Closed)',
    url: 'http://swimchick.net/'
  },
  {
    name: 'sxc.hu (Closed)',
    url: 'http://sxc.hu/'
  },
  {
    name: 'xnienke @ DeviantArt',
    url: 'http://xnienke.deviantart.com/'
  },
  {
    name: 'Yunyunsarang @ DeviantArt',
    url: 'http://www.yunyunsarang.deviantart.com/'
  },
  {
    name: 'Silverqe @ LiveJournal',
    url: 'http://silverqe.livejournal.com/'
  },
  {
    name: 'Yamaro-ks @ DeviantArt',
    url: 'https://www.deviantart.com/yamaro-ks'
  },
  {
    name: 'Zy0rg @ DeviantArt',
    url: 'http://zy0rg.deviantart.com/'
  }
]

const linkExchangeList = [
  {
    name: 'Dreamscape',
    url: 'http://dreamscape.ezyro.com'
  },
  {
    name: 'Mishipaper Graphics',
    url: 'https://mishipaper.tumblr.com/'
  },
  {
    name: 'Neotokio3TV',
    url: 'https://www.youtube.com/@Neotokio3TV/'
  },
  {
    name: 'Resplendent Reverie',
    url: 'http://reverie.dragonebula.net/',
  }
]

const linkExchangeButtons = [
  {
    name: 'Aqua Cure',
    url: 'https://graphics.twilight-realm.com/',
    image: '/buttons/aqua-cure.png'
  },
  {
    name: 'Dark Passion GFX',
    url: 'http://www.dp-gfx.de',
    image: '/buttons/dark-passion-gfx.jpg'
  },
  {
    name: 'Eccentricity',
    url: 'http://eccentricity.sammiirose.com/',
    image: '/buttons/eccentricity.png'
  },
  {
    name: 'Numbers of the Sky',
    url: 'https://numbersofthesky.tumblr.com/',
    image: '/buttons/numbers-of-the-sky.jpg'
  },
  {
    name: 'Red Velvet',
    url: 'https://redvelvet.cc/',
    image: '/buttons/red-velvet.gif'
  },
  {
    name: 'Twilight Pentagram',
    url: 'https://twilightpentagram.neocities.org/',
    image: '/buttons/twilight-pentagram.png'
  },
  {
    name: 'Violin Star',
    url: 'https://violinstar.net/',
    image: '/buttons/violin-star.gif'
  }
]

</script>

<template>
  <div>
    <h1>About Vizune.com</h1>
    <Tabs>
      <TabItem title="The site">
        <div class="md:grid md:grid-cols-2 md:grid-row-2 gap-6" style="grid-template-columns: auto auto;">
          <div class="h-40 md:h-80 flex justify-center mb-6 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 691.167" xml:space="preserve" class="h-full" alt="Vizune logo"><path d="m531.236.015-261.28 692.122L7.591-.787h64.825l197.351 519.682C271.466 514.46 465.656.015 465.656.015h65.58z"/><path class="logo-circle" d="M337.625 137.267c0 17.834-14.457 32.292-32.292 32.292s-32.292-14.457-32.292-32.292 14.457-32.292 32.292-32.292 32.292 14.458 32.292 32.292z"/><path d="M404.201 61.348h-203.41l50.482 128.753a29.208 29.208 0 0 0-5.85 17.598c0 16.324 13.257 29.582 29.629 29.582a29.415 29.415 0 0 0 25.477-14.626v35.243h-88.556L110.867.015h316.621l-23.287 61.333zM247.687 180.941l12.063 29.725s-2.875 3.75-3.25 3.75-21.375-8.375-21.25-8.875 1.375-15.125 2.375-16.625 10.062-7.975 10.062-7.975zM330 257.898H223.333v-52.065H349.79L330 257.898z"/></svg>
          </div>
          <div>
            <h2>What is 'Vizune'?</h2>
            <p>Vizune is an amalgamation of the words “visual” and “rune” (a letter from an ancient alphabet). I designed the logo inspired by runes and made it appear like an eye inside a “V” letter and the individual elements can spell out the name. The name is pronounced as “Ve-zoo-ney” similar to how you say Kitsune (means "Fox" in Japanese).</p>
            <div>
              <img src="/about-section/logo-name.jpg" title="Elements of the Vizune logo can spell out the name" alt="Elements of the Vizune logo can spell out the name" class="h-40 mb-4 m-auto" />
            </div>
            <p>This website is my personal sanctuary where I experiment and dabble in graphic design, web design and web development. I use Adobe Photoshop to create graphics such as avatars. I provide resources such as renders to help you create your own graphics. There are web templates available to download that you can use for your own website or learn from the code to build your own.</p>
          </div>
          <div class="flex justify-center mb-6 md:mb-0">
            <img src="/about-section/vizune-avatar.png" role="presentation" style="height: 290px;" />
          </div>
          <div>
            <h2>History of Vizune</h2>
            <p>I have owned the Vizune.com domain since 2009. The website momentarily had the slogan of "Cyberpunk Workshop" because I was really interested in making skeuomorphic tech designs at the time. I used the N-Gage font as the logo which you will still see being used in my older web templates and render watermarks. Websites in the community back then commonly used a PHP CMS called Cutenews.</p>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-4 mb-6">
              <img src="/about-section/vizune-2009.png" alt="Screenshot of Vizune.com in 2009" title="Screenshot of Vizune.com in 2009 featuring Asuka from Tekken" />
              <img src="/about-section/SwordDance.png" alt="Screenshot of web template called Sword Dance featuring Maria from Burst Angel" title="Screenshot of web template called Sword Dance featuring Maria from Burst Angel" />
            </div>
            <p>My design style changed to magical / mystical and I decided to create a new website in 2010 called Project NIXI (N91) hosted on <em>nixi.spiderwalls.net</em> and the Vizune.com domain was used it as a portfolio website when applying for internships as a Junior Front End Developer. Eventually I moved my graphics website back to the domain in 2012 (once I got the job haha). Around this time I transitioned to using the CMS, Wordpress.</p>
            <div class="flex flex-col md:grid md:grid-cols-2 gap-4">
              <a href="https://www.deviantart.com/vizune/art/Vizune-com-V2-285390944" target="blank" title="Screenshot of Old Vizune Portfolio">
                <img src="/about-section/vizune-portfolio.jpg" alt="Screenshot of Old Vizune Portfolio" />
              </a>
              <a href="https://www.deviantart.com/vizune/art/Project-NIXI-Lyric-01-175986723" target="blank" title="Screenshot of Project NIXI website">
                <img src="/about-section/project-nixi.png" alt="Screenshot of Project NIXI website" />
              </a>
            </div>
          </div>
        </div>
      </TabItem>
      <TabItem title="The owner">
        <h2 class="text-center">The Owner</h2>
        <div class="md:grid md:grid-cols-2 md:grid-row-2 gap-6" style="grid-template-columns: auto auto;">
          <div class="flex flex-col mb-6 md:mb-0 items-center">
            <img src="/about-section/me-photo.jpg" role="presentation" class="mb-4" style="height: 290px;" />
            <img src="/about-section/me-anime.jpg" role="presentation" style="height: 290px;" />
          </div>
          <div>
            <ul class="mb-4">
              <li><strong>Name:</strong> Sasha</li>
              <li><strong>Age:</strong> 32</li>
              <li><strong>Birthday:</strong> 22nd March</li>
              <li><strong>Location:</strong> England</li>
              <li><strong>Career:</strong> UI Developer (10 years experience in Front End Web Development)</li>
              <li><strong>Random stuff:</strong> I'm left-handed, I have 3 tattoos on my right leg, I have a red belt in kickboxing, quiet but wild on the dancefloor</li>
            </ul>

            <h2 class="mb-2">Favourites</h2>
            <p><strong>Favourite anime:</strong> Ghost in the Shell: Innocence, Ponyo, Nana, Mob Psycho 100, Kakegurui, Dead Leaves, Saint Young Man, Paradise Kiss, Witchblade, Promare, Made in Abyss, Dragonball Z, Genius Party Beyond, Fate/Stay Night series, Chainsaw Man, Paprika, Noragami, Durarara!!, Elfen Lied, Ergo Proxy, Serial Experiments Lain, Simoun, Flip Flappers, Kill la Kill, Space Dancy, Tenchi Muyo, Outlaw Star, Death Parade, Tengen Toppa Gurren Lagann, One Punch Man, Blame!</p>
            <p><strong>Favourite games:</strong> Labyrinth of Refrain: Coven of Dusk, Persona Q, Bayonetta, Dark Cloud, Final Fantasy X, Final Fantasy XIV, Tasomachi, Darkstalkers, X-Men vs. Street Fighter, Marvel vs. Capcom 3, Puzzle Street Fighter, Divinity: Original Sin, Legend of Zelda: Breath of the Wild, Tropico 6, Portal, Mario Kart, Dynasty Warriors Empires, Dungeons of Dredmor, Sims, Shrouded Isle, Advance Wars</p>
            <p><strong>Favourite artists/mangakas:</strong> Hyunga Tae Kim, Ugetsu Hakua, Kilian Eng, Carnelian, Range Murata, Miwa Shirow, Nardack, redjuice, LANGE, H2SO4, Ideolo</p>
            <p><strong>Favourite music genres:</strong> Drum and Bass, Hard Techno, Psytrance, Dance/Electronic</p>
            <p><strong>Favourite music:</strong> The Prodigy, Missy Elliott, Leftfield, Chemical Brothers,  KAYTRANADA, Yuksek, Brutalismus 3000, Victoria Monet, Half Alive, iyla, Moderat, Massive Attack, Max Cooper, Bonobo, Bicep, ALEX, Owl Vision, Ashnikko, Kendrick Lamar, GHOST DATA, Delta Heavy, Iniko, Jungle, Greentea Peng, Tanerelle, Moonchild</p>
          </div>
        </div>
        
      </TabItem>
      <TabItem title="Terms of Use">
        <h2 class="text-center">Terms of Use</h2>
        <h3>General (applies to all)</h3>
        <ul class="mb-6">
          <li>No redistributing even if credit is given. If you like my content and want to share with others, it's simple, link to my website or the article.</li>
          <li>Do not take credit for any content or coding found on Vizune.</li>
          <li>Content on Vizune.com is not available for commerical use.</li>
          <li>If there is a watermark, you are not allowed to remove it (excluding Renders).</li>
        </ul>

        <h3>Renders</h3>
        <ul class="mb-6">
          <li>You are allowed to remove the watermark when using, this is just to remind you where the resource is from.</li>
          <li>No, you cannot replace my watermark with your own and/or upload to Deviant Art / renders gallery / your website. That is called redistribution.</li>
          <li>A credit/link back is required when using renders from Vizune.</li>
        </ul>

        <h3>Web templates</h3>
        <p>This section acts as a portfolio section whilst also helping others learn how to make their own templates or download to use.</p>
        <p>If you decide you want to lie and say you wrote the code, you're only cheating yourself whereas me practicing making more templates will improve my quality of code / web design skills within months thus help earn more in the future in my career.</p>
      </TabItem>
      <TabItem title="Credits & Resources">
        <h2 class="text-center">Credits & Resources</h2>
        <p class="mb-8">These are resources that I have personally used in my designs / graphics and I have also included more sites that I admire for good quality resources that deserve recognition. If there any broken links below and you have the new URL to find the creator's resources please let me know in the 'Live Chat' below.</p>
        <h3 class="text-center mb-1">Image sources</h3>
        <ul class="mb-8 text-center list-none">
          <li v-for="link in imageSources">
            <a :href="link.url" target="_blank">{{ link.name }}</a>
          </li>
        </ul>

        <h3 class="text-center mb-1">Design resources</h3>
        <ul class="mb-4 text-center list-none">
          <li v-for="link in designSources">
            <a :href="link.url" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </TabItem>
      <TabItem title="Link Exchange">
        <h2 class="mb-2">Vizune Link Buttons</h2>
        <div class="flex gap-4 mb-8">
            <img src="/buttons/vizune-button-01.png" alt="Vizune Link button" />
            <img src="/buttons/vizune-button-03.png" alt="Vizune Link button" />
        </div>

        <h2 class="mb-2">Link exchanges</h2>
        <p>If you would like your website link / button down below, drop me a message in the "Live chat" below. Sorry Affiliates are invite only.</p>
        <ul class="my-4 list-none flex flex-wrap gap-4">
          <li v-for="button in linkExchangeButtons">
            <a :href="button.url" :title="button.name" target="_blank">
              <img :src="button.image">
            </a>
          </li>
        </ul>

        <ul class="my-4">
          <li v-for="link in linkExchangeList">
            <a :href="link.url" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </TabItem>
    </Tabs>

  </div>
</template>
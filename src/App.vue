<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from './components/Index';

export default {
  name: 'App',
  components: {
    Index,
  },
};
</script>

<style>
  html, body { overflow-x: hidden !important;}

  body {
    background: url("/static/images/splash4.png") no-repeat;
    background-position: top;
    /* background-color: #1e264F; */
    font-family: 'Playfair Display', Helvetica, Arial, sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    margin: 0;
    color: #d3a54a;
  }

  #app {
    text-align: center;
    /* color: #2c3e50; */
    margin-top: 60px;
  }

  .title, .subtitle {
    color: #d3a54a !important;
    /* color: #b08635; */
  }

  .title.is-1 {
    font-size: 4rem;
  }

  #name {
    position: relative;
    top: 10px;
    font-family: 'Fitri Regular';
  }

  .name-and {
    font-family: 'MrsEavesItalic Regular';
  }

  #nav {
    margin: 30px auto;
 }

  #nav > p > a {
    font-size: 20px;
    color: #9e8562;
  }

  .level-item {
    margin-left: 10px;
    margin-right: 10px;
  }
.countdown-header {
    background: url("/static/images/largeDivider.png") no-repeat;
    width: 100%;
    background-position: center;
    height: 10px;
    background-repeat: repeat-x;
}

#count-down {
    color: white;;
    text-align: center;
    background-color: #1d2c51;
    min-height: 150px;
    width: 100%;
    align-items: center;
    bottom: 0;
    /* background-color: #34495e; */
    display: flex;
    justify-content: center;
    left: 0;
    position: relative;
    right: 0;
    top:0;
}

.countdown {
  display: flex;
}

.block {
    display: flex;
    flex-direction: column;
    margin: 0px;
}

.text {
    color: white;
    font-size: 20px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #e7af3e;
    font-size: 40px;
    font-weight: 100;
    font-family: 'Playfair Display','Roboto', serif;
    margin: 10px;
    text-align: center;
}

.slideshow {
    text-align: center;
}

.subHeading {
    position: relative;
    top: 50px;
    color: #d3a54a;
}

.content {
    text-align: center;
}

header.content-header {
    background: url("/static/images/divider.png") no-repeat top;
    width: 100%;
    text-align: center;
    margin: 0 auto 6em auto;
    background-position: center;
    /* background-size: cover; */
}

div.sub-content {
    width: 66%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

img.our-story-image {
    border-radius: 50%;
    width: 30%;
    align-self: center;
    margin-bottom: 25px;
    border-width: 1px;
    border-color: #e7e7e7;
    border-style: inset;
}

p.our-story {
    color: #1d2c51;
    text-align: justify;
    font-size: 20px;
    line-height: 2em;
    font-family: "Futura Md BT Medium";
    text-indent: 5em;
}

</style>

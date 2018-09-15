<template>
    <div>
        <!-- Names and Nav container -->
        <div class="container">
            <div id="name">
                <div>
                    <h1 class="title is-1">Laura Escobedo</h1>
                </div>
                <span class="name-and subtitle is-3">and</span>
                <div>
                    <h1 class="title is-1">Jose Rangel</h1>
                </div>
            </div>

            <nav id="nav" class="level">
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#our-story">Our Story</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#wedding-party">Wedding Party</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#travel">Travel</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#wedding-events">Wedding Events</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#registry">Registry</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#wall">Wall</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#get-in-touch">Get in Touch</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#requests">Requests</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#timeline">Timeline</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#thank-you">Thank You</a>
                </p>
            </nav>
        </div>
        <!-- Countdown Ribbon -->
        <header class="countdown-header"></header>
        <!-- October 23, 2019 -->
        <!-- 2019-10-22 23:59:00 -->
        <!-- "Y-m-d H:i:s" -->
        <div id="count-down">
            <countdown date="Tue, 22 Oct 2019 23:59:00" inline-template>
                <div class="countdown">
                <div class="block">
                    <p class="digit">{{ days | two_digits }}</p>
                    <p class="text">Days</p>
                </div>
                <div class="block">
                    <p class="digit">{{ hours | two_digits }}</p>
                    <p class="text">Hours</p>
                </div>
                <div class="block">
                    <p class="digit">{{ minutes | two_digits }}</p>
                    <p class="text">Minutes</p>
                </div>
                <div class="block">
                    <p class="digit">{{ seconds | two_digits }}</p>
                    <p class="text">Seconds</p>
                </div>
                </div>
            </countdown>
        </div>
        <header class="countdown-header"></header>

        <div class="container">
            <div class="slideshow">
                <carousel
                :paginationEnabled=true
                :per-page=1 :loop=true
                :autoplay=true
                :autoplayHoverPause=true
                :navigationEnabled=false
                :autoplayTimeout=4000>
                    <slide>
                        <img src="/static/images/photos/slideshow/1.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/2.jpg" alt="">
                    </slide>

                    <slide>
                        <img src="/static/images/photos/slideshow/4.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/5.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/6.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/7.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/8.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/9.jpg" alt="">
                    </slide>
                    <slide>
                        <img src="/static/images/photos/slideshow/10.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="our-story content">
                <a name="our-story"></a>
                <header class="content-header">
                <h1>
                    <div class="subHeading">Our Story</div>
                </h1>
                </header>
                <div class="sub-content">
                    <img class="our-story-image" src="/static/images/photos/ourStory.jpg" alt="">
                    <p class="our-story">
                        It all started in high school and; no, we were not high
                        school sweet hearts.
                        We were so different, and we were in two very different places.
                        It was four years later that we would start our journey to the future.
                    </p>
                    <p class="our-story">
                        Her smile and energy drew me in to fall in love with her.
                        She can make me feel like I could conquer anything the world threw at me.
                        I knew 6 months into the relationship that she was the
                        one I wanted to spend the rest of my life with.
                        She will always and forever be my rock to stand on.
                    </p>
                    <p class="our-story">
                        His passion for adventure and different things of the
                        world drew me into him (and let’s not forget that chest).
                        He taught me things by emotions, and I love him for that.
                        I knew he loved me when he would sacrifice his comfort for mine.
                    </p>
                    <p class="our-story">
                        Through the rough times and good times, we kept
                        finding our way back to each other.
                        We have grown up together and separately and we
                        still feel the same way as when we first met.
                    </p>
                </div>
            </div>

            <div class="wedding-party content">
                <a name="wedding-party"></a>
                <header class="content-header">
                    <h1>
                        <div class="subHeading">Wedding Party</div>
                    </h1>
                </header>
                <div class="subtitle is-4">Girls</div>
                <div class="content">
                    <div class="box">
                        <!-- Julie -->
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-128x128">
                                <img src="/static/images/photos/weddingParty/girls/julie.jpg" alt="Julie">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Julie</strong>
                                </p>
                                <p>
                                    .
                                </p>
                                <p>
                                    .
                                </p>
                                <p>
                                    !
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="reply">
                                    <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                    </div>
                    <div class="box">
                        <!-- Naz -->
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-128x128">
                                <img src="/static/images/photos/weddingParty/girls/naz.jpg" alt="Nazareth">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Naz</strong>
                                </p>
                                <p>
                                    I'm part of Laura’s elite entourage.
                                </p>
                                <p>We really clicked senior year of high school, which paved the way to continue our shenanigans in college. \m/</p>
                                <p>
                                    As a couple I met the soon to be Mr. & Mrs. back in 2010, where we all partook in nightly Pizza hut wing deliveries, competitive live or death monopoly, and the occasional movie night the best service Jester could offer.
                                </p>
                                <p>
                                    I remember asking Laura if she loved homeboy one morning while he was playing basketball and she answered, "ehhh, he's alright." The first and last time I’ve ever heard her say she was in love. <strong>To future shenanigans with the Rangel’s!</strong>
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="reply">
                                    <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                    </div>
                    <div class="box">
                        <!-- Priscilla -->
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-128x128">
                                <img src="/static/images/photos/weddingParty/girls/pricilla.jpg" alt="Priscilla">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Priscilla</strong>
                                </p>
                                <p>
                                    February 1, 2018, is the day I realized Jose is so  awesome, oh and Laura too haha, but no all jokes aside I loved the fact that Jose is very supportive about everything Laura does and worries about them being truly united as one.
                                </p>
                                <p>
                                    They both came to visit me at the hospital and were there for me throughout everything that day.  It was very emotional for me because I thought my life was over but they were both there to support me.
                                </p>
                                <p>
                                    I love and admire their relationship. Honestly, I couldn’t be happier for you guys, y'all belong together! I hope y'all live happily ever after, you both deserve this fairy tale! <strong>Love you guys!</strong>
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="reply">
                                    <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                    </div>
                    <div class="box">
                        <!-- Sandra -->
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-128x128">
                                <img src="/static/images/photos/weddingParty/girls/sandra.jpg" alt="Sandra">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Sandra</strong>
                                </p>
                                <p>
                                    Laura and I became friends towards the end of our senior year in high school, BUT...I had noticed her wayyy before that. (This speaks volumes as our high school had nearly 4,000 students). Before I actually met her, there were two things that were obviously very important in her life, one was hair color. I swear this girl had a different color in her hair every time I saw her! The other...<strong>DANCING</strong>.
                                </p>
                                <p>
                                    We were in a Latin dance club together and her passion for dancing radiated! When we actually met and became friends, this was how we'd have the most fun, dancing and singing our hearts out. We always said that we could never be with a guy that didn't know how to dance and then <strong>BAM!</strong> 
                                </p>
                                <p>
                                    She fell in love with Jose. 
                                </p>
                                <p>
                                    How would this last? How!? He doesn't know how to dance, and his hair is just…Brown. Nothing in common. 
                                </p>
                                <p>
                                    But Jose reached out and asked for help on learning how to dance. He was open to learning, and Laura was open to teaching him. She was patient with him and although it wasn't a fast process, he didn't give up. 
                                </p>
                                <p>
                                    Today, they dance their butts off to all kinds of music and you'd never know that they couldn't follow each other’s rhythm at first. 
                                </p>
                                <p>
                                    Their relationship has taught me that it's easy to love someone that already knows how to dance. But true love is patient, open minded, and perseverant. Dancing is where they first implemented these qualities, but it's obvious that they continued these traits onto the rest of their relationship. 
                                </p>
                                <p>
                                    It was funny seeing them struggle to dance the first time, but now I’m elated to witness their first dance as Mr. & Mrs. Rangel Escobedo.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="reply">
                                    <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                    </div>
                    <div class="box">
                        <!-- Stormie -->
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-128x128">
                                <img src="/static/images/photos/weddingParty/girls/stormie.jpg" alt="Stormie">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Stormie</strong>
                                </p>
                                <p>
                                    Ever since I met Laura, she has always had this crazy love for dancing.
                                </p>
                                <p>
                                    One night, Laura, Jose, and I went to club 2001. A song came on that Laura wanted to dance, so she and Jose made their way to the dance floor while I hung back and watched. 
                                </p>
                                <p>
                                    I remember watching them and <strong>Laura looked sooo happy!</strong>
                                </p>
                                <p>
                                    I mean how great must it feel to do something you love with the person you Love!
                                </p>
                                <p>
                                    That’s what great relationships are about! I’m confident in their relationship because of moments like that one.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="reply">
                                    <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <div class="travel">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Travel</div>
                    <a name="travel"></a>
                    </h1>
                </header>
            </div>

            <div class="wedding-event">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Wedding Events</div>
                    <a name="wedding-event"></a>
                    </h1>
                </header>
            </div>

            <div class="registry content">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Registry</div>
                    <a name="registry"></a>
                    </h1>
                </header>
                <div class="sub-content">
                    <h1 style="color:black">Coming Soon!</h1>
                </div>
            </div>

            <div class="wall">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Wall</div>
                    <a name="wall"></a>
                    </h1>
                </header>
            </div>

            <div class="get-in-touch">
                <header class="content-header">
                <h1>
                    <div class="subHeading">Get In Touch</div>
                    <a name="get-in-touch"></a>
                </h1>
                </header>
            </div>

            <div class="requests">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Requests</div>
                    <a name="requests"></a>
                    </h1>
                </header>
            </div>

            <div class="timeline">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Timeline</div>
                    <a name="timline"></a>
                    </h1>
                </header>
            </div>

            <div class="thank-you">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Thank You</div>
                    <a name="thank-you"></a>
                    </h1>
                </header>
            </div>

        </div>
    </div>
      <!--
        <input type="text" v-on:input="changename">
        <p>{{ name }}</p>
      -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

const countDownComponent = {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  filters: {
    two_digits(value) {
      if (value < 0) {
        return '00';
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
};

export default {
  name: 'Index',
  components: {
    countdown: countDownComponent,
    carousel: Carousel,
    slide: Slide,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

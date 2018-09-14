<template>
    <div>
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
                    <a class="link is-info" href="#wedding-party">Wedding Party</a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info" href="#our-story">Our Story</a>
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

        <header class="countdown-header"></header>
        <!-- October 23, 2019 -->
        <!-- 2019-10-22 23:59:00 -->
        <!-- "Y-m-d H:i:s" -->
        <div id="count-down">
            <countdown date="2019-10-22 23:59:00" inline-template>
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
                <div class="gallery-wrapper">
                    <div class="gallery-spacer"></div>
                    <div id="slide1" class="gallery-slide current-image"></div>
                    <div id="slide2" class="gallery-slide next-image"></div>
                    <div id="slide3" class="gallery-slide inactive-image"></div>
                    <div id="slide4" class="gallery-slide inactive-image"></div>
                    <div id="slide5" class="gallery-slide inactive-image"></div>
                    <div id="slide6" class="gallery-slide inactive-image"></div>
                    <div id="slide7" class="gallery-slide inactive-image"></div>
                    <div id="slide8" class="gallery-slide inactive-image"></div>
                    <div id="slide9" class="gallery-slide inactive-image"></div>
                    <div id="slide10" class="gallery-slide inactive-image"></div>
                </div>
            </div>

            <div class="our-story content">
                <header class="content-header">
                <h1>
                    <div class="subHeading">Our Story</div>
                    <a name="our-story"></a>
                </h1>
                </header>
                <div class="sub-content">
                    <img class="our-story-image" src="/static/images/photos/ourStory.jpg" alt="">
                    <p class="our-story">
                        It all started in high school and; no, we were not high school sweet hearts. We were so different, and we were in two very different places. It was four years later that we would start our journey to the future.
                    </p>
                    <p class="our-story">
                        Her smile and energy drew me in to fall in love with her. She can make me feel like I could conquer anything the world threw at me. I knew 6 months into the relationship that she was the one I wanted to spend the rest of my life with. She will always and forever be my rock to stand on.
                    </p>
                    <p class="our-story">
                        His passion for adventure and different things of the world drew me into him (and let’s not forget that chest). He taught me things by emotions, and I love him for that. I knew he loved me when he would sacrifice his comfort for mine.
                    </p>
                    <p class="our-story">
                        Through the rough times and good times, we kept finding our way back to each other. We have grown up together and separately and we still feel the same way as when we first met.
                    </p>
                </div>
            </div>

            <div class="wedding-party">
                <header class="content-header">
                    <h1>
                    <div class="subHeading">Wedding Party</div>
                    <a name="wedding-party"></a>
                    </h1>
                </header>
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
var countDownComponent = {
    mounted() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },
    props: {
        date: {
            type: String
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    computed: {
        dateInMilliseconds() {
            return Math.trunc(Date.parse(this.date) / 1000)
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
        }
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
        }
    }
};

export default {
  name: 'Index',
  components: {
    'countdown': countDownComponent
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
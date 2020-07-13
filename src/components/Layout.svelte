<script>
  import { faGithub, faNpm, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
  import SocialIcon from '../components/SocialIcon.svelte';
</script>

<style lang="scss">
  @import 'src/styles/variables.scss';
  #container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: $tablet-max-width) {
    }
    @media only screen and (max-width: $phone-max-width) {
      display: block;
    }
    #col1 {
      width: 100%;
      height: 100%;
      position: sticky;
      top: 0;
      @media only screen and (max-width: $phone-max-width) {
        position: initial;
      }
      #avatar {
        --width: 420px;
        --height: 20vh;
        @media only screen and (max-width: $tablet-max-width) {
          --width: 40vw;
        }
        @media only screen and (max-width: $phone-max-width) {
          --width: 75vw;
          --height: 5vh;
        }
        width: min-content;
        margin: 0 auto;
        filter: drop-shadow(5px 10px 20px rgba(0, 0, 0, 0.55));
        #line {
          width: 0;
          height: var(--height);
          border: 5px #ffe0ac solid;
          margin-left: calc(var(--width) / 2);
        }
        #image {
          box-sizing: border-box;
          width: var(--width);
          height: var(--width);
          background-image: url('../avatar.jpg');
          background-size: cover;
          border-radius: 50%;
          border: 8px solid #6886c5;
        }
        #name {
          font-family: 'Cutive', serif;
          width: min-content;
          float: right;
          transform: translate(30%, -80%);
          box-sizing: border-box;
          @media only screen and (max-width: $tablet-max-width) {
            float: initial;
            width: var(--width);
            transform: translate(0, -35%);
          }
          @media only screen and (max-width: $phone-max-width) {
            transform: translate(0, -15%);
          }
          h1 {
            margin: 0;
            margin-top: 11px;
            @media only screen and (max-width: $phone-max-width) {
              font-size: x-large;
            }
          }
          #links {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    #col2 {
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
    }
  }
  .wave {
    position: fixed;
    z-index: -1;
    filter: drop-shadow(5px -10px 20px rgba(0, 0, 0, 0.55));
    @media only screen and (max-width: $phone-max-width) {
      width: 70vw;
    }
    &#wave1 {
      bottom: 0;
      left: 0;
    }
    &#wave2 {
      top: 0;
      right: 0;
      transform: rotate(-180deg);
    }
  }
</style>

<div id="container">
  <div id="col1">
    <div id="avatar">
      <div id="line" />
      <div id="image" />
      <div class="box" id="name">
        <h1>Samuel Martineau</h1>
        <div id="links">
          <SocialIcon link="https://github.com/Samuel-Martineau" icon={faGithub} color="#171515" />
          <SocialIcon link="https://www.npmjs.com/~samuel_martineau" icon={faNpm} color="#bd423b" />
          <SocialIcon link="https://twitter.com/samumartineau" icon={faTwitter} color="#1c9cea" />
          <SocialIcon link="mailto:samumartineau@gmail.com" icon={faEnvelope} color="black" />
        </div>
      </div>
    </div>
  </div>
  <div id="col2">
    <slot />
  </div>
</div>
<img src="wave.svg" alt="" id="wave1" class="wave" />
<img src="wave.svg" alt="" id="wave2" class="wave" />

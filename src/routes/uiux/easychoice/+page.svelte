
<script>
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import '@carbon/charts-svelte/styles.css'
import { PieChart, BarChartSimple } from '@carbon/charts-svelte'

    let data = [
  {
    "group": "Shopping",
    "value": 76.61
  },
  {
    "group": "Food",
    "value": 60.82
  },
  {
    "group": "Daily Life",
    "value": 57.99
  },
  {
    "group": "Important Decision",
    "value": 56.53
  },
  {
    "group": "Study",
    "value": 44.64
  },
    {
        "group": "Social",
        "value": 43.66
    },
    {
        "group": "Emotion",
        "value": 43.47
    }
]

  let options = {
    bars: {
        "width": 40,
        "maxWidth": 150,
    },
  "axes": {
    "left": {
      "mapsTo": "value"
    },
    "bottom": {
      "scaleType": "labels",
      "mapsTo": "group"
    }
  },
  "color": {
    "pairing": {
      "option": 2
    },
    "scale": {
      "Shopping": "#868788",
      "Food": "#A8B66F",
      "Daily Life": "#A98F77",
      "Important Decision": "#E37E5E",
      "Study": "#648ABD",
      "Social": "#868788",
      "Emotion": "#A8B66F"
    }
  },
  "height": "600px",
}


</script>

<div class="backdrop">
    <div class="hero min-h-screen">
        <div class="hero-content text-center text-neutral-content">
            <div class="grid grid-cols-2">
            <div>
                <img src="../../../uiux_easychoice_page_pics/easychoice translucent.png" alt="ec">
            </div>
            <div class="flex items-center">
                <div class="grid justify-items-start ml-4 md:ml-16">
                    <p class="mb-5">Easychoice</p>
                    <h1 class="mb-5 text-xl md:text-4xl text-left">A web that helps people with selection difficulties.</h1>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="mx-10 lg:mx-24 mt-16">
        <h1 class="text-heading-group text-2xl md:text-5xl text-center mb-12">Research</h1>
        <p class="text-md ml-4 lg:ml-8 mb-8">Nowadays, we are faced with countless choices every day, and there are many people who have a kind of mild or severe selection difficulties. </p>
        <p class="text-md mx-8 lg:mx-20 leading-9">“Making decisions can be a terrifying prospect to many people who are afraid of what will happen if they don’t choose the right thing. The fear of making the wrong decision, or “decidophia” - a term coined by Princeton University philosopher Walter Kaufmann inhis book Without Guilt and Justice - can effect people wven when it comes to the smallest choices, such as what to have lunch or what to wear. Decidophobia can lead to blurred thinking, a lack of clarity and increased dependence on others to choose for you, all leading to sn overall lost sense of direction and control. "</p>
        <p class="text-md text-right">—— Jul 5, 2017, Forbes Coaches Council</p>

        <h1 class="text-heading-group text-2xl md:text-5xl text-center mb-12 tracking-wider mt-16">Chart of The Propotion of College Students With or Without Selection Difficulties</h1>
        <div class="flex justify-center">
            <PieChart
            data={[
                { group: 'Yes, for every little thing', value: 32.85 },
                { group: 'Yes, for important decisions', value: 34.6 },
                { group: 'Yes, for all aspects', value: 27.29 },
                { group: 'No', value: 5 },
            ]}
            options={
                {
                    // "title": "Chart of college studenst with or without selection difficulties",
                    "resizable": true,
                    "legend": {
                        "alignment": "center"
                    },
                    "pie": {
                        "alignment": "center"
                    },
                    "height": "600px",
                    "theme": "g100",
                    tooltip: {
                        truncation: {
                            numCharacter: 100
                        }
                    }
                }
            } />

        </div>    



        <p class="text-md text-right">—— Data from CYN Education</p>

        <h1 class="text-heading-group text-2xl md:text-5xl text-center mb-12 tracking-wider mt-16">Chart of The Propotion of Aspects in Which College Students Have Difficulty in Making Choices</h1>
        <div class="flex justify-center">
            <BarChartSimple {data} {options} />
        </div>
        <p class="text-md text-right">—— Data from CYN Education</p>

        <h1 class="text-heading-group text-2xl md:text-5xl text-center mb-12 mt-16">Solution</h1>
        <p class="text-md ml-8 mb-8">Life is often faced with many choices, no matter big or small, in front of the choice, what will you do, whether you are decisive and sure or hesitant, in fact, it is possible. That's why I designed Easychoice to help you make a faster and more decisive choice. </p>
        <p class="text-md ml-8 mb-8">As the saying goes, the moment the coin is tossed, you already know the answer. Easychoice can help you clarify your inner thoughts, correctly understand what you want, learn to trust and appreciate yourself, increase the self-confidence of choice, will find that the choice is not a difficult thing!</p>
        
        <div class="image-group">
            <h1 class="text-2xl md:text-5xl mb-12">User Persona</h1>
            <img src="../../../uiux_easychoice_page_pics/persona2.png" alt="persona2">
            <img src="../../../uiux_easychoice_page_pics/persona1.png" alt="persona1">
            
            <h1 class="text-2xl md:text-5xl mb-12">User Flow</h1>
            <img src="../../../uiux_easychoice_page_pics/userflow.png" alt="userflow">
            
            <h1 class="text-2xl md:text-5xl my-12">Design Element</h1>
            <img src="../../../uiux_easychoice_page_pics/easychoice designelement.png" alt="element">
            
            <h1 class="text-2xl md:text-5xl my-12">Wireframe</h1>
            <img src="../../../uiux_easychoice_page_pics/wireframe.png" alt="wireframe">
            
            <h1 class="text-2xl md:text-5xl my-12">Visual Design</h1>
            <img src="../../../uiux_easychoice_page_pics/frame1.png" alt="frame1">
            <img src="../../../uiux_easychoice_page_pics/frame3.png" alt="frame3">
            <img src="../../../uiux_easychoice_page_pics/frame2.png" alt="frame2">
            <img src="../../../uiux_easychoice_page_pics/frame4.png" alt="frame4">
        </div>
    </div>
</div>

<style>
    .backdrop {
        background-color: rgba(230,228,232,255)
    }

    .hero {
        background-color: rgba(98,84,72,255);
    }

    .text-heading-group {
        color: rgba(199,146,136,255)
    }
</style>
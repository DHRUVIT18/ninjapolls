<script>
  import { onMount , onDestroy } from "svelte";
  import PollDetail from "../shared/PollDetail.svelte";
  import PollStore from "../stores/PollStore";
  import {fade,slide,scale} from 'svelte/transition';
  import {flip} from 'svelte/animate';

  

    

    
</script>


<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{duration:500}}>
        <PollDetail {poll} on:vote/>
        
    </div>
    {/each}
</div>


<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

    }



</style>
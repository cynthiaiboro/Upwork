<template>
  <div>
    <section class="header text-center my-3">
        <h1>Upwork</h1>
    </section>
    <!-- Card -->
    <div class="row flex justify-content-center">
      <div v-for="card in cards" :key="card.id" class="col-sm-3 card m-3 whole-card shadow" @click="modalfunction(card)"
      data-toggle="modal" data-target="#staticBackdrop">
        <img :src="card.image" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text text-center">{{ card.title }}</p>
        </div>
         <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel">{{ selectedCard.title }}</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               <img :src="selectedCard.image" class="card-img-top mb-2" alt="...">
               <p class="p-2">{{ selectedCard.description }}</p>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>

   
  </div>
</template>

<script>



export default {
  data(){
    return {
      selected : [],
      selectedCard : []
    }
  },
  computed: {
    cards(){
      return this.$store.state.cards;
    }
  },
    methods: {
      modalfunction(selected){
        this.selectedCard = selected;
        console.log(selected)
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0 auto;
  color: rgb(9, 49, 82);
}
.whole-card {
  max-width: 260px !important;
  border: none;
  border-radius: 3px;
  padding: 5px 0;
}
.whole-card:hover {
  cursor: pointer;
}
.card-text {
  font-weight: bold;
}
.card-body {
  padding: 10px;
}
</style>
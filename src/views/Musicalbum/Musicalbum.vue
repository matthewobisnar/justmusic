<template>
    <div id="Musicalbum">
        <div class="container-fluid">
          <Breadcrumbs :name="'Album'"></Breadcrumbs>
          <div class="albumlist my-4 py-1">
              <div class="row">
                <div class="col-xs-2 col-lg-2 mx-4" v-for="(albums, index) in albums" :key="albums.title + '_' + index">
                  <router-link :to="{name: 'albumiid', params: {id: albums.id, album: albums} }" tag="div">
                    <div class="hovereffect">
                      <img class="card-img-top card-album rounded-0" :src="albums.image" alt="Card image cap">
                      <div class="overlay">
                        <div class="text">
                          <i class="material-icons md-48">play_arrow</i>
                        </div>
                      </div>
                    </div>
                    </router-link>
                    <div class="card-body px-1">
                      <p class="font-weight-bold">{{albums.album}}</p>
                      <p>{{albums.description}}</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>
<script src="./Musicalbum.js"></script>
<style scoped src="./Musicalbum.css"></style>
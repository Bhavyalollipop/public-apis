<template>
  <div>
    <b-sidebar id="sidebar" title="Public Api(s)" shadow>
      <b-list-group>
        <nuxt-link to="/randomJokes">
          <b-list-group-item>
            Random Jokes
          </b-list-group-item>
        </nuxt-link>
        <nuxt-link to="/emoji">
          <b-list-group-item>
            Emoji
          </b-list-group-item>
        </nuxt-link>
      </b-list-group>
    </b-sidebar>
  </div>
</template>

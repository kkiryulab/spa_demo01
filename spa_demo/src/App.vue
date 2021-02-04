<template>
    <v-app>
        <header>
            <v-app-bar color=blue app>
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolvar-title>SPA-demo</v-toolvar-title>
            </v-app-bar>
            <v-main>
                <router-view />
            </v-main>
            <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
            >
                <v-list nav dense>
                    <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
                    <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>

            </v-navigation-drawer>
        </header>
    </v-app>
</template>

<script>
export default {
    data() {
        return{
            drawer: false,
            menus: [
                {title: 'Home', url: '/'},
                {title: 'About', url: '/about'},
                {title: 'Access', url: '/access'},
            ]
        }
    }
}
</script>

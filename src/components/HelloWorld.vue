<template>
  <div class="min-h-screen bg-[#FAFAFA]">
    <!-- Navigation -->
    <nav class="flex items-center justify-between p-6 bg-white">
      <div class="flex items-center gap-6">
        <router-link to="/" class="text-xl font-bold">Vefy</router-link>
        <Button variant="secondary" class="rounded-full bg-black text-white hover:bg-black/90">
          Discover
        </Button>
        <!-- <Button variant="ghost">Inversiones</Button> -->
      </div>
      <div class="flex items-center gap-4">
        <!-- <span>Michael Doe</span> -->
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto py-8">
      <div class="mb-8">
        <h1 class="text-4xl font-normal mb-6">Startups</h1>
        <!-- <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input class="pl-10" placeholder="Buscar startups..." />
        </div> -->
      </div>

      <div class="grid gap-6">
        <Card v-for="i in 2" :key="i" class="overflow-hidden">
          <CardContent class="p-6">
            <div class="grid md:grid-cols-4 gap-6 pt-6">
              <div class="space-y-2">
                <h3 class="font-medium">Rentennials</h3>
                <p class="text-sm text-gray-500">Plataforma de renta de propiedades</p>
              </div>
              <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-500">Valoración</h4>
                <p>$2.5M USD</p>
              </div>
              <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-500">Mínimo</h4>
                <p>$1,000 USD</p>
              </div>
              <!-- <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-500">Recaudado</h4>
                <p>$500,000 USD</p>
              </div> -->
            </div>
          </CardContent>
          <Separator />
          <CardFooter class="pt-5 flex justify-between items-center">
            <div class="flex items-center gap-4">
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Abierto</span>
              <!-- <span class="text-sm text-gray-500">Cierra en 15 días</span> -->
            </div>
            <a href="/c">
              <Button class="gap-2 flex items-center">
                Ver más
                <ArrowUpRight class="h-4 w-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card v-for="i in 1" :key="i" class="overflow-hidden">
          <CardContent class="p-6">
            <div class="grid md:grid-cols-4 gap-6 pt-6">
              <div class="space-y-2">
                <h3 class="font-medium">Rentennials</h3>
                <p class="text-sm text-gray-500">Plataforma de renta de propiedades</p>
              </div>
              <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-500">Valoración</h4>
                <p>$2.5M USD</p>
              </div>
              <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-500">Mínimo</h4>
                <p>$1,000 USD</p>
              </div>
              <!-- <div class="space-y-2">
                <h4 class="text-sm font-medium text-gray-500">Recaudado</h4>
                <p>$500,000 USD</p>
              </div> -->
            </div>
          </CardContent>
          <Separator />
          <CardFooter class="pt-5 flex justify-between items-center">
            <div class="flex items-center gap-4">
              <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Proximamente</span>
              <!-- <span class="text-sm text-gray-500">Cierra en 15 días</span> -->
            </div>
            <a href="/c">
              <Button class="gap-2 flex items-center">
                Ver más
                <ArrowUpRight class="h-4 w-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Search } from 'lucide-vue-next'
import { Card, CardContent, CardFooter, Input, Separator, Button } from './index.js'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
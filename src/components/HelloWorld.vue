<template>
  <div class="min-h-screen bg-[#FAFAFA]">
    <!-- Navigation -->
    <nav class="flex items-center justify-between p-6 bg-white">
      <div class="flex items-center gap-6">
        <router-link to="/" class="text-xl font-bold">Vefy</router-link>
        <Button variant="secondary" class="rounded-full bg-black text-white hover:bg-black/90">
          Discover
        </Button>
      </div>
      <div class="flex items-center gap-4">
        <!-- Placeholder for user info -->
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto py-8">
      <div class="mb-8">
        <h1 class="text-4xl font-normal mb-6">Startups</h1>
      </div>

      <div class="grid gap-6">
        <Card v-for="startup in startups" :key="startup.id" class="overflow-hidden">
          <CardContent class="p-2 px-4">
            <div class="grid md:grid-cols-2 gap-6 py-8 pr-4">
              <div class="space-y-4 flex gap-4">
                <img src="../assets/alugo.webp" :alt="startup.name" class="w-20 h-20 object-cover rounded-lg" />
                <div class="flex flex-col">
                  <h3 class="font-medium text-xl">{{ startup.name }}</h3>
                  <p class="text-sm text-gray-500">{{ startup.description }}</p>
                </div>
              </div>
              <div class="flex justify-between">
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Fundada</h4>
                  <p>{{ startup.founded }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Etapa</h4>
                  <p>{{ startup.stage }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Tipo</h4>
                  <p>{{ startup.type.join(', ') }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Industria</h4>
                  <p>{{ startup.industry }}</p>
                </div>
              </div>
              <!-- <div class="space-y-4">
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Website</h4>
                  <a :href="startup.website" target="_blank" class="text-blue-600 hover:underline">Visitar sitio</a>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Pitch Deck</h4>
                  <a :href="startup.pitchDeck" target="_blank" class="text-blue-600 hover:underline">Ver Pitch Deck</a>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-500">Estadio</h4>
                  <p>{{ startup.status }}</p>
                </div>
              </div> -->
            </div>
          </CardContent>
          <Separator />
          <CardFooter class="pt-5 flex justify-between items-center">
            <div class="flex items-center gap-4">
              <span :class="[
                'px-3 py-1 rounded-full text-sm',
                startup.isOpen ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              ]">
                {{ startup.isOpen ? 'Abierto' : 'Próximamente' }}
              </span>
            </div>
            <div class="flex gap-4">
              <!-- <Button variant="outline" class="gap-2 flex items-center">
                Invertir
                <ArrowUpRight class="h-4 w-4" />
              </Button> -->
              <a href="/startup/alugo">

                <Button class="gap-2 flex items-center">
                  Ver más
                  <ArrowUpRight class="h-4 w-4" />
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { Card, CardContent, CardFooter, Separator, Button } from './index.js'

const startups = ref([
  {
    id: 1,
    name: 'Alugo',
    image: '../assets/vue.svg',
    description: 'Todo se alquila',
    founded: '2024',
    stage: 'Pre-Seed',
    type: ['B2B', 'B2C'],
    industry: 'e-commerce',
    website: 'https://recy.example.com',
    pitchDeck: 'https://recy.example.com/pitch-deck',
    status: 'MVP',
    isOpen: true
  },
  {
    id: 1,
    name: 'Alugo',
    image: '../assets/vue.svg',
    description: 'Todo se alquila',
    founded: '2024',
    stage: 'Pre-Seed',
    type: ['B2B', 'B2C'],
    industry: 'e-commerce',
    website: 'https://recy.example.com',
    pitchDeck: 'https://recy.example.com/pitch-deck',
    status: 'MVP',
    isOpen: true
  },
  {
    id: 1,
    name: 'Alugo',
    image: '../assets/vue.svg',
    description: 'Todo se alquila',
    founded: '2024',
    stage: 'Pre-Seed',
    type: ['B2B', 'B2C'],
    industry: 'e-commerce',
    website: 'https://recy.example.com',
    pitchDeck: 'https://recy.example.com/pitch-deck',
    status: 'MVP',
    isOpen: false
  },
  // Puedes agregar más startups aquí
])
</script>
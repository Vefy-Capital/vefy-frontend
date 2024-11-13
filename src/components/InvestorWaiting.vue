<template>
  <div class="min-h-screen bg-[#FAFAFA]">
    <!-- Navigation -->
    <nav class="flex items-center justify-between p-6 bg-white">
      <div class="flex items-center gap-6">
        <router-link to="/" class="text-xl font-bold">Vefy</router-link>
        <Button variant="secondary" class="rounded-full bg-black text-white hover:bg-black/90">
          Discover
        </Button>
        <Button variant="ghost">Inversiones</Button>
      </div>
      <div class="flex items-center gap-4">
        <span>Michael Doe</span>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto py-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-normal mb-8 text-center">Inverti en Alugo</h1>

        <!-- Progress Steps -->
        <div class="relative mb-12">
          <div class="flex justify-between mb-4">
            <div class="flex flex-col items-center">
              <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mb-2">
                <Check class="h-4 w-4" />
              </div>
              <span class="text-sm">Firma del SAFE</span>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-8 h-8 rounded-full border-2 border-black bg-white text-black flex items-center justify-center mb-2"
              >
                2
              </div>
              <span class="text-sm">Aceptación del SAFE</span>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-8 h-8 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center mb-2"
              >
                3
              </div>
              <span class="text-sm text-gray-400">Transferencia</span>
            </div>
          </div>
          <div class="absolute top-4 left-0 right-0 h-[2px] bg-gray-200 -z-10">
            <div class="w-2/3 h-full bg-black" />
          </div>
        </div>

        <Card class="text-center">
          <CardHeader>
            <CardTitle class="text-2xl font-normal">SAFE Enviado a la Startup</CardTitle>
          </CardHeader>
          <CardContent class="space-y-6">
            <!-- <div class="w-20 h-20 mx-auto rounded-full bg-black text-white flex items-center justify-center">
              <Clock class="h-10 w-10" />
            </div> -->
            <p class="text-lg">
              En las próximas 72 horas te estaremos contactando <br/> por correo para continuar en caso de éxito.
            </p>
            <p class="text-sm text-gray-500">
              Mientras tanto, puedes revisar otras oportunidades de inversión en nuestra plataforma.
            </p>
            <a href="/">

              <Button variant="outline" class="mt-4">
                Explorar más startups
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
      <Button v-on:click="onPush">
        Abrir Mail
      </Button>
    </main>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { Check, Component } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle, Button } from './index.js'

export default {
  name: 'App',
  components: {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Button,
    Component,
    Check
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    onPush () {
      this.router.push('/startup/alugo/transfer')
    }
  }
}
</script>
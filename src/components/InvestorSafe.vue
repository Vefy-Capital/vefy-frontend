<template>
  <div class="min-h-screen bg-[#FAFAFA]">
    <!-- Navigation -->
    <nav class="flex items-center justify-between p-6 bg-white">
      <div class="flex items-center gap-6">
        <router-link to="/" class="text-xl font-bold">Vefy</router-link>
        <a href="/">
          <button class="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200">
            Discover
          </button>
        </a>
        <!-- <Button variant="ghost">Inversiones</Button> -->
      </div>
      <div class="flex items-center gap-4">
        <!-- <span>Michael Doe</span> -->
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
              <div
                class="w-8 h-8 rounded-full border-2 border-black bg-white text-black flex items-center justify-center mb-2"
              >
                1
              </div>
              <span class="text-sm">Firma del SAFE</span>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-8 h-8 rounded-full border-2 border-gray-200 text-gray-400 flex items-center justify-center mb-2"
              >
                2
              </div>
              <span class="text-sm text-gray-400">Aceptación del SAFE</span>
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
            <div class="w-1/3 h-full bg-black" />
          </div>
        </div>

        <Card class="bg-[#1c1c1c] text-white">
          <DocusealForm
            :src="'https://docuseal.com/d/LEVGR9rhZYf86M'"
            :email="'signer@example.com'"
            @complete="onFormComplete"
          />
        </Card>

      </div>
    </main>
  </div>
</template>

<script>
import { Card, CardContent, CardHeader, CardTitle, Button } from './index.js'
import { DocusealForm } from '@docuseal/vue'
import { Check, Download } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    DocusealForm
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    onFormComplete (data) {
      this.router.push('/wait')
    }
  }
}
</script>
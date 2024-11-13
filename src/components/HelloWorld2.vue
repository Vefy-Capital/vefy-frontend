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
            <div class="w-1/3 h-full bg-black"></div>
          </div>
        </div>

        <Card class="bg-[#1e1e1e] text-white">
          <CardHeader>
            <CardTitle class="flex items-center justify-between">
              <span>SAFE - Michael &lt;&gt; Alugo</span>
              <Button variant="outline" size="sm" class="gap-2">
                <Download class="h-4 w-4" />
                Descargar
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <!-- SAFE Document Preview -->
            <div class="space-y-4">
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span>GARNI S.A.S. 30-71435579-5</span>
                  <span>Gavilan 388</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>OC#123ABACCE</span>
                  <span>Ciudad de Córdoba, ARG</span>
                </div>
              </div>

              <div class="space-y-2">
                <h3 class="font-medium">Condiciones</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span class="text-gray-400">Incoterm</span>
                    <p>FOB</p>
                  </div>
                  <div>
                    <span class="text-gray-400">Moneda</span>
                    <p>USD</p>
                  </div>
                  <div>
                    <span class="text-gray-400">Pago</span>
                    <p>30 días BL</p>
                  </div>
                  <div>
                    <span class="text-gray-400">Entrega</span>
                    <p>Gavilan 388, Ciudad de Córdoba, ARG</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div class="mt-8 flex justify-end gap-4">
          <Button variant="outline">Rechazar</Button>
          <Button>Aceptar y Continuar</Button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Check, Download } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle, Button } from './index.js'
</script>
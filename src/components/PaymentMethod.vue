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
              <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mb-2">
                <Check class="h-4 w-4" />
              </div>
              <span class="text-sm">Aceptación del SAFE</span>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-8 h-8 rounded-full border-2 border-black bg-white text-black flex items-center justify-center mb-2"
              >
                3
              </div>
              <span class="text-sm">Transferencia</span>
            </div>
          </div>
          <div class="absolute top-4 left-0 right-0 h-[2px] bg-gray-200 -z-10">
            <div class="w-2/3 h-full bg-black" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Método de Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup v-model="selectedPaymentMethod" class="grid gap-4">
              <div>
                <RadioGroupItem value="usd" id="usd" class="peer sr-only" />
                <Label
                  for="usd"
                  class="flex items-center justify-between rounded-lg border-2 border-muted p-4 hover:bg-gray-50 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black"
                  @click="showPaymentData('usd')"
                >
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                      <DollarSign class="h-5 w-5" />
                    </div>
                    <div>
                      <p class="font-medium">Transferencia USD</p>
                      <p class="text-sm text-gray-500">Transferencia bancaria en dólares</p>
                    </div>
                  </div>
                </Label>
              </div>

              <div>
                <RadioGroupItem value="ars" id="ars" class="peer sr-only" />
                <Label
                  for="ars"
                  class="flex items-center justify-between rounded-lg border-2 border-muted p-4 hover:bg-gray-50 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black"
                  @click="showPaymentData('ars')"
                >
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                      <CreditCard class="h-5 w-5" />
                    </div>
                    <div>
                      <p class="font-medium">Transferencia ARS</p>
                      <p class="text-sm text-gray-500">Transferencia bancaria en pesos argentinos</p>
                    </div>
                  </div>
                </Label>
              </div>

              <div>
                <RadioGroupItem value="crypto" id="crypto" class="peer sr-only" />
                <Label
                  for="crypto"
                  class="flex items-center justify-between rounded-lg border-2 border-muted p-4 hover:bg-gray-50 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black"
                  @click="showPaymentData('crypto')"
                >
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
                      <Bitcoin class="h-5 w-5" />
                    </div>
                    <div>
                      <p class="font-medium">Crypto</p>
                      <p class="text-sm text-gray-500">Transferencia en USDT o USDC</p>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <!-- Información adicional según el método seleccionado -->
            <div v-if="showData" class="mt-6 p-4 border rounded-lg">
              <div v-if="selectedPaymentMethod === 'usd'">
                <h3 class="font-medium mb-2">Datos para transferencia USD</h3>
                <div class="space-y-2 text-sm">
                  <p><span class="font-medium">Banco:</span> Bank of America</p>
                  <p><span class="font-medium">Titular:</span> Alugo LLC</p>
                  <p><span class="font-medium">Cuenta:</span> 123456789</p>
                  <p><span class="font-medium">Swift:</span> BOFAUS3N</p>
                  <p><span class="font-medium">Dirección:</span> 123 Wall Street, NY</p>
                </div>
              </div>

              <div v-if="selectedPaymentMethod === 'ars'">
                <h3 class="font-medium mb-2">Datos para transferencia ARS</h3>
                <div class="space-y-2 text-sm">
                  <p><span class="font-medium">Banco:</span> Banco Santander</p>
                  <p><span class="font-medium">Titular:</span> Alugo SA</p>
                  <p><span class="font-medium">CBU:</span> 0720000720000000000000</p>
                  <p><span class="font-medium">CUIT:</span> 30-12345678-9</p>
                  <p><span class="font-medium">Alias:</span> ALUGO.ARS</p>
                </div>
              </div>

              <div v-if="selectedPaymentMethod === 'crypto'">
                <h3 class="font-medium mb-2">Direcciones Crypto</h3>
                <div class="space-y-2 text-sm">
                  <div class="p-3 bg-gray-50 rounded-md">
                    <p class="font-medium mb-1">USDT (Red Tron/TRC20)</p>
                    <p class="text-xs break-all">TRx7c8Jh9K2L4m5N6p8Q9s0V2w3X4y5Z6a7B8c9D</p>
                  </div>
                  <div class="p-3 bg-gray-50 rounded-md mt-3">
                    <p class="font-medium mb-1">USDC (Red Ethereum/ERC20)</p>
                    <p class="text-xs break-all">0x1234567890AbCdEf1234567890aBcDeF12345678</p>
                  </div>
                  <p class="mt-2 text-xs text-gray-500">
                    * Por favor, verifica cuidadosamente la dirección antes de realizar la transferencia
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bitcoin, CreditCard, DollarSign, Check } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle, Button } from './index.js'
const selectedPaymentMethod = ref('usd')
const showData = ref(false)

const showPaymentData = (method) => {
  selectedPaymentMethod.value = method
  showData.value = true
}
</script>
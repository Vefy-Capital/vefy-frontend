<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
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
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-5 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-6">
            <h1 class="text-3xl font-bold text-gray-900">Alugo</h1>
            <Card>
              <CardHeader>
                <CardTitle>Resumen</CardTitle>
              </CardHeader>
              <CardContent>
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Fundada</dt>
                    <dd class="mt-1 text-sm text-gray-900">2023</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Etapa</dt>
                    <dd class="mt-1 text-sm text-gray-900">Pre-Seed</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Tipo</dt>
                    <dd class="mt-1 text-sm text-gray-900">B2B2C, B2B</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Industria</dt>
                    <dd class="mt-1 text-sm text-gray-900">e-Commerce</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Estadio</dt>
                    <dd class="mt-1 text-sm text-gray-900">MVP</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Website</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      <a href="#" class="text-blue-600 hover:underline">Ver sitio web</a>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Problema y Solución</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Problema</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                  <li>Descentralización: No existe un producto específico para el mercado de alquileres.</li>
                  <li>Accesibilidad: Comprar no siempre es la solución, ya que es costoso e ineficiente.</li>
                  <li>Acumulación: Las personas compran cosas que no usan y terminan acumulándolas sin necesidad.</li>
                </ul>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Solución</h3>
                <p class="text-gray-700">
                  Alugo propone un ecosistema de alquileres donde los usuarios puedan alquilar todo tipo de productos, 
                  encontrando lo que necesitan y publicando lo que no usan de manera eficiente. El objetivo es promover 
                  una economía circular y sostenible, cambiando el paradigma de "comprar" por "alquilar".
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modelo de Negocio</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2">
                  <li><strong>Marketplace:</strong> Donde los usuarios pueden alquilar y publicar productos.</li>
                  <li><strong>Tienda Oficial:</strong> Empresas de alquileres tienen un espacio para mostrar sus productos y llegar a más usuarios.</li>
                  <li><strong>Sistema de Gestión:</strong> Control en tiempo real de los alquileres, con notificaciones para usuarios.</li>
                </ul>
                <h3 class="text-lg font-medium text-gray-900 mt-4 mb-2">Monetización</h3>
                <ul class="space-y-2">
                  <li>Suscripción mensual por tienda oficial: USD 15/mes.</li>
                  <li>Publicación destacada: USD 6/mes.</li>
                  <li>Sistema de gestión: USD 22/mes.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mercado</CardTitle>
              </CardHeader>
              <CardContent>
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">TAM en Latinoamérica</dt>
                    <dd class="mt-1 text-sm text-gray-900">USD 89.040 millones</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">SAM</dt>
                    <dd class="mt-1 text-sm text-gray-900">USD 69.656 millones</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">SOM</dt>
                    <dd class="mt-1 text-sm text-gray-900">USD 13.648 millones</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-4">
                  <li>
                    <strong>2024:</strong> Crecimiento en usuarios, integración de chat, envíos, seguros y expansión regional.
                  </li>
                  <li>
                    <strong>2025:</strong> Monetización y consolidación regional.
                  </li>
                  <li>
                    <strong>2026:</strong> Logística y seguros propios.
                  </li>
                  <li>
                    <strong>2027:</strong> IPO (salida a bolsa).
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div class="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalles de Inversión</CardTitle>
              </CardHeader>
              <CardContent>
                <dl class="space-y-4">
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Recaudado</dt>
                    <dd class="mt-1 text-lg font-semibold text-gray-900">USD 0</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Tipo de contrato</dt>
                    <dd class="mt-1 text-lg font-semibold text-gray-900">SAFE</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Recaudación objetivo</dt>
                    <dd class="mt-1 text-lg font-semibold text-gray-900">USD 150.000</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Valuación postmoney</dt>
                    <dd class="mt-1 text-lg font-semibold text-gray-900">USD 2.000.000</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Ticket mínimo</dt>
                    <dd class="mt-1 text-lg font-semibold text-gray-900">USD 5.000</dd>
                  </div>
                </dl>
              </CardContent>
              <CardFooter>
                <a href="/startup/alugo/invest">
                  <Button class="w-full flex items-center justify-center gap-2">
                    Invertir
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equipo Fundador</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-4">
                  <li class="flex items-center space-x-4">
                    <!-- <img src="/placeholder.svg" alt="Joaquín Martinez Borque" class="w-12 h-12 rounded-full" /> -->
                    <div>
                      <p class="font-medium">Joaquín Martinez Borque</p>
                      <div class="">

                      </div>
                      <div class="flex items-center gap-1">
                        <p class="text-sm text-gray-500">CEO</p>
                        <Linkedin class="cursor-pointer h-3 w-4 text-[#0e76a8]" aria-hidden="true" fill="#0e76a8" fill-color="#ffffff"/>
                      </div>
                      
                    </div>
                  </li>
                  <li class="flex items-center space-x-4">
                    <!-- <img src="/placeholder.svg" alt="Jorge Ignacio Pico" class="w-12 h-12 rounded-full" /> -->
                    <div>
                      <p class="font-medium">Jorge Ignacio Pico</p>
                      <div class="flex items-center gap-1">
                        <p class="text-sm text-gray-500">COO</p>
                        <Link class="cursor-pointer h-3 w-4 text-gray-500" aria-hidden="true"/>
                      </div>
                      <!-- <p class="text-sm text-gray-500">COO</p> -->
                    </div>
                  </li>
                  <li class="flex items-center space-x-4">
                    <!-- <img src="/placeholder.svg" alt="Rafael Nicolas Trozzo" class="w-12 h-12 rounded-full" /> -->
                    <div>
                      <p class="font-medium">Rafael Nicolas Trozzo</p>
                      <div class="flex items-center gap-1">
                        <p class="text-sm text-gray-500">CTO</p>
                        <Linkedin class="cursor-pointer h-3 w-4 text-[#0e76a8]" aria-hidden="true" fill="#0e76a8" fill-color="#ffffff"/>
                      </div>
                      <!-- <p class="text-sm text-gray-500">CTO</p> -->
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conoce más</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <Button variant="outline" class="w-full flex items-center">
                  <Calendar class="mr-2 h-4 w-4" />
                  Reservar una reunión
                </Button>
                <Button variant="outline" class="w-full flex items-center">
                  <Globe class="mr-2 h-4 w-4" />
                  Ver Pitch Deck
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div class="my-8"></div>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
        <div class="flex">
          <div class="flex-shrink-0">
            <DollarSign class="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">¡Importante!</h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>
                Invertir en startups implica un alto nivel de riesgo. Nunca invierta más de lo que puede permitirse perder. 
                Las startups son más arriesgadas que las empresas públicas y, aunque tengan un alto potencial de retorno, 
                también existe la posibilidad de perder toda la inversión. Tenga en cuenta que, en promedio, las startups 
                que logran éxito tardan alrededor de 7 años en generar beneficios. Planifique sus inversiones con una 
                perspectiva a largo plazo y diversifique para mitigar riesgos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    
  </div>
</template>

<script setup>
import { ArrowRight, Calendar, DollarSign, Globe, Users, Linkedin, Link } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardFooter, CardTitle, Button } from './index.js'

</script>